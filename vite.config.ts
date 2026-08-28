// @lovable.dev/vite-tanstack-config already includes the required TanStack Start,
// React, Tailwind, tsconfig-paths, Nitro, and other plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env.LOVABLE_SANDBOX === "1" || !!process.env.DEV_SERVER__PROJECT_PATH;

export default defineConfig({
  // GitHub Pages is a static host. Outside the Lovable sandbox we disable
  // Nitro so TanStack Start can generate static prerendered HTML instead of
  // producing a Cloudflare server bundle that the prerenderer cannot load.
  nitro: isLovableSandbox ? undefined : false,

  tanstackStart: {
    // Keep the custom SSR error wrapper when running inside Lovable.
    server: { entry: "server" },

    // Generate static HTML for GitHub Pages.
    prerender: isLovableSandbox
      ? undefined
      : {
          enabled: true,
          crawlLinks: true,
        },
  },
});
