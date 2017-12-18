<template>
  <gay-layout title="ActionSheet">
    <gay-cell-group>
      <gay-cell-item
        @click.native="pick"
        :label="label"
        arrow>
      </gay-cell-item>
    </gay-cell-group>

    <gay-action-sheet
      ref="sheet"
      :actions="actions">
    </gay-action-sheet>
  </gay-layout>
</template>
<style scoped></style>
<script>
  export default {
    data() {
      const callback = (a) => {
        this.label = a.title;
      };

      return {
        label: '苹果',
        actions: [
          {
            title: '士多啤梨',
            callback
          },
          {
            title: '苹果',
            highlight: true,
            callback
          },
          {
            title: '橙',
            callback
          }
        ]
      };
    },
    methods: {
      pick() {
        this.$refs.sheet.open();
      }
    }
  };
</script>
