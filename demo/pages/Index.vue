<template>
  <pm-layout title="Pm UI">
    <!--<pm-header fixed>菜单</pm-header>-->
    <div class="wrapper">
      <h2>PmUI</h2>
      <h4>基佬紫与少女粉</h4>

      <pm-cell-group>
        <pm-cell-item
          v-for="item in list"
          :label="item"
          :key="item"
          :link="'/'+item"
          route
          arrow
          v-ripple>
        </pm-cell-item>
      </pm-cell-group>

    </div>
  </pm-layout>
</template>
<style scoped>
  h2, h4 {
    text-align: center;
  }

  .pm-button + .pm-button {
    margin-top: 5px;
  }
</style>
<script>
  export default {
    data() {
      return {
        list: [
          'button',
          'header',
          'tabbar',
          'badge',
          'cell',
          'tabs',
          'swipe',
          'popup',
          'picker',
          'actionSheet',
          'toast',
          'dialog'
        ]
      };
    }
  };
</script>
