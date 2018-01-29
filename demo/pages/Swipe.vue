<template>
  <pm-layout title="Swipe">
    <pm-swipe loop
              :interval="+interval"
              :index.sync="index"
              :show-dots="showDots"
              :show-nav="showNav">
      <pm-swipe-item>
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3069472720,3661376600&fm=27&gp=0.jpg">
      </pm-swipe-item>
      <pm-swipe-item>
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3791826132,2455842012&fm=27&gp=0.jpg">
      </pm-swipe-item>
      <pm-swipe-item>
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4213947888,4286234652&fm=27&gp=0.jpg">
      </pm-swipe-item>
      <pm-swipe-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3803592998,823198989&fm=27&gp=0.jpg">
      </pm-swipe-item>
    </pm-swipe>

    <pm-cell-group>
      <pm-cell-item title="index">
        {{index}}
      </pm-cell-item>
      <pm-cell-item title="interval"
                    label>
        <input type="number" v-model="interval" placeholder="interval">
      </pm-cell-item>
      <pm-cell-item title="show-dots"
                    label>
        <pm-switch type="primary"
                   v-model="showDots"/>
      </pm-cell-item>
      <pm-cell-item title="show-nav"
                    label>
        <pm-switch type="primary"
                   v-model="showNav"/>
      </pm-cell-item>
    </pm-cell-group>
  </pm-layout>
</template>

<style scoped>
  img {
    width: 100%;
    height: auto;
  }

  .pm-cell-group {
    margin-top: 30px;
  }
</style>

<script>
  export default {
    data() {
      return {
        index: 0,
        interval: 1000,
        showNav: false,
        showDots: true
      };
    },
    methods: {}
  };
</script>
