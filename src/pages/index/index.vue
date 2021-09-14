<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <van-button type="primary">Vant UI测试</van-button>
    <view><text>Vuex4 Demo</text></view>
    <VuexDemo />
    <van-button type="primary" @click="handleHttp">Login 测试</van-button>
    <view>
      <text class="less-style">less style</text>
    </view>
    {{state.username}}
    <view class="u-sizeFull">
      <van-field
          :value="state.username"
          label="用户名"
          placeholder="请输入用户名"
          input-align="right"
          @change="onChange('username', $event)"
      />
    </view>
  </view>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue';
import VuexDemo from '@/components/VuexDemo.vue';
import { userApi } from '@/api';

export default defineComponent({
  setup() {
    const state = reactive({
      username: '',
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

    function onChange(name, e) {
      // console.log('onChange', name, e);
      state.username = e.detail;
    }

    return {
      title: 'hello',
      state,
      onChange,
      handleHttp,
    };
  },
  components: { VuexDemo },
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
