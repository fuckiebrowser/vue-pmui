<!--
<template>
  <label class="pm-cell-item"
         @click="clickHandler">
    <div class="pm-cell-item--title">
      <slot name="title">
      </slot>
    </div>
    <div class="pm-cell-item--content">
      <slot />
      <i v-if="arrow"
         class="pm-icon icon-right"></i>
    </div>
  </label>
</template>
-->

<script type="text/jsx">
export default {
  name: 'PmCellItem',
  props: {
    title: String,
    label: Boolean,
    arrow: Boolean,
    link: [String, Object],
    route: Boolean
  },

  render(h) {
    let options = {};
    let tag = 'div';
    if (this.link && !this.route && typeof this.link === 'string') {
      options = {
        href: this.link
      };
    }

    if (this.route && this.$router && this.link) {
      options = {
        on: {
          click: ev => this.clickHandler(ev)
        }
      };
    }

    if (this.label) {
      tag = 'label';
    }

    const label = (
      <div class="pm-cell-item--title">{this.$slots.title || this.title}</div>
    );
    const content = (
      <div class="pm-cell-item--content">
        {[
          this.$slots.default,
          this.arrow ? <i class="pm-icon icon-right" /> : null
        ]}
      </div>
    );

    return h(
      tag,
      {
        class: 'pm-cell-item',
        ...options
      },
      [label, content]
    );
  },

  methods: {
    clickHandler() {
      if (!this.link) {
        return;
      }
      if (this.route && this.$router) {
        this.$router.push(this.link);
        return;
      }
      location.href = this.link;
    }
  }
};
</script>
