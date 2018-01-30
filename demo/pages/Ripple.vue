<template>
  <pm-layout title="Ripple">
    <div class="container">
      <div class="ripple-test"
           v-ripple="{ center, color, duration, radius }"> Click Me ！
      </div>

      <pm-cell-group>
        <pm-cell-item title="color"
                      label>
          <input type="text"
                 v-model="color"
                 placeholder="color">
        </pm-cell-item>
        <pm-cell-item title="radius"
                      label>
          <input type="number"
                 v-model="radius"
                 placeholder="radius">
        </pm-cell-item>
        <pm-cell-item title="duration"
                      label>
          <input type="number"
                 v-model="duration"
                 placeholder="duration">
        </pm-cell-item>
        <pm-cell-item title="center"
                      label>
          <pm-switch v-model="center"/>
        </pm-cell-item>
      </pm-cell-group>
    </div>
  </pm-layout>
</template>

<style scoped>
  .container {
    padding: 0 15px;
  }

  .ripple-test {
    width: 100%;
    height: 200px;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
  }

  .pm-cell-group {
    margin-top: 30px;
  }
</style>
<script>
  export default {
    data() {
      return {
        class: '', // Animation container className
        center: false, // Position of animation
        duration: 500, // Duration of animation  (unit: ms)
        color: 'currentColor', // Background color of Animation
        radius: '' // Radius of Animation ( default: the longer between width and height )
      };
    }
  };
</script>
