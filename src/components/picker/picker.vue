<template>
  <popup ref="popup"
         class="gay-picker"
         position="bottom"
         @mask-click="cancel"
         :visible.sync="visible">
    <div class="gay-picker--panel">
      <div class="gay-picker--toolbar">
        <button class="gay-picker--cancel"
                @click="cancel">{{cancelTxt}}
        </button>
        <slot name="title">{{title}}</slot>
        <button class="gay-picker--submit"
                @click="confirm">{{confirmTxt}}
        </button>
      </div>
      <div class="gay-picker--container">
        <div class="gay-picker--target"></div>
        <div class="gay-picker--wheel">
          <div class="wheel-scroll"
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
        visible: false,
        valueIndex: this.slots.map(() => 0)
      };
    },
    methods: {
      async open() {
        // already open
        if (this.visible) return;
        // change the state
        this.visible = true;

        if (!this.wheels) {
          // wheels have not been created
          await this.$nextTick();
          this.wheels = this.$refs.wheels.map((el, i) => this.createWheel(el, i));
        } else {
          // wheels have been created
          // enable the wheels
          this.wheels.forEach(wheel => wheel.enable());
        }
        this.setValue();
      },
      cancel() {
        this.visible = false;
        // disable the wheels
        this.wheels.forEach(wheel => wheel.disable());
      },
      confirm() {
        const { valueIndex, slots } = this;
        const value = valueIndex.map((v, i) => slots[i].values[v]);
        this.$emit('input', value);
        this.cancel();
      },
      createWheel(el, i) {
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
      }
    }
  };
</script>
