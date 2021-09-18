<style lang="scss">
@import "../plugins/z-frame/mixin.scss";

.zv-van-field {
  font-size: var(--zv-van-field-font-size, 14px);
  color: var(--field-label-color,#646566);
  &__label {
    padding-left: var(--zv-van-field-label-pl, 10px);
  }

  display: block;
  position: relative;
  &::after {
    @include z-border1px()
  }
}
.zv-van-field__content {
  width: 100%;
}
</style>

<template>
  <z-row align="center" class="zv-van-field"><view class="zv-van-field__label">{{label}}</view><slot></slot></z-row>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: String,
  },
});
</script>
