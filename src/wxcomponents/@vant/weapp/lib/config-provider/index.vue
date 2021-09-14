<template>
<uni-shadow-root class="@vant-weapp-lib-config-provider-index"><view class="van-config-provider" :style="computed.mapThemeVarsToCSSVars(themeVars)">
  <slot></slot>
</view></uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>
<script>

global['__wxRoute'] = '@vant/weapp/lib/config-provider/index'
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var component_1 = require('../common/component');
component_1.VantComponent({
  props: {
    themeVars: {
      type: Object,
      value: {},
    },
  },
});
export default global['__wxComponents']['@vant/weapp/lib/config-provider/index']
</script>
<style platform="mp-weixin">

</style>