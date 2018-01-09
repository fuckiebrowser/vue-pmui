<template>
  <pm-popup visible
            class="pm-toast"
            :mask="mask">

    <transition name="fade"
                @after-leave="$emit('close')">

      <div v-show="show"
           class="pm-toast--container">

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
</template>

<script type="text/jsx">
  import PmPopup from '../popup';

  export default {
    name: 'PmToast',
    components: { PmPopup },
    props: {
      type: String,
      mask: Boolean,
      icon: String,
      message: String,
      duration: Number
    },
    data() {
      return { show: false }
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
    },
    async mounted() {
      this.show = true;
      await this.$nextTick();

      if (this.duration) {
        setTimeout(
          () => {
            this.show = false;
          },
          this.duration
        );
      }
    }
  };
</script>

<style scoped>

</style>
