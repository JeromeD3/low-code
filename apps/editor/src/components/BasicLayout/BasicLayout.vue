<script setup lang="ts">
import BasicHeader from '../BasicHeader.vue/BasicHeader.vue'
</script>

<template>
  <main>
    <div>
      <BasicHeader />
    </div>
    <div>
      <router-view />
    </div>
  </main>
</template>

<style scoped></style>
