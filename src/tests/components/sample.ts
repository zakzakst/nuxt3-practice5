import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Sample from '../../../src/components/sample/Sample.vue'

describe('Sample component', () => {
  it('文字列が表示される', () => {
    const wrapper = mount(Sample)
    expect(wrapper.text()).toContain('Sample')
  })
})
