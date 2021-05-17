<template>
  <div class="avatar">
    <div class="face">
      <img src="../../assets/images/face.jpeg" alt="" />
    </div>
    <h1 class="name">Hello, ruddyis!</h1>
    <p class="tips">Looks like feed good.<br/>You have 10 tasks to do.</p>
    <p class="date">TODAY: 日期</p>
  </div>
</template>
<script>
export default {
  name: 'Avator'
}
</script>
<style scoped lang="scss">
@import '../../assets/css/variable.scss';
@import '../../assets/css/mixin.scss';
.avatar {
  width: 800Px;
  height: 700Px;
  // background: yellowgreen;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
  .face {
    width: 130Px;
    height: 130Px;
    border: 1px solid white;
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 130Px;
      height: 130Px;
    }
  }
  .name{
    @include font_size($font_large);
    color: white;
    font-weight: normal;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .tips{
    @include font_size($font_small);
    color:white;
    margin-bottom: 10px;
  }
  .date{
    @include font_size($font_medium_s);
    color: white;
    margin-top: 100px;
  }
}
</style>
