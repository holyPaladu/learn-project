export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/scss/main.scss' // Main SCSS file
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/utils/_variables.scss" as *;
            @use "@/assets/scss/utils/_mixins.scss" as *;
          `
        }
      }
    }
  },
})