<template>
  <div class="operation-bar-lower" :class="{ 'collapsed': !isOperationBarVisible }">
    <OperationList>
      <OperationUnit>
        <Icon name="dashicons:admin-customizer" size="42" />
      </OperationUnit>
      <OperationUnit>
        <p>SIZE:</p>
        <SizeController />
        <p>px</p>
      </OperationUnit>
      <OperationUnit>
        <p>COLOR:</p>
        <ColorController />
      </OperationUnit>
    </OperationList>
    <div class="ellipse-button" @click="toggleOperationBar" :class="{ 'collapsed': !isOperationBarVisible }">
      <Icon :class="{ 'collapsed': !isOperationBarVisible }"
        :name="isOperationBarVisible ? 'material-symbols:keyboard-arrow-down' : 'dashicons:admin-customizer'"
        size="24" />
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
  &-bar-lower {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: #fff;
    padding: 16px 32px;
    border-radius: 44px;
    box-shadow: 0px 4px 16px #00000029;
    transition: transform 0.3s ease-in-out;

    &.collapsed {
      transform: translate(-50%, calc(100% + 40px));
    }

    .ellipse-button {
      position: absolute;
      width: 56px;
      height: 56px;
      background-color: #fff;
      border-radius: 100%;
      cursor: pointer;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      transition: transform 0.3s ease-in-out;

      &.collapsed {
        transform: translate(-50%, -150%);
        box-shadow: 0px 4px 16px #00000029;
      }

      .icon {
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);

        &.collapsed {
          top: 50%;
        }
      }
    }
  }
}
</style>