<template>
  <view class="content">
<!--    <van-datetime-picker-->
<!--        type="datetime"-->
<!--        :value="state.currentDate"-->
<!--        @input="onChange(['currentDate'], $event)"-->
<!--    ></van-datetime-picker>-->
    <zv-date-time-picker
        :datetime="state.currentDate"
        @change="onChange(['currentDate'], $event)"
    ></zv-date-time-picker>
    <z-form form-id="sdsdsdsdsd"></z-form>
<!--    <view>-->
<!--      <text class="title">{{ title }}</text>-->
<!--    </view>-->
<!--    <van-button type="primary">Vant UI测试</van-button>-->
<!--    <view><text>Vuex4 Demo</text></view>-->
<!--    <VuexDemo />-->
<!--    <van-button type="primary" @click="handleHttp">Login 测试</van-button>-->
<!--    <view>-->
<!--      <text class="less-style">less style</text>-->
<!--    </view>-->
  </view>
</template>

<script>
import {
  defineComponent, onBeforeUnmount, reactive, toRaw,
} from 'vue';
import VuexDemo from '@/components/VuexDemo.vue';
import { userApi } from '@/api';
import ZForm from '@/plugins/z-frame/components/Zform1.vue';
import { getPath } from '@/plugins/z-frame/components/ZForm.js';
import { lodash } from '@/plugins/z-frame';

export default defineComponent({

  setup() {
    const STORAGE_KEY = 'storage_key';
    const storage = uni.getStorageSync(STORAGE_KEY);

    const state = reactive(storage || {
      currentDate: '2021-09-17 16:45:56',
    });

    const handleHttp = () => {
      userApi
        .login('account', '123456')
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    function onChange(pathArr, e) {
      const path = getPath(pathArr);
      lodash.set(state, path, e.detail);

      uni.setStorageSync(STORAGE_KEY, toRaw(state));
    }

    return {
      title: 'hello',
      state,
      onChange,
      handleHttp,
    };
  },
  components: {ZForm, VuexDemo },
});
</script>

<style lang="scss">
.content {
  text-align: center;
  height: 400upx;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  color: red;
}
</style>

<style lang="less">
.less-style {
  color: purple;
  font-size: 40upx;
}
</style>
