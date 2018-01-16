<template>
  <pm-layout title="Radio">
    <pm-radio v-model="value"
              :options="options"/>

    <pm-radio v-model="value"
              align="left"
              :options="options"/>

    <pm-cell-group>
      <pm-cell-item label="选中的值">
        {{ value }}
      </pm-cell-item>
    </pm-cell-group>
  </pm-layout>
</template>

<style scoped>
</style>
<script>
  export default {
    data() {
      return {
        value: '',
        options: [
          { label: '士多啤梨', value: 'strawberry' },
          { label: '苹果', value: 'apple' },
          { label: '橙', value: 'orange' }
        ]
      };
    }
  };
</script>
