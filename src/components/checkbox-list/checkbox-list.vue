<template>
  <pm-cell-group class="pm-checkbox-list">
    <pm-cell-item v-for="(o,i) in options"
                  :key="i"
                  label>
      <template slot="title">
        <pm-checkbox v-if="alignLeft"
                     :value="value"
                     :disabled="o.disabled"
                     :label="o.value"
                     @change="changeHandler"/>

        <div class="pm-chebox-list--label">
          {{ o.label }}
        </div>
      </template>

      <pm-checkbox v-if="!alignLeft"
                  :value="value"
                  :disabled="o.disabled"
                  :label="o.value"
                  @change="changeHandler"/>
    </pm-cell-item>
  </pm-cell-group>
</template>

<script type="text/jsx">
import PmCellGroup from '../cell-group';
import PmCellItem from '../cell-item';
import PmCheckbox from '../checkbox';

export default {
  name: 'PmCheckboxList',
  components: {
    PmCellGroup,
    PmCellItem,
    PmCheckbox
  },
  props: {
    value: {
      type: [Boolean, String, Number, Array],
      default: () => false
    },
    options: {
      type: Array,
      default: () => false
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    alignLeft() {
      return this.align === 'left';
    }
  },
  methods: {
    changeHandler(newVal, oldVal) {
      this.$emit('input', newVal);
      this.$emit('change', newVal, oldVal);
    }
  }
};
</script>
