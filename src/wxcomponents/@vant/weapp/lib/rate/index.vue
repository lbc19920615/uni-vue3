<template>
<uni-shadow-root class="@vant-weapp-lib-rate-index"><view :class="(utils.bem('rate'))+' custom-class'" @touchmove="onTouchMove">
  <view v-for="(item,index) in (innerCountArray)" :key="item.index" :class="utils.bem('rate__item')" :style="style({ paddingRight: index !== count - 1 ? utils.addUnit(gutter) : null })">
    <van-icon :name="index + 1 <= innerValue ? icon : voidIcon" :class="utils.bem('rate__icon', [{ disabled, full: index + 1 <= innerValue }])" :style="style({ fontSize: utils.addUnit(size) })" custom-class="icon-class" :data-score="index" :color="disabled ? disabledColor : index + 1 <= innerValue ? color : voidColor" @click="onSelect"></van-icon>

    <van-icon v-if="allowHalf" :name="index + 0.5 <= innerValue ? icon : voidIcon" :class="utils.bem('rate__icon', ['half', { disabled, full: index + 0.5 <= innerValue }])" :style="style({ fontSize: utils.addUnit(size) })" custom-class="icon-class" :data-score="index - 0.5" :color="disabled ? disabledColor : index + 0.5 <= innerValue ? color : voidColor" @click="onSelect"></van-icon>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs><wxs src="../wxs/style.wxs" module="style"></wxs>
<script>
import VanIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'van-icon': VanIcon}}

global['__wxRoute'] = '@vant/weapp/lib/rate/index'
'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
var utils_1 = require('../common/utils');
var component_1 = require('../common/component');
var version_1 = require('../common/version');
component_1.VantComponent({
  field: true,
  classes: ['icon-class'],
  props: {
    value: {
      type: Number,
      observer: function (value) {
        if (value !== this.data.innerValue) {
          this.setData({ innerValue: value });
        }
      },
    },
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    size: null,
    icon: {
      type: String,
      value: 'star',
    },
    voidIcon: {
      type: String,
      value: 'star-o',
    },
    color: String,
    voidColor: String,
    disabledColor: String,
    count: {
      type: Number,
      value: 5,
      observer: function (value) {
        this.setData({ innerCountArray: Array.from({ length: value }) });
      },
    },
    gutter: null,
    touchable: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    innerValue: 0,
    innerCountArray: Array.from({ length: 5 }),
  },
  methods: {
    onSelect: function (event) {
      var _this = this;
      var data = this.data;
      var score = event.currentTarget.dataset.score;
      if (!data.disabled && !data.readonly) {
        this.setData({ innerValue: score + 1 });
        if (version_1.canIUseModel()) {
          this.setData({ value: score + 1 });
        }
        wx.nextTick(function () {
          _this.$emit('input', score + 1);
          _this.$emit('change', score + 1);
        });
      }
    },
    onTouchMove: function (event) {
      var _this = this;
      var touchable = this.data.touchable;
      if (!touchable) return;
      var clientX = event.touches[0].clientX;
      utils_1.getAllRect(this, '.van-rate__icon').then(function (list) {
        var target = list
          .sort(function (cur, next) {
            return cur.dataset.score - next.dataset.score;
          })
          .find(function (item) {
            return clientX >= item.left && clientX <= item.right;
          });
        if (target != null) {
          _this.onSelect(
            __assign(__assign({}, event), { currentTarget: target })
          );
        }
      });
    },
  },
});
export default global['__wxComponents']['@vant/weapp/lib/rate/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-rate{display:inline-flex;-webkit-user-select:none;user-select:none}.van-rate__item{position:relative;padding:0 2px;padding:0 var(--rate-horizontal-padding,2px)}.van-rate__item:not(:last-child){padding-right:4px;padding-right:var(--rate-icon-gutter,4px)}.van-rate__icon{display:block;height:1em;color:#c8c9cc;color:var(--rate-icon-void-color,#c8c9cc);font-size:20px;font-size:var(--rate-icon-size,20px)}.van-rate__icon--half{position:absolute;top:0;width:.5em;overflow:hidden;left:2px;left:var(--rate-horizontal-padding,2px)}.van-rate__icon--full,.van-rate__icon--half{color:#ee0a24;color:var(--rate-icon-full-color,#ee0a24)}.van-rate__icon--disabled{color:#c8c9cc;color:var(--rate-icon-disabled-color,#c8c9cc)}
</style>