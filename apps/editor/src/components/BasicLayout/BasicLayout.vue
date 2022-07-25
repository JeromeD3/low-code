<script setup lang="ts">
import BasicHeader from '../BasicHeader.vue/BasicHeader.vue'
</script>

<template>
  <main class="h-screen">
    <div class="h-16">
      <BasicHeader />
    </div>
    <div class="h-[calc(100%-4rem)]">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped></style>
