import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ErrorText from '../../../src/components/errorText/ErrorText.vue'

const meta = {
  title: 'Components/ErrorText',
  component: ErrorText,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorText>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => ({
    components: { ErrorText },
    template: '<ErrorText>＊エラーテキスト</ErrorText>',
  }),
}
