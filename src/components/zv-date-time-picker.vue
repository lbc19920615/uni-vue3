<style>
.zv-date-time-picker-cell {
  text-align: left;
}
</style>

<template>
<view>
<!--  {{state.open}}-->

  <van-cell class="zv-date-time-picker-cell" :border="false" center :title="formated">
<!--    <view slot="title">{{formated}}</view>-->
    <van-button size="small" slot="right-icon"  @click="openPopup()">打开时间</van-button>
  </van-cell>
  <van-popup
      position="bottom" :show="state.open" @close="onClose"
  >
    <van-datetime-picker
        type="datetime"
        :value="value"
        @input="onChange"
        @confirm="onClose"
        @cancel="onClose"
    ></van-datetime-picker>
  </van-popup>

</view>
</template>

<script>
import { Time } from '@/plugins/z-frame';
import { usePopup } from '@/plugins/z-form/mixins/hooks';

export default {
  name: 'ZDateTimePicker',
  props: {
    datetime: {
      type: String,
    },
  },
  data() {
    return {
      value: '',
      formated: '',
    };
  },
  watch: {
    datetime: {
      handler(newVal) {
        this.resolveVal(newVal);
      },
      immediate: true,
    },
  },
  methods: {
    resolveVal(newVal) {
      // console.log('sdsds', newVal);
      this.value = Time.dayjs(newVal).valueOf();
      this.formated = newVal;
    },
    onChange(e) {
      // this.value = Time.formatDateTime(e.detail);
      const value = Time.formatDateTime(e.detail);
      this.formated = value;
      this.$emit('change', {
        detail: value,
      });
    },
  },
  setup() {
    const popup = usePopup();
    return {
      state: popup.state,
      openPopup: popup.openPopup,
      onClose: popup.onClose,
    };
  },
};
</script>
