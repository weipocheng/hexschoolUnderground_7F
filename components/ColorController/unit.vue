<template>
  <div class="color-controller__unit" :style="{
    'border-color': prop.color === '#fff' ? '#000' : prop.color,
    'background': prop.color
  }">
      <div v-show="prop.selected">
        <Icon 
          name="material-symbols:check-small-rounded" 
          :style="{'color': prop.color === '#000' ? '#fff' : ''}" 
          size="42" 
        />
      </div>
  </div>
</template>

<script setup>
const prop = defineProps({
  color: String,
  selected: Boolean
})
</script>

<style lang="scss">
.color-controller {
  &__unit {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 2px solid #000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>