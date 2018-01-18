<template>
  <pm-layout title="Tabs">
    <pm-tabs v-model="index">
      <pm-tab-item index="0"
                   title="Toast">
        <div class="container">
          <pm-button long
                     type="warning"
                     @click="loading">
            loading
          </pm-button>
        </div>
      </pm-tab-item>
      <pm-tab-item index="1"
                   title="Dialog">
        <div class="container">
          <pm-button long
                     type="danger"
                     @click="alert">
            alert
          </pm-button>
        </div>

      </pm-tab-item>
      <pm-tab-item index="2">
        <template slot="title">
          Switch
          &ensp;
          <pm-badge type="danger"
                    size="small">5
          </pm-badge>
        </template>
        <div class="container">
          <h3>&ensp;选中的值：{{ value }}</h3>

          <pm-cell-group>
            <pm-cell-item
              v-for="t in type"
              :key="t"
              :title="t"
              label>
              <pm-switch
                :type="t"
                v-model="value"/>
            </pm-cell-item>
          </pm-cell-group>
        </div>
      </pm-tab-item>
    </pm-tabs>
  </pm-layout>
</template>

<style scoped>

</style>
<script>
  export default {
    data() {
      return {
        index: '1',
        type: ['default', 'primary', 'success', 'danger', 'warning'],
        value: false
      };
    },
    methods: {
      alert() {
        this.$alert('message');
      },
      loading() {
        const instance = this.$loading();
        setTimeout(() => {
          instance.close();
        }, 5000);
      }
    }
  };
</script>
