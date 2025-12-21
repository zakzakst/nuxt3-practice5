<script setup lang="ts">
import type {
  HTMLAttributes,
  // TODO: 上手くタグの属性設定できなかった（※propsに設定しなくてもタグに反映されたので、静的型付けできないが一旦このまま）
  // InputHTMLAttributes,
} from 'vue'
import { computed } from 'vue'
import type { InputVariants } from './variants'
import { inputVariants } from './variants'
import { cn } from '../../lib/utils'

interface Props {
  blockSize?: InputVariants['blockSize']
  isError?: InputVariants['isError']
  class?: HTMLAttributes['class']
  modelValue?: string | number
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (v: string | number) => emit('update:modelValue', v),
})
</script>

<template>
  <input
    v-model="value"
    :class="cn(inputVariants({ blockSize, isError }), props.class)"
    :aria-invalid="isError || undefined"
  />
</template>
