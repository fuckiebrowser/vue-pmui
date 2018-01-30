<template>
  <transition name="fade">
    <pm-popup ref="popup"
              class="pm-picker"
              position="bottom"
              @mask-click="cancel"
              v-show="visible">
      <transition name="slide-from-bottom">
        <div class="pm-picker__panel"
             v-show="visible">
          <div class="pm-picker__toolbar">
            <button class="pm-picker__cancel"
                    @click="cancel">{{cancelText}}
            </button>
            <slot name="title">{{title}}</slot>
            <button class="pm-picker__submit"
                    @click="confirm">{{confirmText}}
            </button>
          </div>
          <div class="pm-picker__container">
            <div class="pm-picker__target"></div>
            <div class="pm-picker__wheel">
              <template v-for="(s,si) in slots">
                <div class="wheel-scroll"
                     ref="wheels"
                     :key="si"
                     v-if="s.values">
                  <ul>
                    <li class="wheel-item"
                        v-for="v in s.values"
                        :key="v"
                        v-text="v">
                    </li>
                  </ul>
                </div>
                <div class="pm-picker__separator"
                     v-else>
                  {{s}}
                </div>
              </template>
            </div>
          </div>
        </div>
      </transition>
    </pm-popup>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll';
  import PmPopup from '../popup';
  import display from '../../mixins/display';

  export default {
    name: 'PmPicker',
    mixins: [display],
    components: { PmPopup },
    props: {
      title: { type: String, default: '请选择' },
      confirmText: { type: String, default: '确定' },
      cancelText: { type: String, default: '取消' },
      slots: { type: Array, default: () => [] },
      value: { type: Array, default: () => [] }
    },
    data() {
      const { slots, value } = this._props;
      const valueIndex = slots.map((s, i) => s.values.indexOf(value[i]) || 0);
      return {
        valueIndex
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
