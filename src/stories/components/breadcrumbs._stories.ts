// TODO: Breadcrumbs内のimport BreadcrumbsItemのパスが通ってなく、エラーになる。一旦拡張子を変更して作業保留
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Breadcrumbs from '../../../src/components/breadcrumbs/Breadcrumbs.vue'

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
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
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    items: [
      {
        label: 'HOME',
        href: '/',
      },
      {
        label: 'ユーザー',
        href: '/user',
      },
      {
        label: '山田太郎',
        isCurrent: 'page',
      },
    ],
  },
  render: (args) => ({
    components: { Breadcrumbs },
    setup() {
      return { args }
    },
    template: '<Breadcrumbs v-bind="args" />',
  }),
}
