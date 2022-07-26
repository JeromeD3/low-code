<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const toEditor = () => {
  router.push('/editor')
}
</script>

<template>
  <div>
    <button ml-5 mt-5 border rounded bg-red-400 @click="toEditor">goToEditor</button>
  </div>
</template>

<style scoped></style>
