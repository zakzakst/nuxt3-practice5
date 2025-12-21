<script setup lang="ts">
import { ref } from 'vue'
const inputValue = ref(6)
</script>

<template>
  <div>TOP</div>
  <Divider color="gray-420" class="border-t-2" />
  <Input type="number" name="test" v-model="inputValue" step="0.1" />
  <!-- <Input
    type="number"
    is-error="true"
    name="test"
    aria-disabled="true"
    :value="inputValue"
  /> -->
  <p>{{ inputValue }}</p>
</template>
