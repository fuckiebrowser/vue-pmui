<template>
  <gay-layout title="Swipe">
    <gay-swipe @change="changeHandler"
               loop
               show-dots>
      <gay-swipe-item>
        <img src="https://f12.baidu.com/it/u=3921373078,4265237256&fm=72"
             alt="">
      </gay-swipe-item>
      <gay-swipe-item>
        <img src="https://f12.baidu.com/it/u=941395880,868059849&fm=72"
             alt="">
      </gay-swipe-item>
      <gay-swipe-item>
        <img src="https://f10.baidu.com/it/u=3463746399,1321843695&fm=72"
             alt="">
      </gay-swipe-item>
      <gay-swipe-item>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=344653212,2825482209&fm=11&gp=0.jpg"
             alt="">
      </gay-swipe-item>
    </gay-swipe>
    {{index}}
  </gay-layout>
</template>

<style scoped>

</style>

<script>
  export default {
    data() {
      return {
        index: 1
      };
    },
    methods: {
      changeHandler(index) {
        this.index = index;
      }
    }
  };
</script>
