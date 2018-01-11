<template>
  <pm-layout title="Toast">
    <div class="container">
      <pm-button long
                 @click="message">
        message
      </pm-button>
      <pm-button long
                 @click="loading">
        loading
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
        this.$toast('message');
      },
      success() {
        this.$toast.success('success');
      },
      error() {
        this.$toast.error('error');
      },
      warning() {
        this.$toast.warning('warning');
      },
      info() {
        this.$toast.info('info');
      },
      loading() {
        const instance = this.$loading();
        setTimeout(() => {
          instance.close();
        }, 10000);
      }
    }
  };
</script>
