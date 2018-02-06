<script type="text/jsx">
  export default {
    name: 'PmRate',
    props: {
      value: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 5
      },
      disabled: Boolean,
      allowHalf: Boolean
    },
    computed: {
      checked() {
        return this.value === this.label;
      }
    },
    data() {
      return {
        hoverValue: this.value
      }
    },
    render(h) {
      const rate = [1, 2, 3, 4, 5];
      return (
        <div class="pm-rate">
          {rate.map((val) => {
            const isHalf = this.allowHalf && this.value > (val - 1) && this.value < val;
            return (
              <div onClick={(ev) => this.changeHandler(ev, val)}
                   class={[
                     'pm-rate__icon',
                     isHalf ? 'half' : null
                   ]}>
                <div class="pm-rate__inactive">
                  {this.$slots.default}
                </div>
                {
                  isHalf || (this.value >= val) ?
                    <div class="pm-rate__active">
                      {this.$slots.default}
                    </div> :
                    null
                }
              </div>
            );
          })}
        </div>
      );
    },
    methods: {
      changeHandler(ev, val) {
        if (this.disabled) return;
        const lower = val - 1;
        let currentVal = this.value === val ? lower : val;

        if (this.allowHalf) {
          const { target, offsetX } = ev;
          const halfVal = val - 0.5;
          const isHalf = offsetX < (target.offsetWidth / 2);
          currentVal = isHalf ?
            (this.value === halfVal ? lower : halfVal)
            : (this.value === val ? halfVal : val);
        }

        this.$emit('input', currentVal);
        this.$emit('change', currentVal, this.value);
      },
    }
  };
</script>
