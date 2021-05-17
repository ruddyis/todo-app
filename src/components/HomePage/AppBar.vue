<template>
  <!-- <div class="app-bar">
    <span class="bar-left">
      <i class="iconfont icon-gengduo"></i>
    </span>
    <h1 class="bar-title">Todo</h1>
    <span class="bar-right">
      <i class="iconfont icon-buoumaotubiao13"></i>
    </span>
  </div> -->
  <Header>
    <i slot="left" class="iconfont icon-gengduo"></i>
    <h1 slot="center">Todo</h1>
    <i slot="right" class="iconfont icon-buoumaotubiao13"></i>
  </Header>
</template>
<script>
import Header from '../Header'
export default {
  name: 'AppBar',
  components: {
    Header
  }
}
</script>
<style scoped lang="scss">
i, h1{
  color: white;
}
</style>
