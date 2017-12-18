<template>
  <gay-layout title="Picker">
    <gay-cell-group>
      <gay-cell-item
        label="时间"
        arrow>
        <span @click="pick">
          {{value[0]}}月{{value[1]}}日
        </span>
      </gay-cell-item>
    </gay-cell-group>

    <gay-picker
      ref="picker"
      v-model="value"
      :slots="slots">
    </gay-picker>
  </gay-layout>
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
