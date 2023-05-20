// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    private: {
      email_address: process.env.EMAIL_ADDRESS,
      email_password: process.env.EMAIL_PASSWORD,
    },
  },
  modules: [
    "@formkit/nuxt",
    [
      "nuxt-mail",
      {
        message: {
          to: process.env.RECIPIENT_EMAIL_ADDRESS,
        },
        smtp: {
          host: process.env.SMPT_SERVER,
          port: process.env.SMPT_PORT,
          auth: {
            user: process.env.SENDER_EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
          },
        },
      },
    ],
  ],
  css: [
    "@/assets/css/tailwind.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
