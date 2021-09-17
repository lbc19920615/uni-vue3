<template>
<div>
<!--  {{state.open}}-->
 <z-row>
   <view>{{formated}}</view>
   <van-button @click="openPopup()">打开时间</van-button>
 </z-row>
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

</div>
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
      formated: ''
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
      this.formated = newVal
    },
    onChange(e) {
      // this.value = Time.formatDateTime(e.detail);
      let value = Time.formatDateTime(e.detail);
      this.formated = value
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
