import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../../../src/components/input/Input.vue'

describe('Input', () => {
  it('デフォルトのスタイルが設定される', () => {
    const wrapper = mount(Input)
    expect(wrapper.classes()).toContain('h-12')
  })

  it('blockSizeのスタイルが反映される', () => {
    const wrapper = mount(Input, {
      props: {
        blockSize: 'lg',
      },
    })
    expect(wrapper.classes()).toContain('h-14')
  })

  it('カスタムのクラス名が反映される', () => {
    const wrapper = mount(Input, {
      props: {
        class: 'custom-class',
      },
    })
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('isError時、スタイルと属性が反映される', () => {
    const wrapper = mount(Input, {
      props: {
        isError: true,
      },
    })
    expect(wrapper.classes()).toContain('border-error-1')
    expect(wrapper.attributes()['aria-invalid']).toBe('true')
  })

  it('v-modelが正しく挙動する', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'initial',
        // NOTE: 参考
        // https://test-utils.vuejs.org/guide/advanced/v-model.html#A-Simple-Example
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    })
    await wrapper.find('input').setValue('updated')
    expect(wrapper.props('modelValue')).toBe('updated')
  })
})
