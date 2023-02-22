<template>
  <div>
    <router-link :to="{name: 'page1'}">
      子应用页面1
    </router-link>

    <router-view />
  </div>
</template>
<script setup>
</script>
<style scoped>

</style>