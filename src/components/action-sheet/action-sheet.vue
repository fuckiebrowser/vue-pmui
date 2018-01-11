<template>
  <popup ref="popup"
         class="pm-action-sheet"
         position="bottom"
         @mask-click="cancel"
         :visible.sync="visible">
    <div class="pm-action-sheet--panel">
      <div class="pm-action-sheet-item"
           v-for="(a,i) in actions"
           :class="{ highlight: a.highlight }"
           @click="confirm(a,i)"
           :key="i">
        {{a.title}}
      </div>
      <div class="pm-action-sheet-item cancel"
           v-if="showCancel"
           @click="cancel">
        取消
      </div>
    </div>
  </popup>
</template>

<script>
  import Popup from '../popup';

  export default {
    name: 'PmActionSheet',
    components: { Popup },
    props: {
      actions: {
        type: Array, default: () => []
      },
      showCancel: {
        type: Boolean, default: true
      }
    },
    data() {
      return {
        visible: false
      };
    },
    methods: {
      open() {
        this.visible = true;
      },
      cancel() {
        this.visible = false;
      },
      confirm(action, index) {
        if (action.callback) action.callback({ action, index });
        this.cancel();
      }
    }
  };
</script>
