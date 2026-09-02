import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://innatus.example.com",
  output: "static",
  compressHTML: true,
  build: {
    assets: "_assets",
  },
});
