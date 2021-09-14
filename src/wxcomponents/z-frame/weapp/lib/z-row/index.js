const component_1 = require('../common/component');

component_1.VantComponent({
  props: {
    flex: {
      type: Boolean,
      value: true,
    },
    wrap: {
      type: Boolean,
      value: true,
    },
    justify: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: '',
    },
  },
  mounted() {
  },
});
