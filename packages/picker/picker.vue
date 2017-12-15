<template>
  <popup ref="popup"
         class="gay-picker"
         position="bottom">
    <div class="gay-picker__panel">
      <div class="gay-picker__toolbar">
        <button class="gay-picker__cancel"
                @click="cancel">{{cancelTxt}}
        </button>
        <slot name="title">{{title}}</slot>
        <button class="gay-picker__submit"
                @click="confirm">{{confirmTxt}}
        </button>
      </div>
      <div class="gay-picker__container">
        <div class="gay-picker__target"></div>
        <div class="gay-picker__wheel">
          <div class="wheelWrapperClass"
               v-for="(s,si) in slots"
               ref="wheels"
               :key="si">
            <ul>
              <li class="wheel-item"
                  v-for="v in s.values"
                  :key="v"
                  v-text="v">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </popup>
</template>

<script>
  import BScroll from 'better-scroll';
  import Popup from '../popup';

  export default {
    name: 'GayPicker',
    components: { Popup },
    props: {
      title: { type: String, default: '请选择' },
      confirmTxt: { type: String, default: '确定' },
      cancelTxt: { type: String, default: '取消' },
      slots: { type: Array, default: () => [] },
      value: { type: Array, default: () => [] }
    },
    data() {
      return {
        valueIndex: this.slots.map(() => 0)
      };
    },
    watch: {
      value: 'setValue'
    },
    methods: {
      open() {
        this.setValue();
        this.$refs.popup.open();
      },
      cancel() {
        this.setValue();
        this.$refs.popup.close();
      },
      initWheel(el, i) {
        if (this.wheels && this.wheels[i]) {
          this.wheels[i].refresh();
          return this.wheels[i];
        }

        const wheel = new BScroll(el, {
          wheel: {
            selectedIndex: 0,
            wheelWrapperClass: 'wheel-scroll',
            wheelItemClass: 'wheel-item'
          },
          observeDOM: false
        });

        wheel.on('scrollEnd', () => {
          this.valueIndex[i] = wheel.getSelectedIndex();
          this.$forceUpdate();
        });
        return wheel;
      },
      setValue() {
        const { value, slots, wheels } = this;
        value.forEach((val, i) => {
          const selections = slots[i].values;
          const currentWheel = wheels[i];
          const currentIndex = selections.indexOf(val);
          currentWheel.wheelTo(currentIndex);
        });
      },
      confirm() {
        const { valueIndex, slots } = this;
        const value = valueIndex.map((v, i) => slots[i].values[v]);
        this.$emit('input', value);
        this.$refs.popup.close();
      }
    },
    async mounted() {
      await this.$nextTick();
      this.wheels = this.$refs.wheels.map((el, i) => this.initWheel(el, i));
    }
  };
</script>

<style scoped>

</style>
