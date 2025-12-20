import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: 'latest',
  srcDir: 'src/',
  css: ['./src/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
