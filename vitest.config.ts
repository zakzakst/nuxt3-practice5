import { defineConfig } from 'vitest/config'
import { defineVitestProject } from '@nuxt/test-utils/config'

export default defineConfig({
  test: {
    projects: [
      defineVitestProject({
        test: {
          name: 'components',
          include: ['src/tests/components/*.{test,spec}.ts'],
          // environment: 'nuxt',
        },
      }),
      defineVitestProject({
        test: {
          name: 'e2e',
          include: ['src/tests/e2e/*.{test,spec}.ts'],
          environment: 'nuxt',
        },
      }),
    ],
  },
})
