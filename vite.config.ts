import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/natasha-mann-artistry-2/",
  },

  tanstackStart: {
    server: { entry: "server" },

    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
  },
});
