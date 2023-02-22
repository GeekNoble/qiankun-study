<template>
  <div>

    <p class="my-text">我是页面1</p>
    <a-button>按钮1</a-button>

    <a-space direction="vertical" :size="12">
      <a-date-picker v-model:value="value1" />
      <a-date-picker v-model:value="value2" picker="week" />
    </a-space>
  </div>
</template>
<script setup>
import { ref } from 'vue'
let value1 = ref()
let value2 = ref()
</script>
<style scoped>
.my-text {
  font-size: 18px;
  color: blueviolet;
  font-weight: bold;
  transform: translate(1px, 1px);
}
</style>