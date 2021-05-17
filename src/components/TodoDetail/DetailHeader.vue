<template>
  <Header>
    <i slot="left" class="left iconfont icon-fanhui" @click="back"></i>
    <h1 slot="center"></h1>
    <i slot="right" class="right iconfont icon-gengduo1"></i>
  </Header>
</template>
<script>
import Header from '../Header'
export default {
  name: 'DetailHeader',
  components: {
    Header
  },
  methods: {
    back() {
      window.history.back()
    }
  }
}
</script>
<style scoped lang="scss">
.left,
.right {
  color: black;
}
</style>
