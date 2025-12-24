import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Breadcrumbs from '../../../src/components/breadcrumbs/Breadcrumbs.vue'

describe('Breadcrumbs', () => {
  it('カスタムのクラス名が反映される', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        items: [],
        class: 'custom-class',
      },
    })
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('itemsの内容が反映される', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        items: [
          {
            label: 'HOME',
            href: '/',
          },
          {
            label: 'ユーザー',
            isCurrent: 'page',
          },
        ],
      },
    })
    expect(wrapper.find('a').attributes().href).toBe('/')
    expect(wrapper.find('a').text()).toBe('HOME')
    expect(wrapper.find('span').text()).toBe('ユーザー')
    expect(wrapper.find('li:last-child').attributes()['aria-current']).toBe('page')
  })
})
