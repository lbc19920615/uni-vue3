const component_1 = require('../common/component');
const FORM_CONFIG = require('./config');

component_1.VantComponent({
  methods: {
    callEvent() {

    },
  },
  mounted() {
    console.log('mounted', FORM_CONFIG);
  },
});
