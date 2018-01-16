<template>
  <pm-layout title="Dialog">
    <div class="container">
      <pm-button long
                 type="danger"
                 @click="alert">
        alert
      </pm-button>
      <pm-button long
                 type="warning"
                 @click="confirm">
        confirm
      </pm-button>
      <pm-button long
                 type="success"
                 @click="prompt">
        prompt
      </pm-button>
      <pm-button long
                 type="primary"
                 @click="custom">
        custom
      </pm-button>
      <pm-button long
                 @click="component">
        component
      </pm-button>

      <pm-dialog ref="dialog"
                 :showClose="false">
        <template slot="header">
          <h1>Header Slot</h1>
        </template>
        <template>
          <h2>Default Slot</h2>
        </template>
        <template slot="footer">
          <div style="width: 100%;text-align: center">
            <h3>Footer Slot</h3>
            <a @click="hide">Click me to hide</a>
          </div>
        </template>
      </pm-dialog>
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
    data() {
      return {
        visible: false
      };
    },
    methods: {
      alert() {
        this.$alert('message');
      },
      async confirm() {
        try {
          await this.$confirm('success');
          this.$toast.success('confirm');
        } catch (e) {
          this.$toast.error('cancel');
        }
      },
      async prompt() {
        try {
          const inputValue = await this.$prompt('error');
          this.$toast(inputValue ? `你输入了${inputValue}` : '啥都没输入');
        } catch (e) {
          this.$toast.error('cancel');
        }
      },
      custom() {
        const instance = this.$dialog({
          title: '我是标题',
          content: '我是内容',
          showInput: true,
          inputPlaceholder: '输入些什么吧',
          closeOnConfirm: false,
          confirm: (val) => {
            this.$toast(val ? `点击了确认,输入了${val}` : 'confirm');
            instance.close();
          },
          cancel: () => this.$toast('点击了取消')
        });
      },
      component() {
        this.$refs.dialog.show();
      },
      hide() {
        this.$refs.dialog.hide();
      }
    }
  };
</script>
