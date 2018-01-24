<template>
  <pm-layout title="Checkbox">
    <h3>&ensp;CheckboxList</h3>
    <pm-checkbox-list v-model="value"
                   :options="options"/>
    <h3>&ensp;CheckboxList - 左对齐</h3>
    <pm-checkbox-list v-model="value"
                   align="left"
                   :options="options"/>

    <pm-cell-group>
      <pm-cell-item title="数组">
        <pm-checkbox v-for="(o,i) in options"
                  :key="i"
                  :label="o.value"
                  v-model="value">
          {{o.label}}
        </pm-checkbox>
      </pm-cell-item>
      <pm-cell-item title="选中的值">
        {{ value }}
      </pm-cell-item>
    </pm-cell-group>

    <pm-cell-group>
      <pm-cell-item title="数字字符串" label>
        <pm-checkbox true-label="on"
                     false-label="off"
                     v-model="value2">
                     全选
        </pm-checkbox>
      </pm-cell-item>
      <pm-cell-item title="选中的值" label>
        {{ value2 }}
      </pm-cell-item>
    </pm-cell-group>

    <pm-cell-group>
      <pm-cell-item title="布尔值" label>
        <pm-checkbox v-model="value3">
                     是否
        </pm-checkbox>
      </pm-cell-item>
      <pm-cell-item title="选中的值" label>
        {{ value3 }}
      </pm-cell-item>
    </pm-cell-group>
  </pm-layout>
</template>

<script>
export default {
  data() {
    return {
      value: ['apple'],
      options: [
        { label: '士多啤梨', value: 'strawberry' },
        { label: '苹果 disabled', value: 'apple', disabled: true },
        { label: '橙', value: 'orange' }
      ],
      value2: 'on',
      value3: false
    };
  }
};
</script>
