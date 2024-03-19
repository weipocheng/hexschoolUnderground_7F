<template>
  <div class="operation-bar-upper" :class="{'collapsed': !isOperationBarVisible}">
    <OperationList>
      <OperationUnit pointer>
        <Icon name="fa-solid:save" size="36" />
        <p>SAVE</p>
      </OperationUnit>
      <OperationUnit pointer>
        <Icon name="icon-park-solid:clear" size="36" />
        <p>CLEAR ALL</p>
      </OperationUnit>
      <OperationUnit pointer>
        <Icon name="ion:md-undo" size="36" />
        <p>UNDO</p>
      </OperationUnit>
      <OperationUnit pointer>
        <Icon name="ion:md-redo" size="36" />
        <p>REDO</p>
      </OperationUnit>
    </OperationList>
    <div class="ellipse-button" @click="toggleOperationBar">
      <Icon :name="isOperationBarVisible ? 'material-symbols:keyboard-arrow-up' : 'material-symbols:keyboard-arrow-down'" size="24" />
    </div>
  </div>
</template>

<script setup lang="ts">
const isOperationBarVisible = ref(true)

const toggleOperationBar = () => {
  isOperationBarVisible.value = !isOperationBarVisible.value
}
</script>

<style lang="scss">
.operation {
  &-bar-upper {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 22px 0;
    transition: transform 0.3s ease-in-out;

    &.collapsed {
      transform: translateY(-100%);
    }

    .ellipse-button {
      position: absolute;
      width: 56px;
      height: 56px;
      background-color: #fff;
      border-radius: 100%;
      cursor: pointer;
      left: 50%;
      bottom: 0%;
      transform: translate(-50%, 50%);

      .icon {
        position: absolute;
        left: 50%;
        top: 70%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>