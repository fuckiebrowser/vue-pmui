<template>
  <gay-layout title="Gay UI">
    <!--<gay-header fixed>菜单</gay-header>-->
    <div class="wrapper">
      <h2>GayUI</h2>
      <h4>基佬紫与少女粉</h4>

      <gay-button v-for="item in list"
                  :key="item"
                  @click="$router.push('/'+item)"
                  long>
        {{item}}
      </gay-button>

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
          'tabs'
        ]
      };
    }
  };
</script>
