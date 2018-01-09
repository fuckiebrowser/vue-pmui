<template>
  <pm-layout title="Toast">
    <div class="container">
      <pm-button long
                 @click="message">
        message
      </pm-button>
      <pm-button long
                 type="success"
                 @click="success">
        success
      </pm-button>
      <pm-button long
                 type="danger"
                 @click="error">
        error
      </pm-button>
      <pm-button long
                 type="warning"
                 @click="warning">
        warning
      </pm-button>
      <pm-button long
                 type="primary"
                 @click="info">
        info
      </pm-button>
    </div>
  </pm-layout>
</template>

<style scoped>
  .container {
    padding: 0 15px;
  }

  .pm-button {
    margin-bottom: 15px;
  }
</style>
<script>
  export default {
    methods: {
      message() {
        this.$toast('哈哈哈');
      },
      success() {
        this.$toast.success('哈哈哈');
      },
      error() {
        this.$toast.error('哈哈哈');
      },
      warning() {
        this.$toast.warning('哈哈哈');
      },
      info() {
        this.$toast.info('哈哈哈');
      }
    }
  };
</script>
