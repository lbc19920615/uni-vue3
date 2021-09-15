<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  getStr() {
    return 'str';
  },
  getBeforeScript() {
    return 'getBeforeScript';
  },
  slotArrToStr(v) {
    // console.log('slotArrToStr', v)
    return v;
  },
});
</script>
<style >
/*每个页面公共css */
/* vant - weapp */
@import '/wxcomponents/@vant/weapp/dist/common/index.wxss';
@import '../node_modules/suitcss-utils-size/index.css';
</style>
<style lang="scss">
@import './plugins/z-frame/index.scss';
</style>
