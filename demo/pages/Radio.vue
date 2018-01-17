<template>
  <pm-layout title="Radio">
    <h3>&ensp;RadioList</h3>
    <pm-radio-list v-model="value"
                   :options="options"/>
    <h3>&ensp;RadioList - 左对齐</h3>
    <pm-radio-list v-model="value"
                   align="left"
                   :options="options"/>

    <pm-cell-group>
      <pm-cell-item title="单独使用" label>
        <pm-radio v-for="(o,i) in options"
                  :key="i"
                  :label="o.value"
                  v-model="value">
          {{o.label}}
        </pm-radio>
      </pm-cell-item>
      <pm-cell-item title="选中的值" label>
        {{ value }}
      </pm-cell-item>
    </pm-cell-group>
  </pm-layout>
</template>

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
