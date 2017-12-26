<template>
  <pm-layout title="ActionSheet">
    <pm-cell-group>
      <pm-cell-item
        @click.native="pick"
        :label="label"
        arrow>
      </pm-cell-item>
    </pm-cell-group>

    <pm-action-sheet
      ref="sheet"
      :actions="actions">
    </pm-action-sheet>
  </pm-layout>
</template>
<style scoped></style>
<script>
  export default {
    data() {
      const callback = ({ action }) => {
        this.label = action.title;
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
