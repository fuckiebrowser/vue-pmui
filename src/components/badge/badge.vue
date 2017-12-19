<template>
 <span class="gay-badge"
       :class="styleClass">
   <slot>0</slot>
 </span>
</template>

<script>
  export default {
    name: 'GayBadge',
    props: {
      type: String,
      size: String,
      square: Boolean // 方角，默认圆角
    },
    computed: {
      styleClass() {
        const { type, size, square } = this;
        return {
          'gay-badge--square': square,
          'gay-badge--primary': type === 'primary',
          'gay-badge--success': type === 'success',
          'gay-badge--warning': type === 'warning',
          'gay-badge--danger': type === 'danger',
          'gay-badge--small': size === 'small',
          'gay-badge--large': size === 'large'
        };
      }
    }
  };
</script>
