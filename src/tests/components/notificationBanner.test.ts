import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import NotificationBanner from '../../../src/components/notificationBanner/NotificationBanner.vue'

describe('NotificationBanner', () => {
  it('デフォルトのスタイルが設定される', () => {
    const wrapper = mount(NotificationBanner)
    expect(wrapper.classes()).toContain('border-[3px]')
    expect(wrapper.classes()).toContain('text-blue-900')
  })

  it('variantのスタイルが反映される', () => {
    const wrapper = mount(NotificationBanner, {
      props: {
        variant: 'color-chip',
      },
    })
    expect(wrapper.classes()).toContain('border-2')
  })

  it('typeのスタイルとアイコンが反映される', () => {
    const wrapper = mount(NotificationBanner, {
      props: {
        type: 'warning',
      },
    })
    expect(wrapper.classes()).toContain('text-warning-yellow-2')
    expect(wrapper.find('svg').attributes()['aria-label']).toBe('警告')
  })

  it('カスタムのクラス名が反映される', () => {
    const wrapper = mount(NotificationBanner, {
      props: {
        class: 'custom-class',
      },
    })
    expect(wrapper.classes()).toContain('custom-class')
  })

  // TODO: 上手く動かない。保留
  // it('headingスロットが正しく反映される', () => {
  //   const wrapper = mount(NotificationBanner, {
  //     props: {
  //       slots: {
  //         heading: '<h3>見出し</h3>',
  //       },
  //     },
  //   })
  //   console.log(wrapper.find('h3'))
  //   // expect(wrapper.find('h3').text()).toBe('見出し')
  // })

  it('closeButtonが正しく挙動する', async () => {
    const wrapper = mount(NotificationBanner, {
      props: {
        closeButton: true,
      },
    })
    expect(wrapper.find('button').text()).toBe('閉じる')
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted().close.length).toBe(1)
  })
})
