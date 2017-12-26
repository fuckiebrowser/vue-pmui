<template>
  <pm-layout title="Swipe">
    <pm-swipe @change="changeHandler"
               loop
               show-dots>
      <pm-swipe-item>
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3069472720,3661376600&fm=27&gp=0.jpg"
             alt="">
      </pm-swipe-item>
      <pm-swipe-item>
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3791826132,2455842012&fm=27&gp=0.jpg"
             alt="">
      </pm-swipe-item>
      <pm-swipe-item>
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4213947888,4286234652&fm=27&gp=0.jpg"
             alt="">
      </pm-swipe-item>
      <pm-swipe-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3803592998,823198989&fm=27&gp=0.jpg"
             alt="">
      </pm-swipe-item>
    </pm-swipe>
    {{index}}
  </pm-layout>
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
