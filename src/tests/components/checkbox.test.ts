import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkbox from '../../../src/components/checkbox/Checkbox.vue'

describe('Checkbox', () => {
  it('デフォルトのスタイルが設定される', () => {
    const wrapper = mount(Checkbox, {
      slots: {
        default: 'ラベル文言',
      },
    })
    expect(wrapper.find('label').classes()).toContain('gap-1')
    expect(wrapper.find('span[data-testid="checkbox-container"]').classes()).toContain('size-6')
    expect(wrapper.find('input').classes()).toContain('border-[calc(2/16*1rem)]')
    // NOTE: classesの返り値が各クラス名の配列だった。`pt-px font-dns-16N-130`のように複数クラスを一行でチェックする方法が分からなかったため2行で記載
    expect(wrapper.find('span[data-testid="checkbox-text"]').classes()).toContain('pt-px')
    expect(wrapper.find('span[data-testid="checkbox-text"]').classes()).toContain(
      'font-dns-16N-130'
    )
  })

  it('isErrorのスタイルが反映される', () => {
    const wrapper = mount(Checkbox, {
      props: {
        isError: true,
      },
    })
    expect(wrapper.find('input').classes()).toContain('border-error-1')
  })

  it('カスタムのクラス名が反映される', () => {
    const wrapper = mount(Checkbox, {
      props: {
        class: 'custom-class',
      },
    })
    expect(wrapper.find('input').classes()).toContain('custom-class')
  })

  it('v-modelが正しく挙動する', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        // NOTE: 参考
        // https://test-utils.vuejs.org/guide/advanced/v-model.html#A-Simple-Example
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    })
    await wrapper.find('input').setValue(true)
    expect(wrapper.props('modelValue')).toBe(true)
  })
})
