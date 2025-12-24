import { cva } from 'class-variance-authority'

export const bannerVariants = cva(
  [
    'grid grid-cols-[var(--icon-size)_1fr_minmax(0,auto)] border-current p-4 [--icon-size:calc(24/16*1rem)] gap-x-3 gap-y-4',
    'desktop:gap-x-6 desktop:p-6 desktop:[--icon-size:calc(36/16*1rem)]',
  ],
  {
    variants: {
      variant: {
        standard: ' border-[3px] rounded-12',
        'color-chip':
          'border-2 !pl-6 shadow-[inset_8px_0_0_0_var(--color-chip-color)] desktop:!pl-10 desktop:shadow-[inset_16px_0_0_0_var(--color-chip-color)]',
      },
      type: {
        info1: 'text-blue-900 [--color-chip-color:currentColor]',
        info2: 'text-solid-gray-536 [--color-chip-color:currentColor]',
        warning: 'text-warning-yellow-2 [--color-chip-color:theme(colors.yellow.400)]',
        error: 'text-error-1 [--color-chip-color:currentColor]',
        success: 'text-success-2 [--color-chip-color:currentColor]',
      },
    },
    defaultVariants: {
      variant: 'standard',
    },
  }
)
