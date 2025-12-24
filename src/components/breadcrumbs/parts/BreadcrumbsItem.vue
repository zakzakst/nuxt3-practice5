<script setup lang="ts">
import type { Item } from '../Breadcrumbs.vue'
import { cn } from '../../../lib/utils'

interface Props extends Item {}

const props = defineProps<Props>()
</script>

<template>
  <li
    :aria-current="props.isCurrent"
    :class="cn('inline wrap-break-word', { 'font-oln-16N-100': isCurrent })"
  >
    <component
      :is="props.href ? 'a' : 'span'"
      :href="props.href"
      :class="
        props.href &&
        cn(
          'text-blue-1000 font-oln-16N-100 underline underline-offset-[calc(3/16*1rem)]',
          'hover:text-blue-900 hover:decoration-[calc(3/16*1rem)]',
          'active:text-orange-700 active:decoration-1',
          'focus-visible:rounded-4 focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300'
        )
      "
    >
      {{ props.label }}
    </component>
    <template v-if="!isCurrent">
      <svg
        aria-hidden="true"
        class="mx-2 inline"
        fill="none"
        height="12"
        viewBox="0 0 12 12"
        width="12"
      >
        <path
          d="M4.50078 1.2998L3.80078 1.9998L7.80078 5.9998L3.80078 9.9998L4.50078 10.6998L9.20078 5.9998L4.50078 1.2998Z"
          fill="currentColor"
        />
      </svg>
    </template>
  </li>
</template>
