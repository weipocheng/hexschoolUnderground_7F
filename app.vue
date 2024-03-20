<template>
  <div id="app">
    <OperationBarUpper />
    <OperationBarLower v-model:size="size" @change-color="changeColor" />
    <DrawArea :line-watch="size" :stroke-style="color" />
  </div>
</template>

<script setup lang="ts">
const size = ref(1)
const color = ref('#000')
const changeColor = (val: string) => {
  color.value = val
}
</script>

<style lang="scss">
  #app {
    position: relative;
    height: 100%;
    background: #e8e8e8;
    overflow: hidden;
  }
</style>