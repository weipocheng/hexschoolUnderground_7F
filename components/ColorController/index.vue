<template>
  <div class="color-controller">
    <ColorControllerUnit v-for="(unit, index) in colorList" :key="index" :color="unit.color" :selected="unit.selected"
      @click="chooseColor(unit)" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['changeColor'])

interface ColorItem {
  color: string;
  selected: boolean;
}
const colorList: ColorItem[] = reactive([
  {
    color: '#fff',
    selected: false,
  },
  {
    color: '#000',
    selected: true,
  },
  {
    color: '#9BFFCD',
    selected: false,
  },
  {
    color: '#00CC99',
    selected: false,
  },
  {
    color: '#01936F',
    selected: false,
  }
])
const chooseColor = (selectedUnit: ColorItem) => {
  const oldSelectedUnit: ColorItem | undefined = colorList.find((e) => e.selected);

  if (selectedUnit === oldSelectedUnit) return

  if (oldSelectedUnit) {
    oldSelectedUnit.selected = false;
  }

  selectedUnit.selected = !selectedUnit.selected

  emit('changeColor', selectedUnit.color)
}
</script>

<style lang="scss">
.color-controller {
  display: flex;
  gap: 0 8px;
}
</style>