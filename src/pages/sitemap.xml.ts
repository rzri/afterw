import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const prerender = true;

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ?? new URL("https://innatus.cn");
  const posts = (await getCollection("posts", ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const pageCount = Math.max(1, Math.ceil(posts.length / 6));
  const urls = [
    ...Array.from({ length: pageCount }, (_, index) => (index === 0 ? "/" : `/${index + 1}/`)),
    ...posts.map((post) => `/posts/${post.slug}/`),
  ];
  const body = urls
    .map((path) => `  <url><loc>${escapeXml(new URL(path, baseUrl).href)}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
