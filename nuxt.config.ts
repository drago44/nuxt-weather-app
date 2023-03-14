// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      APP_SECRET: process.env.WEATHER_APP_SECRET,
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
});
