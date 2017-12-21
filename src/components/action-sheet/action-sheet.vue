<template>
  <popup ref="popup"
         class="gay-action-sheet"
         position="bottom"
         @mask-click="cancel"
         :visible.sync="visible">
    <div class="gay-action-sheet--panel">
      <div class="gay-action-sheet-item"
           v-for="(a,i) in actions"
           :class="{ highlight: a.highlight }"
           @click="confirm(a,i)"
           :key="i">
        {{a.title}}
      </div>
      <div class="gay-action-sheet-item cancel"
           @click="cancel"> 取消
      </div>
    </div>
  </popup>
</template>

<script>
  import Popup from '../popup';

  export default {
    name: 'GayActionSheet',
    components: { Popup },
    props: {
      actions: {
        type: Array, default: () => []
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
