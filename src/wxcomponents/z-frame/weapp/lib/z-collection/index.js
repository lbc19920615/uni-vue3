const component_1 = require('../common/component');

component_1.VantComponent({
  props: {
    items: {
      type: Array,
    },
  },
  mounted() {
  },
  methods: {
    onAdd() {
      // this.setData({
      //   items: items.push({})
      // })
      this.triggerEvent('add')
    }
  }
});
