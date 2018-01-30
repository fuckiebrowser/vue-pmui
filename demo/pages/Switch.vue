<template>
  <pm-layout title="Switch">
    <pm-cell-group>
      <pm-cell-item
        v-for="t in type"
        :key="t"
        :title="t"
        label>
        {{ value }}
        <pm-switch :type="t"
                   v-model="value"/>
      </pm-cell-item>
    </pm-cell-group>

    <pm-cell-group>
      <pm-cell-item title="自定义值"
                    label>
        {{ value2 }}
        <pm-switch v-model="value2"
                   type="primary"
                   true-label="打开"
                   false-label="关闭"/>
      </pm-cell-item>
    </pm-cell-group>

    <pm-cell-group>
      <pm-cell-item title="禁用"
                    label>
        <pm-switch type="primary"
                   v-model="value"
                   disabled/>
      </pm-cell-item>
    </pm-cell-group>
  </pm-layout>
</template>

<script>
  export default {
    data() {
      return {
        type: ['primary', 'success', 'danger', 'warning'],
        value: true,
        value2: '打开'
      };
    }
  };
</script>
