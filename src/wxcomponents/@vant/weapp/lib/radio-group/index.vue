<template>
<uni-shadow-root class="@vant-weapp-lib-radio-group-index"><view :class="utils.bem('radio-group', [direction])">
  <slot></slot>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>

global['__wxRoute'] = '@vant/weapp/lib/radio-group/index'
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var component_1 = require('../common/component');
var relation_1 = require('../common/relation');
component_1.VantComponent({
  field: true,
  relation: relation_1.useChildren('radio'),
  props: {
    value: {
      type: null,
      observer: 'updateChildren',
    },
    direction: String,
    disabled: {
      type: Boolean,
      observer: 'updateChildren',
    },
  },
  methods: {
    updateChildren: function () {
      this.children.forEach(function (child) {
        return child.updateFromParent();
      });
    },
  },
});
export default global['__wxComponents']['@vant/weapp/lib/radio-group/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-radio-group--horizontal{display:flex;flex-wrap:wrap}
</style>