<template>
<uni-shadow-root class="@vant-weapp-lib-slider-index"><view :class="'custom-class '+(utils.bem('slider', { disabled }))" :style="style({ background: inactiveColor, height: utils.addUnit(barHeight) })" @click="onClick">
  <view :class="utils.bem('slider__bar')" :style="(barStyle)+'; '+(style({ backgroundColor: activeColor }))">
    <view v-if="range" :class="utils.bem('slider__button-wrapper-left')" :data-index="0" @touchstart="onTouchStart" @touchmove.stop.prevent="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
      <slot v-if="useButtonSlot" name="left-button"></slot>
      <view v-else :class="utils.bem('slider__button')"></view>
    </view>
    <view v-if="range" :class="utils.bem('slider__button-wrapper-right')" :data-index="1" @touchstart="onTouchStart" @touchmove.stop.prevent="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
      <slot v-if="useButtonSlot" name="right-button"></slot>
      <view v-else :class="utils.bem('slider__button')"></view>
    </view>

    <view v-if="(!range)" :class="utils.bem('slider__button-wrapper')" @touchstart="onTouchStart" @touchmove.stop.prevent="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
      <slot v-if="useButtonSlot" name="button"></slot>
      <view v-else :class="utils.bem('slider__button')"></view>
    </view>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs><wxs src="../wxs/style.wxs" module="style"></wxs>
<script>

global['__wxRoute'] = '@vant/weapp/lib/slider/index'
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var component_1 = require('../common/component');
var touch_1 = require('../mixins/touch');
var version_1 = require('../common/version');
var utils_1 = require('../common/utils');
component_1.VantComponent({
  mixins: [touch_1.touch],
  props: {
    range: Boolean,
    disabled: Boolean,
    useButtonSlot: Boolean,
    activeColor: String,
    inactiveColor: String,
    max: {
      type: Number,
      value: 100,
    },
    min: {
      type: Number,
      value: 0,
    },
    step: {
      type: Number,
      value: 1,
    },
    value: {
      type: Number,
      value: 0,
      optionalTypes: [Array],
      observer: function (val) {
        if (val !== this.value) {
          this.updateValue(val);
        }
      },
    },
    barHeight: null,
  },
  created: function () {
    this.updateValue(this.data.value);
  },
  methods: {
    onTouchStart: function (event) {
      var _this = this;
      if (this.data.disabled) return;
      var index = event.currentTarget.dataset.index;
      if (typeof index === 'number') {
        this.buttonIndex = index;
      }
      this.touchStart(event);
      this.startValue = this.format(this.value);
      this.newValue = this.value;
      if (this.isRange(this.newValue)) {
        this.startValue = this.newValue.map(function (val) {
          return _this.format(val);
        });
      } else {
        this.startValue = this.format(this.newValue);
      }
      this.dragStatus = 'start';
    },
    onTouchMove: function (event) {
      var _this = this;
      if (this.data.disabled) return;
      if (this.dragStatus === 'start') {
        this.$emit('drag-start');
      }
      this.touchMove(event);
      this.dragStatus = 'draging';
      utils_1.getRect(this, '.van-slider').then(function (rect) {
        var diff = (_this.deltaX / rect.width) * _this.getRange();
        if (_this.isRange(_this.startValue)) {
          _this.newValue[_this.buttonIndex] =
            _this.startValue[_this.buttonIndex] + diff;
        } else {
          _this.newValue = _this.startValue + diff;
        }
        _this.updateValue(_this.newValue, false, true);
      });
    },
    onTouchEnd: function () {
      if (this.data.disabled) return;
      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true);
        this.$emit('drag-end');
      }
    },
    onClick: function (event) {
      var _this = this;
      if (this.data.disabled) return;
      var min = this.data.min;
      utils_1.getRect(this, '.van-slider').then(function (rect) {
        var value =
          ((event.detail.x - rect.left) / rect.width) * _this.getRange() + min;
        if (_this.isRange(_this.value)) {
          var _a = _this.value,
            left = _a[0],
            right = _a[1];
          var middle = (left + right) / 2;
          if (value <= middle) {
            _this.updateValue([value, right], true);
          } else {
            _this.updateValue([left, value], true);
          }
        } else {
          _this.updateValue(value, true);
        }
      });
    },
    isRange: function (val) {
      var range = this.data.range;
      return range && Array.isArray(val);
    },
    handleOverlap: function (value) {
      if (value[0] > value[1]) {
        return value.slice(0).reverse();
      }
      return value;
    },
    updateValue: function (value, end, drag) {
      var _this = this;
      if (this.isRange(value)) {
        value = this.handleOverlap(value).map(function (val) {
          return _this.format(val);
        });
      } else {
        value = this.format(value);
      }
      this.value = value;
      this.setData({
        barStyle:
          '\n          width: ' +
          this.calcMainAxis() +
          ';\n          left: ' +
          (this.isRange(value) ? value[0] + '%' : 0) +
          ';\n          ' +
          (drag ? 'transition: none;' : '') +
          '\n        ',
      });
      if (drag) {
        this.$emit('drag', { value: value });
      }
      if (end) {
        this.$emit('change', value);
      }
      if ((drag || end) && version_1.canIUseModel()) {
        this.setData({ value: value });
      }
    },
    getScope: function () {
      return Number(this.data.max) - Number(this.data.min);
    },
    getRange: function () {
      var _a = this.data,
        max = _a.max,
        min = _a.min;
      return max - min;
    },
    // 计算选中条的长度百分比
    calcMainAxis: function () {
      var value = this.value;
      var min = this.data.min;
      var scope = this.getScope();
      if (this.isRange(value)) {
        return ((value[1] - value[0]) * 100) / scope + '%';
      }
      return ((value - Number(min)) * 100) / scope + '%';
    },
    format: function (value) {
      var _a = this.data,
        max = _a.max,
        min = _a.min,
        step = _a.step;
      return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
    },
  },
});
export default global['__wxComponents']['@vant/weapp/lib/slider/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-slider{position:relative;height:2px;height:var(--slider-bar-height,2px);border-radius:999px;border-radius:var(--border-radius-max,999px);background-color:#ebedf0;background-color:var(--slider-inactive-background-color,#ebedf0)}.van-slider:before{position:absolute;right:0;left:0;content:"";top:-8px;top:-var(--padding-xs,8px);bottom:-8px;bottom:-var(--padding-xs,8px)}.van-slider__bar{position:relative;width:100%;height:100%;background-color:#1989fa;background-color:var(--slider-active-background-color,#1989fa);border-radius:inherit;transition:all .2s;transition:all var(--animation-duration-fast,.2s)}.van-slider__button{width:24px;width:var(--slider-button-width,24px);height:24px;height:var(--slider-button-height,24px);border-radius:50%;border-radius:var(--slider-button-border-radius,50%);box-shadow:0 1px 2px rgba(0,0,0,.5);box-shadow:var(--slider-button-box-shadow,0 1px 2px rgba(0,0,0,.5));background-color:#fff;background-color:var(--slider-button-background-color,#fff)}.van-slider__button-wrapper,.van-slider__button-wrapper-right{position:absolute;top:50%;right:0;transform:translate3d(50%,-50%,0)}.van-slider__button-wrapper-left{position:absolute;top:50%;left:0;transform:translate3d(-50%,-50%,0)}.van-slider--disabled{opacity:.5;opacity:var(--slider-disabled-opacity,.5)}
</style>