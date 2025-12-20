<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { DividerVariants } from './variants'
import { dividerVariants } from './variants'
import { cn } from '../../lib/utils'

interface Props {
  color?: DividerVariants['color']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <hr :class="cn(dividerVariants({ color }), props.class)" />
</template>
