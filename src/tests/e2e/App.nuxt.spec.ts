import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
// import { expect, test } from '@nuxt/test-utils/playwright'
// import { createPage } from '@nuxt/test-utils/e2e'
import App from '../../app.vue'

describe('e2eサンプル', () => {
  it('mountSuspended', async () => {
    const component = await mountSuspended(App, { route: '/' })
    expect(component.find('header').text()).toBe('デフォルトレイアウト')
  })
})

// test('createPage', async () => {
//   const page = await createPage('/')
//   expect(page.getByText('デフォルトレイアウト')).toBe(true)
// })
