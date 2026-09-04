import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export const prerender = true;

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ?? new URL("https://innatus.cn");
  const posts = (await getCollection("posts", ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const items = posts
    .map((post) => {
      const link = new URL(`/posts/${post.slug}/`, baseUrl).href;
      const description = post.data.description
        ? `\n      <description>${escapeXml(post.data.description)}</description>`
        : "";
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${escapeXml(link)}</link>${description}
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      <guid>${escapeXml(link)}</guid>
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${baseUrl.href}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>zh-CN</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
