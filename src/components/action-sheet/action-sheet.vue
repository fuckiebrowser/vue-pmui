<template>
  <transition name="fade">
    <popup ref="popup"
           class="pm-action-sheet"
           position="bottom"
           @mask-click="cancel"
           v-show="visible">
      <transition name="slide-from-bottom">
        <div class="pm-action-sheet--panel"
             v-show="visible">
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
      </transition>
    </popup>
  </transition>
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
