<template>
<uni-shadow-root class="@vant-weapp-lib-checkbox-group-index"><view :class="utils.bem('checkbox-group', [{ horizontal: direction === 'horizontal' }])">
  <slot></slot>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>

global['__wxRoute'] = '@vant/weapp/lib/checkbox-group/index'
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var relation_1 = require('../common/relation');
var component_1 = require('../common/component');
component_1.VantComponent({
  field: true,
  relation: relation_1.useChildren('checkbox', function (target) {
    this.updateChild(target);
  }),
  props: {
    max: Number,
    value: {
      type: Array,
      observer: 'updateChildren',
    },
    disabled: {
      type: Boolean,
      observer: 'updateChildren',
    },
    direction: {
      type: String,
      value: 'vertical',
    },
  },
  methods: {
    updateChildren: function () {
      var _this = this;
      this.children.forEach(function (child) {
        return _this.updateChild(child);
      });
    },
    updateChild: function (child) {
      var _a = this.data,
        value = _a.value,
        disabled = _a.disabled,
        direction = _a.direction;
      child.setData({
        value: value.indexOf(child.data.name) !== -1,
        parentDisabled: disabled,
        direction: direction,
      });
    },
  },
});
export default global['__wxComponents']['@vant/weapp/lib/checkbox-group/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-checkbox-group--horizontal{display:flex;flex-wrap:wrap}
</style>