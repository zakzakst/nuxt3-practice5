<script setup lang="ts">
import { ref } from 'vue'
const inputValue = ref(6)
const checkedValue = ref(false)
</script>

<template>
  <div>TOP</div>
  <Divider color="gray-420" class="border-t-2" />
  <Input type="number" name="test" v-model="inputValue" step="0.1" />
  <p>{{ inputValue }}</p>
  <!-- <Checkbox v-model="checkedValue">Check Label</Checkbox> -->
  <Checkbox v-model="checkedValue" />
  <p>{{ JSON.stringify(checkedValue) }}</p>
</template>
