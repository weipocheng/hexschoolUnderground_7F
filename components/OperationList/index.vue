<template>
  <div class="operation-list">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.operation {
  &-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 44px;
  }
}
</style>