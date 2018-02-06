<template>
  <pm-layout title="Rate">
    <pm-cell-group>
      <pm-cell-item title="icon font">
        <pm-rate v-model="value">
          <i class="pm-icon icon-home"></i>
        </pm-rate>
      </pm-cell-item>
      <pm-cell-item title="font">
        <pm-rate v-model="value"> 心</pm-rate>
      </pm-cell-item>
      <pm-cell-item title="allow-half">
        <pm-rate v-model="value"
                 allow-half>
          <i class="pm-icon icon-check"></i>
        </pm-rate>
      </pm-cell-item>
      <pm-cell-item title="disabled">
        <pm-rate v-model="value"
                 allow-half
                 disabled>
          <i class="pm-icon icon-check"></i>
        </pm-rate>
      </pm-cell-item>
      <pm-cell-item title="value">
        {{ value }}
      </pm-cell-item>
    </pm-cell-group>
  </pm-layout>
</template>

<script>
  export default {
    data() {
      return {
        value: 3.5
      };
    }
  };
</script>
