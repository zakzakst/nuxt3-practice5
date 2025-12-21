import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Input from '../../../src/components/input/Input.vue'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    blockSize: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' },
      description: 'インプットテキストの垂直方向のサイズ（高さ）を以下から選択します。',
      table: {
        defaultValue: { summary: 'md' },
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
      control: { type: 'text' },
      description: 'クラス（スタイル上書きに利用）',
      table: {
        defaultValue: { summary: '' },
      },
    },
    modelValue: {
      control: { type: 'text' },
      description: '入力値',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    blockSize: 'md',
    isError: false,
  },
}
