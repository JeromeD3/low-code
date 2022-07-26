<script setup lang="ts">
import EditorLeft from '../EditorLeft/EditorLeft.vue'
import EditorRight from '../EditorRight/EditorRight.vue'
</script>

<template>
  <div class="h-full flex">
    <!-- 物料 -->
    <div h-full class="w-20%">
      <EditorLeft />
    </div>
    <!-- 画布 -->
    <div h-full class="w-60%"></div>
    <!-- 内容样式编辑器 -->
    <div h-full class="w-20%">
      <EditorRight />
    </div>
  </div>
</template>

<style scoped></style>
