<script setup lang="ts">
import BasicHeader from '../BasicHeader.vue/BasicHeader.vue'
</script>

<template>
  <div>
    <div>
      <BasicHeader />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
