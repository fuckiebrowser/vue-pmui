<template>
  <gay-layout title="Gay UI">
    <!--<gay-header fixed>菜单</gay-header>-->
    <div class="wrapper">
      <h2>GayUI</h2>
      <h4>基佬紫与少女粉</h4>

      <gay-cell-group>
        <gay-cell-item v-for="item in list"
                       :label="item"
                       :key="item"
                       :link="'/'+item"
                       route
                       arrow
                       v-ripple>
        </gay-cell-item>
      </gay-cell-group>

    </div>
  </gay-layout>
</template>
<style scoped>
  h2, h4 {
    text-align: center;
  }

  .gay-button + .gay-button {
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
          'tabs',
          'badge',
          'cell'
        ]
      };
    }
  };
</script>
