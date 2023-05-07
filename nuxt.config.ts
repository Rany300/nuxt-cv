// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      '@/assets/css/tailwind.scss',
      '@fortawesome/fontawesome-svg-core/styles.css',
    ],
  
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })
