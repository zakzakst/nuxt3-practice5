<script setup lang="ts">
import { ref } from 'vue'
const inputValue = ref(6)
const checkedValue = ref(false)
const bindColor = ref('red')
const isNotificationShow = ref(true)
const onChangeBindColor = () => {
  if (bindColor.value === 'red') {
    bindColor.value = 'blue'
  } else {
    bindColor.value = 'red'
  }
}
const onNotificationClose = () => {
  isNotificationShow.value = false
}
</script>

<template>
  <div>TOP</div>
  <Divider color="gray-420" class="border-t-2" />
  <Input type="number" name="test" v-model="inputValue" step="0.1" />
  <p>{{ inputValue }}</p>
  <!-- <Checkbox v-model="checkedValue">Check Label</Checkbox> -->
  <Checkbox v-model="checkedValue" />
  <p>{{ JSON.stringify(checkedValue) }}</p>
  <p class="bind-color">bind style test</p>
  <button @click="onChangeBindColor">bind color 変更</button>
  <ErrorText>error text</ErrorText>
  <Breadcrumbs
    :items="[
      {
        label: 'HOME',
        href: '/',
      },
      {
        label: 'ユーザー',
        href: '/user',
      },
      {
        label: '山田太郎',
        isCurrent: 'page',
      },
    ]"
  />
  <template v-if="isNotificationShow">
    <NotificationBanner type="success" close-button @close="onNotificationClose">
      <template #heading><h3>見出し</h3></template>
      <p>文言</p>
    </NotificationBanner>
  </template>
</template>

<style scoped>
.bind-color {
  color: v-bind('bindColor');
}
</style>
