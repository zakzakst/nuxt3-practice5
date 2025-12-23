import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Checkbox from '../../../src/components/checkbox/Checkbox.vue'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' },
      description: 'チェックボックスのサイズを以下から選択します。',
      table: {
        defaultValue: { summary: 'sm' },
        type: { summary: "'lg', 'md', 'sm'" },
      },
    },
    isError: {
      description: 'エラー状態であるかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    class: {
      type: 'string',
      control: { type: 'text' },
      description: 'クラス（スタイル上書きに利用）',
      table: {
        defaultValue: { summary: '' },
      },
    },
    modelValue: {
      description: '入力値',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    size: 'sm',
    isError: false,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args }
    },
    // TODO: ラベル文言をstorybookの入力フォームと連動させる方法が分からない。調べる
    template: '<Checkbox v-bind="args">チェックボックスのラベル</Checkbox>',
  }),
}
