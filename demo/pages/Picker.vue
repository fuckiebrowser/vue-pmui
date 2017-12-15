<template>
  <gay-layout title="Picker">
    <gay-cell-group>
      <gay-cell-item
        label="时间"
        arrow>
        <span @click="pick">
          {{value}}
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
      return {
        value: [16, 1],
        slots: [
          { values: new Array(24).fill().map((v, i) => i) },
          { values: new Array(60).fill().map((v, i) => i) }
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
