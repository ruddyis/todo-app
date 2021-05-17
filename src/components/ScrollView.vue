<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'ScrollView',
  mounted() {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbars: false,
      bounce: true,
      probeType: 3,
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true,
      click: true
    })
    const observer = new MutationObserver((MutationList, observer) => {
      this.iscroll.refresh()
    })
    const config = {
      childList: true,
      subtree: true,
      attributeFilter: ['height', 'offsetHeight']
    }
    observer.observe(this.$refs.wrapper, config)
  },
  methods: {
    refresh() {
      setTimeout(() => {
        this.iscroll.refresh()
      }, 100)
    }
  }
}
</script>
<style scoped lang="scss">
#wrapper {
  width: 100%;
  height: 100%;
}
</style>
