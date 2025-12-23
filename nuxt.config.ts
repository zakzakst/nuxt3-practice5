import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'
import removeAttr from 'remove-attr'

const isProduction = process.env.NODE_ENV === 'production'
const attributesToRemove = isProduction ? ['data-testid'] : []

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: 'latest',
  srcDir: 'src/',
  css: ['./src/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
      removeAttr({
        extensions: ['vue'],
        // attributes: ['data-testid'],
        attributes: attributesToRemove,
      }),
    ],
  },
})
