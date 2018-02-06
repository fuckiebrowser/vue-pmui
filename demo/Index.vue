<template>
  <pm-layout title="Pm UI">
    <!--<pm-header fixed>菜单</pm-header>-->
    <div class="wrapper">
      <h2>Purple Mobile UI</h2>
      <h3>基佬紫与少女粉</h3>
      <template v-for="(list,i) in [css, js, form]">
        <h4> {{ ['CSS', 'JS', 'Form'][i] }} Components </h4>
        <pm-cell-group :key="i">
          <pm-cell-item
            v-for="item in list"
            :title="item"
            :key="item"
            :link="'/'+item"
            route
            arrow
            v-ripple>
          </pm-cell-item>
        </pm-cell-group>
      </template>

      <h4> Directives </h4>
      <pm-cell-group>
        <pm-cell-item
          title="Ripple"
          link="/ripple"
          route
          arrow
          v-ripple>
        </pm-cell-item>
      </pm-cell-group>
    </div>
  </pm-layout>
</template>
<style scoped>
  h2, h3, h4 {
    text-align: center;
  }
</style>
<script>
  export default {
    data() {
      return {
        css: [
          'button',
          'header',
          'tabbar',
          'badge',
          'tabs'
        ],
        js: [
          'swipe',
          'popup',
          'picker',
          'actionSheet',
          'toast',
          'dialog'
        ],
        form: [
          'radio',
          'checkbox',
          'switch',
          'rate',
          'cell'
        ]
      };
    }
  };
</script>
