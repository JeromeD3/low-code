<script setup lang="ts">
import BasicHeader from '../BasicHeader.vue/BasicHeader.vue'
/**
 * 这是全局布局文件
 * 另外可以使用daisyui，可以原子类写成属性，也可以写在class里面
 */
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
