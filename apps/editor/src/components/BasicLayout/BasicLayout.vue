<script setup lang="ts">
import BasicHeader from '../BasicHeader.vue/BasicHeader.vue'
</script>

<template>
  <main>
    <div>
      <BasicHeader />
    </div>
    <div>
      <slot></slot>
    </div>
  </main>
</template>

<style scoped></style>
