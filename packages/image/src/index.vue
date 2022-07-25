<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const { src } = defineProps<{
  src: string
}>()
</script>

<template>
  <img :src="src">
</template>

<style scoped></style>
