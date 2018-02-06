<template>
  <pm-layout title="Picker">
    <pm-cell-group>
      <pm-cell-item
        title="时间选择器"
        label
        arrow
        @click.native="time">
        {{one.value[0] + ':' + one.value[1] + ':' + one.value[2]}}
      </pm-cell-item>
      <pm-cell-item
        title="选中的值">
        {{valueOne}}
      </pm-cell-item>
    </pm-cell-group>

    <pm-cell-group>
      <pm-cell-item
        title="水果"
        label
        arrow
        @click.native="fruit">
        {{ two.value[0] }}
      </pm-cell-item>
      <pm-cell-item
        title="选中的值">
        {{two.value[0]}}
      </pm-cell-item>
    </pm-cell-group>

    <pm-picker
      ref="time"
      v-model="one.value"
      :slots="one.slots">
    </pm-picker>

    <pm-picker
      ref="fruit"
      v-model="two.value"
      :slots="two.slots">
    </pm-picker>
  </pm-layout>
</template>
<style scoped></style>
<script>
  function ceil(num) {
    return +num < 10 ? `0${num}` : num;
  }

  export default {
    data() {
      const now = new Date();
      return {
        one: {
          value: [ceil(now.getHours()), ceil(now.getMinutes()), ceil(now.getSeconds())],
          slots: [
            { values: new Array(24).fill().map((v, i) => ceil(i)) },
            { values: new Array(60).fill().map((v, i) => ceil(i)) },
            { values: new Array(60).fill().map((v, i) => ceil(i)) }
          ]
        },
        two: {
          value: ['士多啤梨'],
          slots: [
            { values: ['士多啤梨', '苹果', '橙', '西瓜', '哈密瓜', '香蕉'] }
          ]
        }
      };
    },
    computed: {
      valueOne() {
        const val = this.one.value;
        const now = new Date();
        now.setHours(+val[0]);
        now.setMinutes(+val[1]);
        now.setSeconds(+val[2]);
        return now;
      }
    },
    methods: {
      time() {
        this.$refs.time.open();
      },
      fruit() {
        this.$refs.fruit.open();
      }
    }
  };
</script>
