import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://innatus.cn",
  output: "static",
  compressHTML: true,
  build: {
    assets: "_assets",
  },
});
