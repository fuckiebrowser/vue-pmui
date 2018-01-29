<template>
 <span class="pm-badge"
       :class="styleClass">
   <slot />
 </span>
</template>

<script>
  export default {
    name: 'PmBadge',
    props: {
      type: String,
      size: String,
      square: Boolean // 方角，默认圆角
    },
    computed: {
      styleClass() {
        const { type, size, square } = this;
        return {
          'pm-badge--square': square,
          'pm-badge--primary': type === 'primary',
          'pm-badge--success': type === 'success',
          'pm-badge--warning': type === 'warning',
          'pm-badge--danger': type === 'danger',
          'pm-badge--small': size === 'small',
          'pm-badge--large': size === 'large'
        };
      }
    }
  };
</script>
