<script type="text/jsx">
  import PmCellGroup from '../cell-group';
  import PmCellItem from '../cell-item';

  export default {
    name: 'PmRadio',
    components: {
      PmCellGroup,
      PmCellItem
    },
    render(h) {
      const lk = this.labelKey;
      const vk = this.valueKey;
      const val = this.value;
      const alignLeft = this.align === 'left';
      const options = this.options.map((o) => {
        const currentVal = o[vk];
        const isChecked = currentVal === val;
        const label = (
          <div class="pm-radio--label"
               slot="label">
            {o[lk]}
          </div>
        );
        const checkIcon = (
          <div class={['pm-radio--icon']}
               slot={alignLeft ? 'label' : 'default'}>
            <transition name="zoom">
              {isChecked ? (<i class="pm-icon icon-check"/>) : null}
            </transition>
          </div>
        );
        return (
          <pm-cell-item
            class={isChecked ? 'checked' : ''}
            nativeOnClick={() => this.$emit('input', currentVal)}>
            {[checkIcon, label]}
          </pm-cell-item>
        );
      });

      return (
        <pm-cell-group class={'pm-radio'}>
          {[options]}
        </pm-cell-group>
      );
    },
    props: {
      value: {
        type: [Boolean, String, Object],
        default: () => false
      },
      options: {
        type: Array,
        default: () => false
      },
      labelKey: {
        type: String,
        default: 'label'
      },
      valueKey: {
        type: String,
        default: 'value'
      },
      align: {
        type: String,
        default: 'right'
      }
    },
    methods: {
      isChecked(option) {
        return this.value === option[this.valueKey];
      }
    }
  };
</script>
