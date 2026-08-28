export default defineConfig({
  base: "/natasha-mann-artistry-2/",

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
