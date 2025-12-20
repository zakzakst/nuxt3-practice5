import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const dividerVariants = cva('', {
  variants: {
    color: {
      'gray-420': 'border-solid-gray-420',
      'gray-536': 'border-solid-gray-536',
      black: 'border-black',
    },
  },
  defaultVariants: {
    color: 'gray-420',
  },
})

export type DividerVariants = VariantProps<typeof dividerVariants>
