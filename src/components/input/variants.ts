import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  [
    'max-w-full rounded-8 border bg-white px-4 py-3 border-solid-gray-600 font-oln-16N-100 text-solid-gray-800',
    'hover:border-black',
    'focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300',
    'aria-disabled:border-solid-gray-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none',
  ],
  {
    variants: {
      blockSize: {
        lg: 'h-14',
        md: 'h-12',
        sm: 'h-10',
      },
      isError: {
        true: 'border-error-1 hover:border-red-1000',
      },
    },
    defaultVariants: {
      blockSize: 'md',
    },
  }
)

export type InputVariants = VariantProps<typeof inputVariants>
