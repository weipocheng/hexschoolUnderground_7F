<template>
	<div 
		class="operation-unit" 
		:class="{'operation-unit__pointer': props.pointer, 'operation-unit__disabled': props.disabled}">
		<slot></slot>
	</div>
</template>

<script setup>
	const props = defineProps({
		pointer: Boolean,
		disabled: Boolean
	})
</script>

<style lang="scss">
  .operation {
    &-unit {
      display: flex;
      align-items: center;
      gap: 0 14px;
      font-size: 20px;

			&__pointer {
				cursor: pointer;

				label {
					cursor: pointer;
				}
			}

			&__disabled {
				color: gray;
				cursor: not-allowed;
			}
    }
  }
</style>