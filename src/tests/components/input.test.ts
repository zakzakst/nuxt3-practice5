import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
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

  it('modelValueにrefを設定した時にリアクティブになる', async () => {
    const modelValue = ref('initial')
    const wrapper = mount(Input, {
      props: {
        modelValue: modelValue.value,
        // TODO: 下記の記述ピンときてない。調べる
        'onUpdate:modelValue': (value: string) => {
          modelValue.value = value
        },
      },
    })
    const input = wrapper.find('input')
    await input.setValue('updated')
    expect(modelValue.value).toBe('updated')
  })
})
