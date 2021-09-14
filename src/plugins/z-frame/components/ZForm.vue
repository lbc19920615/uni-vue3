<template>
<view class="z-form">
  <van-cell-group>
    <van-field
        :value="state.username"
        label="用户名"
        placeholder="请输入用户名"
        @change="onSetProp(['username'], $event)"
    />
    <van-field
        :value="state.phone"
        label="手机号"
        placeholder="请输入手机号"
        error-message="手机号格式错误"
        :border="false"
        @change="onSetProp(['phone'], $event)"
    />
    <z-collection :items="state.items" @add="onAdd('items', $event)">
      <block v-for="(item1,index1) in state.items">
        <van-field
            :value="state.items[index1].name"
            :label="index1 +'.name' "
            @change="onSetProp(['items', index1, 'name'], $event)"
        />
      </block>
    </z-collection>
  </van-cell-group>
</view>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { lodash } from '../index';

export default {
  name: 'ZForm',
  setup() {
    const state = reactive({
      username: '',
      items: [],
    });

    function onSetProp(pathArr, e) {
      // console.log('onSetProp', path, e);
      let path = '';
      pathArr.forEach((item, index) => {
        if (index < 1) {
          path = item;
        } else {
          path = `${path}[${item}]`;
        }
      });
      console.log(path)
      lodash.set(state, path, e.detail);
    }

    function onAdd(path, e) {
      const arr = lodash.get(state, path);
      arr.push({});
    }

    return {
      state,
      onSetProp,
      onAdd,
    };
  },
};
</script>

<style scoped>

</style>
