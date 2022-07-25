<script setup lang="ts">
import BasicLayout from './components/BasicLayout/BasicLayout.vue'
</script>

<template>
  <BasicLayout>
    <RouterView />
  </BasicLayout>
</template>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
}
</style>
