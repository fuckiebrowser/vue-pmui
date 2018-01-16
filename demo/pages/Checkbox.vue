<template>
  <pm-layout title="Checkbox">
      <pm-cell-group>
        <pm-cell-item v-for="t in type"
                      :key="t"
                      :label="t">
          {{ value }}
          <pm-switch :type="t"
                     v-model="value"/>
        </pm-cell-item>
      </pm-cell-group>

      <pm-cell-group>
        <pm-cell-item label="自定义值">
          {{ value2 }}
          <pm-switch v-model="value2"
                     true-value="打开"
                     false-value="关闭"
          />
        </pm-cell-item>
      </pm-cell-group>
  </pm-layout>
</template>

<style scoped>
  .container {
    padding: 0 15px;
  }
</style>
<script>
  export default {
    data() {
      return {
        type: ['default', 'primary', 'success', 'danger', 'warning'],
        value: false,
        value2: '打开'
      };
    }
  };
</script>
