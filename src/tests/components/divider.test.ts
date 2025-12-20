import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Divider from '../../../src/components/divider/Divider.vue'

describe('Divider', () => {
  it('デフォルトのスタイルが設定される', () => {
    const wrapper = mount(Divider)
    expect(wrapper.classes()).toContain('border-solid-gray-420')
  })

  it('colorのスタイルが反映される', () => {
    const wrapper = mount(Divider, {
      props: {
        color: 'gray-536',
      },
    })
    expect(wrapper.classes()).toContain('border-solid-gray-536')
  })

  it('カスタムのクラス名が反映される', () => {
    const wrapper = mount(Divider, {
      props: {
        class: 'border-t-2',
      },
    })
    expect(wrapper.classes()).toContain('border-t-2')
  })
})
