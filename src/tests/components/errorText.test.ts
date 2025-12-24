import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorText from '../../../src/components/errorText/ErrorText.vue'

describe('ErrorText', () => {
  it('カスタムのクラス名が反映される', () => {
    const wrapper = mount(ErrorText, {
      props: {
        class: 'custom-class',
      },
    })
    expect(wrapper.classes()).toContain('custom-class')
  })
})
