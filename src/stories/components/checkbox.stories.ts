import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Checkbox from '../../../src/components/checkbox/Checkbox.vue'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
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
      description: '入力値',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Default では線の太さは`1px`、スタイルは`solid`に設定されています。変更したい場合はクラスを使って上書きしてください。',
      },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    // color: 'gray-420',
  },
}
