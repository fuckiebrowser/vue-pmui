<template>
  <pm-layout title="Picker">
    <pm-cell-group>
      <pm-cell-item
        label="时间"
        arrow>
        <span @click="pick">
          {{value[0]}}月{{value[1]}}日
        </span>
      </pm-cell-item>
    </pm-cell-group>

    <pm-picker
      ref="picker"
      v-model="value"
      :slots="slots">
    </pm-picker>
  </pm-layout>
</template>
<style scoped></style>
<script>
  export default {
    data() {
      const now = new Date();
      return {
        value: [now.getMonth() + 1, now.getDate()],
        slots: [
          { values: new Array(12).fill().map((v, i) => i + 1) },
          { values: new Array(31).fill().map((v, i) => i + 1) }
        ]
      };
    },
    methods: {
      pick() {
        this.$refs.picker.open();
      }
    }
  };
</script>
