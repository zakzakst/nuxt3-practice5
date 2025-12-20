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
    ],
  },
})
