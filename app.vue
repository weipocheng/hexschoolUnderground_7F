<template>
  <div id="app">
    <OperationBarUpper :undo-list="undoList" :redo-list="redoList" @change-undo-list="changeUndoList"
      @change-redo-list="changeRedoList" @clear="clear" @save="save" @called-re-paint="calledRePaint" />
    <OperationBarLower v-model:size="size" @change-color="changeColor" />
    <DrawArea ref="drawArea" :line-width="size" :stroke-style="color" @change-undo-list="changeUndoList"
      @clear-redo-list="clearRedoList" />
  </div>
</template>

<script setup lang="ts">
import { type ChangeList } from '@/assets/ts/interfaces/'
import { ArrayOperationEnum } from '@/assets/ts/enums/'

useHead({
  title: '7F-畫版',
})

const size = ref(1)
const color = ref('#000')
const undoList: Ref<HTMLImageElement[]> = ref([])
const redoList: Ref<HTMLImageElement[]> = ref([])
const drawArea = ref()

const changeColor = (val: string) => {
  color.value = val
}

const changeUndoList = (data: ChangeList) => {
  if (data.method === ArrayOperationEnum.Push && data.image) {
    undoList.value.push(data.image)
  }

  if (data.method === ArrayOperationEnum.Pop) {
    const popElement = undoList.value.pop()
    if (popElement) {
      redoList.value.push(popElement)
    }

    if (undoList.value[undoList.value.length - 1]) {
      drawArea.value.rePaint(undoList.value[undoList.value.length - 1])
    } else {
      drawArea.value.clear()
    }
  }
}

const changeRedoList = () => {
  const popElement = redoList.value.pop()
  
  if (popElement) {
    undoList.value.push(popElement)
  }
  drawArea.value.rePaint(popElement)
}

const clearRedoList = () => {
  redoList.value.splice(0, redoList.value.length)
}

const clear = () => {
  undoList.value.splice(0, undoList.value.length)
  redoList.value.splice(0, redoList.value.length)
  drawArea.value.clear()
}

const save = () => {
  drawArea.value.save()
}

const calledRePaint = (image: HTMLImageElement) => {
  drawArea.value.handleUpload(image)
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