<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import BreadcrumbsItem from './parts/BreadcrumbsItem.vue'

export type Item = {
  label: string
  href?: string
  isCurrent?: 'page'
}

interface Props {
  items: Item[]
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <nav :class="class">
    <ol class="inline">
      <BreadcrumbsItem v-for="item in props.items" :key="item.label" v-bind="item" />
    </ol>
  </nav>
</template>
