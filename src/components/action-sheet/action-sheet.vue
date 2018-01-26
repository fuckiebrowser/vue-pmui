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
               @click="hide">
            {{ cancelText }}
          </div>
        </div>
      </transition>
    </popup>
  </transition>
</template>

<script>
  import Popup from '../popup';
  import display from '../../mixins/display';

  export default {
    name: 'PmActionSheet',
    mixins: [display],
    components: { Popup },
    props: {
      actions: {
        type: Array, default: () => []
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      showCancel: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      confirm(action, index) {
        if (action.callback) action.callback({ action, index });
        this.hide();
      }
    }
  };
</script>
