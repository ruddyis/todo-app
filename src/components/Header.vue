<template>
  <div class="header">
    <span class="left">
      <slot name="left">左边</slot>
    </span>
    <h1 class="title">
      <slot name="center">中间</slot>
    </h1>
    <span class="right">
      <slot name="right">右边</slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped lang="scss">
@import '../assets/fonts/iconfont.css';
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
.header {
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left,
  .right {
    display: inline-block;
    width: 40px;
    height: 40px;
    i {
      @include icon_size(40px);
      line-height: 40px;
    //   color: white;
    }
  }
  .left {
    margin-left: 10px;
  }
  .title {
    @include font_size($font_medium);
    line-height: 40px;
    // color: white;
  }
  .right {
    margin-right: 20px;
  }
}
</style>
