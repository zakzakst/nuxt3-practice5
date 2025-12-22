<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import {
  checkboxVariants,
  checkboxInputVariants,
  checkboxLabelVariants,
  checkboxLabelTextVariants,
} from './variants'
import { cn } from '../../lib/utils'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  isError?: boolean
  class?: HTMLAttributes['class']
  modelValue?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (v: string | number) => emit('update:modelValue', v),
})
</script>

<template>
  <template v-if="$slots.default">
    <label :class="checkboxLabelVariants({ size })">
      <span :class="checkboxVariants({ size })">
        <input
          v-model="value"
          :class="cn(checkboxInputVariants({ size, isError }), props.class)"
          type="checkbox"
        />
      </span>
      <span :class="checkboxLabelTextVariants({ size })">
        <slot />
      </span>
    </label>
  </template>
  <template v-else>
    <span :class="checkboxVariants({ size })">
      <input
        v-model="value"
        :class="cn(checkboxInputVariants({ size, isError }), props.class)"
        type="checkbox"
      />
    </span>
  </template>
</template>
