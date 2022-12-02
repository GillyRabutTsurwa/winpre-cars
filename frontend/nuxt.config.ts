// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "2cbrvq50",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          /**
           * IMPORTANTNOTE:
           * for including multiple files, as the documentation suggests, @use doesn't work. it only works for including one file
           * for multiple files, like I am doing below, @import works instead.
           * TODO: put this as an issue in Nuxt if it doesn't exist already
           * in any case, this works. we move
           */
          additionalData: `
          @import "@/assets/sass/abstracts/_variables.scss";
          @import "@/assets/sass/base/_reset.scss";
          @import "@/assets/sass/base/_typography.scss";
          `,
        },
      },
    },
  },
});
