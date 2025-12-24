<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import NotificationBannerIcon from './parts/NotificationBannerIcon.vue'
import { bannerVariants } from './variants'
import { cn } from '../../lib/utils'

interface Props {
  type?: 'info1' | 'info2' | 'warning' | 'error' | 'success'
  variant?: 'standard' | 'color-chip'
  class?: HTMLAttributes['class']
  closeButton?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info1',
})

const emit = defineEmits(['close'])

const onClickClose = () => {
  emit('close')
}
</script>

<template>
  <div :class="cn(bannerVariants({ type, variant }), props.class)">
    <div className="mt-[calc(2/16*1rem)] desktop:mt-0">
      <NotificationBannerIcon className="h-auto max-w-full" :type="props.type" />
    </div>
    <div class="font-std-16N-170 text-solid-gray-800">
      <template v-if="$slots.heading">
        <div
          :class="
            cn(
              'font-std-17B-170 text-solid-gray-900 col-start-1',
              'desktop:mt-0.5 desktop:font-std-20B-160'
            )
          "
        >
          <slot name="heading" />
        </div>
      </template>

      <slot />
    </div>

    <template v-if="props.closeButton">
      <button
        :class="
          cn(
            'inline-flex items-center gap-0.5 -mt-2 -mr-3 text-solid-gray-900 border border-transparent rounded-8',
            'desktop:px-2 desktop:py-0.5 desktop:mt-0 desktop:mr-0',
            'hover:border-solid-gray-900',
            'focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 focus-visible:bg-yellow-300 focus-visible:border-transparent'
          )
        "
        type="button"
        @click.prevent="onClickClose"
      >
        <svg
          aria-hidden="true"
          class="desktop:size-[calc(30/16*1rem)]"
          fill="none"
          height="44"
          viewBox="0 0 44 44"
          width="44"
        >
          <g>
            <path
              d="M13.5789 32L12 30.4211L20.4211 22L12 13.5789L13.5789 12L22 20.4211L30.4211 12L32 13.5789L23.5789 22L32 30.4211L30.4211 32L22 23.5789L13.5789 32Z"
              fill="currentColor"
            />
          </g>
        </svg>
        <span className="sr-only font-oln-16N-100 desktop:not-sr-only">閉じる</span>
      </button>
    </template>
  </div>
</template>
