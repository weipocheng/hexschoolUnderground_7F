<template>
  <div class="draw-area">
    <canvas ref="canvas" @mousedown="handleMouseDown($event)" @mousemove="handleMouseMove($event)"
      @mouseup="handleMouseUp($event)" />
  </div>
</template>

<script setup lang="ts">
import { ArrayOperationEnum } from '@/assets/ts/enums/'
import { type Canvas } from '@/assets/ts/interfaces/'

const prop = defineProps({
  lineWidth: Number,
  strokeStyle: String
})

const emit = defineEmits(['changeUndoList', 'clearRedoList'])

const canvasData: Canvas = reactive({
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
  lineWidth: 1,
  strokeStyle: '#000'
})

const canvas = ref<HTMLCanvasElement>()
const ctx = ref<CanvasRenderingContext2D>()
const isDragging = ref(false)

onMounted(() => {
  ctx.value = canvas.value?.getContext('2d') || undefined

  resizeCanvas()
})

watch(() => prop.lineWidth, cur => {
  if (cur) {
    canvasData.lineWidth = cur
  }
})

watch(() => prop.strokeStyle, cur => {
  if (cur) {
    canvasData.strokeStyle = cur
  }
})

const resizeCanvas = () => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
  }
}

const handleMouseDown = (e: MouseEvent) => {
  isDragging.value = true
  canvasData.startX = e.clientX
  canvasData.startY = e.clientY

  if (ctx.value) {
    ctx.value.lineWidth = canvasData.lineWidth
    ctx.value.strokeStyle = canvasData.strokeStyle

    ctx.value.beginPath()
    ctx.value.moveTo(canvasData.startX, canvasData.startY)
  }
}

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return

  canvasData.endX = e.clientX
  canvasData.endY = e.clientY

  if (ctx.value) {
    ctx.value.lineTo(canvasData.endX, canvasData.endY)
    ctx.value.stroke()
  }
}

const handleMouseUp = (e: MouseEvent) => {
  if (!isDragging.value) return
  isDragging.value = false

  handleUndoRedoStates()
}

/**
 * 處理 Undo 和 Redo 操作的狀態
 */
const handleUndoRedoStates = () => {
  emit('clearRedoList')

  emit('changeUndoList', { method: ArrayOperationEnum.Push, image: getSnapShot() })
}

/**
 * 取得當前canvas快照
 */
const getSnapShot = () => {
  const img = new Image

  if (canvas.value) {
    img.src = canvas.value.toDataURL()
  }

  return img
}

const rePaint = (image: HTMLImageElement) => {
  clear()
  if (!ctx.value || !image) return
  ctx.value.drawImage(image, 0, 0)
}

const handleUpload = (image: HTMLImageElement) => {
  image.onload = () => {
    if (!ctx.value || !image) return
    ctx.value.drawImage(image, 0, 0)
    handleUndoRedoStates()
  }
}

const clear = () => {
  if (!canvas.value || !ctx.value) return
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
}

const save = () => {
  const a = document.createElement('a')
  a.href = getSnapShot().src
  a.download = `${Date.now()}.png`
  a.click()
}

defineExpose({
  rePaint,
  clear,
  save,
  handleUpload
})

</script>

<style lang="scss">
.draw-area {
  width: 100%;
  height: 100%;
}
</style>