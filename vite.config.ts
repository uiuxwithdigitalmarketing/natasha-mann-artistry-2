import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env.LOVABLE_SANDBOX === "1" ||
  !!process.env.DEV_SERVER__PROJECT_PATH;

export default defineConfig({
  vite: {
    base: "/natasha-mann-artistry-2/",
  },

  nitro: isLovableSandbox ? undefined : false,

  tanstackStart: {
    server: { entry: "server" },

    prerender: isLovableSandbox
      ? undefined
      : {
          enabled: true,
          crawlLinks: true,
        },
  },
});
