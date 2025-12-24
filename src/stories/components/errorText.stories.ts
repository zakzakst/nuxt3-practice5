import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ErrorText from '../../../src/components/errorText/ErrorText.vue'

const meta = {
  title: 'Components/ErrorText',
  component: ErrorText,
  tags: ['autodocs'],
  argTypes: {
    class: {
      type: 'string',
      control: { type: 'text' },
      description: 'クラス（スタイル上書きに利用）',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
} satisfies Meta<typeof ErrorText>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({
    components: { ErrorText },
    setup() {
      return { args }
    },
    template: '<ErrorText v-bind="args">＊エラーテキスト</ErrorText>',
  }),
}
