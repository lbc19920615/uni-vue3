<template>
<uni-shadow-root class="@vant-weapp-lib-cell-group-index"><view v-if="title" :class="utils.bem('cell-group__title', { inset })">
  {{ title }}
</view>
<view :class="'custom-class '+(utils.bem('cell-group', { inset }))+' '+(border ? 'van-hairline--top-bottom' : '')">
  <slot></slot>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>

global['__wxRoute'] = '@vant/weapp/lib/cell-group/index'
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var component_1 = require('../common/component');
component_1.VantComponent({
  props: {
    title: String,
    border: {
      type: Boolean,
      value: true,
    },
    inset: Boolean,
  },
});
export default global['__wxComponents']['@vant/weapp/lib/cell-group/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-cell-group--inset{margin:0 16px;margin:var(--cell-group-inset-padding,0 16px);border-radius:8px;border-radius:var(--cell-group-inset-border-radius,8px);overflow:hidden}.van-cell-group__title{padding:16px 16px 8px;padding:var(--cell-group-title-padding,16px 16px 8px);font-size:14px;font-size:var(--cell-group-title-font-size,14px);line-height:16px;line-height:var(--cell-group-title-line-height,16px);color:#969799;color:var(--cell-group-title-color,#969799)}.van-cell-group__title--inset{padding:16px 16px 8px 32px;padding:var(--cell-group-inset-title-padding,16px 16px 8px 32px)}
</style>