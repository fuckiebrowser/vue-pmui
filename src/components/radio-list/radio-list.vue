<template>
  <pm-cell-group class="pm-radio-list">
    <pm-cell-item v-for="(o,i) in options"
                  :key="i"
                  :class="{
                    checked: value === o.value,
                    disabled: o.disabled
                  }"
                  label
                  @click.native="$emit('input', o.value)">
      <template slot="title">
        <pm-radio v-if="alignLeft"
                  :value="value"
                  :label="o.value"/>

        <div class="pm-radio--label">
          {{ o.label }}
        </div>
      </template>

      <pm-radio v-if="!alignLeft"
                :value="value"
                :label="o.value"/>
    </pm-cell-item>
  </pm-cell-group>
</template>

<script type="text/jsx">
import PmCellGroup from '../cell-group';
import PmCellItem from '../cell-item';
import PmRadio from '../radio';

export default {
  name: 'PmRadioList',
  components: {
    PmRadio,
    PmCellGroup,
    PmCellItem
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: () => ''
    },
    options: {
      type: Array,
      default: () => []
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
  }
};
</script>
