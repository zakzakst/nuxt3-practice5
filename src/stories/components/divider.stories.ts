import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Divider from '../../../src/components/divider/Divider.vue'

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['gray-420', 'gray-536', 'black'],
      control: { type: 'radio' },
      description: '線の色を以下から選択します。',
      table: {
        defaultValue: { summary: 'gray-420' },
        type: { summary: "'gray-420', 'gray-536', 'black'" },
      },
    },
    class: {
      control: { type: 'text' },
      description: 'クラス（スタイル上書きに利用）',
      table: {
        defaultValue: { summary: '' },
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
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    color: 'gray-420',
  },
}
