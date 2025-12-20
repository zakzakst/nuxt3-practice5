import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Sample from '../../../src/components/sample/Sample.vue'

const meta = {
  title: 'Components/Sample',
  component: Sample,
  tags: ['autodocs'],
} satisfies Meta<typeof Sample>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
