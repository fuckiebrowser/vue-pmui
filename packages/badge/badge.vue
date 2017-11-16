<template>
 <span class="gay-badge"
       :class="styleClass">
   <slot></slot>
 </span>
</template>

<script>
  export default {
    name: 'GayBadge',
    props: {
      type: String,
      square: Boolean // 方角，默认圆角
    },
    computed: {
      styleClass() {
        const { type, square } = this;
        return {
          'gay-badge--square': square,
          'gay-badge--primary': type === 'primary',
          'gay-badge--success': type === 'success',
          'gay-badge--warning': type === 'warning',
          'gay-badge--danger': type === 'danger'
        };
      }
    }
  };
</script>
