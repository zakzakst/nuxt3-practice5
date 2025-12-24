import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NotificationBanner from '../../../src/components/notificationBanner/NotificationBanner.vue'
import { fn } from 'storybook/test'

const meta = {
  title: 'Components/NotificationBanner',
  component: NotificationBanner,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['info1', 'info2', 'warning', 'error', 'success'],
      control: { type: 'radio' },
      description: 'お知らせバナーのタイプを以下から選択します。',
      table: {
        defaultValue: { summary: 'info1' },
        type: { summary: "'info1', 'info2', 'warning', 'error', 'success'" },
      },
    },
    variant: {
      options: ['standard', 'color-chip'],
      control: { type: 'radio' },
      description: 'お知らせバナーのvariantを以下から選択します。',
      table: {
        defaultValue: { summary: 'standard' },
        type: { summary: "'standard', 'color-chip'" },
      },
    },
    closeButton: {
      description: '閉じるボタンを表示するかどうかを指定します。',
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
  },
} satisfies Meta<typeof NotificationBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    closeButton: true,
    onClose: fn(),
  },
  render: (args) => ({
    components: { NotificationBanner },
    setup() {
      return { args }
    },
    template: `
      <NotificationBanner v-bind="args">
        <template #heading><h3>見出し</h3></template>
        <p>お知らせの内容が入ります。</p>
      </NotificationBanner>
    `,
  }),
}
