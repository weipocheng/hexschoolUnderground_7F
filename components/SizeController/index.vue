<template>
  <div class="size-controller">
    <input type="number" v-model="model" oninput="if (value < 1) value = 1" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel()
</script>

<style lang="scss">
.size-controller {
  width: 74px;
  border-radius: 24px;
  background-color: #e8e8e8;
  box-sizing: border-box;
  padding: 10px 10px;

  input {
    background-color: #e8e8e8;
    border: transparent;
    width: 100%;
    outline: 0;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
}
</style>