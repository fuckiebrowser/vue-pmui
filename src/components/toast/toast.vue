<template>
  <transition name="fade">
    <pm-popup v-show="visible"
              class="pm-toast"
              :mask="mask">

      <transition name="zoom"
                  @after-leave="$emit('close')">

        <div class="pm-toast--container"
             v-show="visible">

          <i v-if="icon"
             :class="icon"
             class="pm-toast--icon"></i>

          <i v-else-if="type"
             class="pm-toast--icon iconfont"
             :class="typeIcon"></i>

          <div class="pm-toast--content">
            {{message}}
          </div>

        </div>

      </transition>
    </pm-popup>
  </transition>
</template>

<script type="text/jsx">
  import PmPopup from '../popup';
  import display from '../../mixins/display';

  export default {
    name: 'PmDialog',
    mixins: [display],
    components: { PmPopup },
    props: {
      type: String,
      mask: Boolean,
      icon: String,
      message: String,
      duration: Number
    },
    computed: {
      typeIcon() {
        return {
          'icon-loading': this.type === 'loading',
          'icon-check': this.type === 'success',
          'icon-close': this.type === 'error',
          'icon-warn': this.type === 'warning',
          'icon-info': this.type === 'info',
        };
      }
    }
  };
</script>

<style scoped>

</style>
