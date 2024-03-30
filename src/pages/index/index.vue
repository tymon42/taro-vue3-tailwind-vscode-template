<template>
  <view>
    <Dongdong />
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', data.msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="data.msg2" v-model:visible="data.show" :type="data.type" :cover="data.cover" />
    <view class="w-32 p-2 bg-gray-200">p-2 w-32 bg-gray-200</view>
    <text class="text-[50rpx] text-[#123456]">text-[50rpx] text-[#123456]</text>
    <nut-button type="primary" @tap="handleAbcClick">abc</nut-button>
  </view>
</template>

<script setup lang="ts">
import { Dongdong } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';
import { ref } from 'vue';

const data = ref({
  msg: '欢迎使用 NutUI4.0 开发小程序',
  msg2: '你成功了～',
  type: 'text',
  show: false,
  cover: false
})

const handleClick = (type, msg, cover = false) => {
  data.value.show = true;
  data.value.msg2 = msg;
  data.value.type = type;
  data.value.cover = cover;
};

const handleAbcClick = () => {
  console.log('handleAbcClick');
  Taro.navigateTo({
    url: '/pages/abc/abc',
  })
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
