<template>
  <div class="operation-bar-upper" :class="{'collapsed': !isOperationBarVisible}">
    <OperationList>
      <OperationUnit pointer @click="save">
        <Icon name="fa-solid:save" size="36" />
        <p>SAVE</p>
      </OperationUnit>
      <OperationUnit pointer @click="clear">
        <Icon name="icon-park-solid:clear" size="36" />
        <p>CLEAR ALL</p>
      </OperationUnit>
      <OperationUnit :pointer="!undoListIsEmpty" :disabled="undoListIsEmpty" @click="undo" >
        <Icon name="ion:md-undo" size="36" />
        <p>UNDO</p>
      </OperationUnit>
      <OperationUnit :pointer="!redoListIsEmpty" :disabled="redoListIsEmpty" @click="redo" >
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
import { ArrayOperationEnum } from "@/assets/ts/enums/arrayOperationEnum"

const props = defineProps(['undoList', 'redoList'])
const emit = defineEmits(['changeUndoList', 'changeRedoList', 'clear', 'save'])

const isOperationBarVisible = ref(true)

const toggleOperationBar = () => {
  isOperationBarVisible.value = !isOperationBarVisible.value
}

const undoListIsEmpty = computed(() => props.undoList.length === 0)
const redoListIsEmpty = computed(() => props.redoList.length === 0)

const undo = () => {
  if (undoListIsEmpty.value) return
  emit('changeUndoList', { method: ArrayOperationEnum.Pop })
}

const redo = () => {
  if (redoListIsEmpty.value) return
  emit('changeRedoList')
}

const clear = () => {
  emit('clear')
}

const save = () => {
  emit('save')
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