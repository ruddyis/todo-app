<template>
  <div class="todo-detail">
    <DetailHeader></DetailHeader>
    <DetailContent :index="index"></DetailContent>
    <addItem @todoSelect="addItem"></addItem>
    <transition :css="false" @enter="enter" @leave="leave">
    <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import DetailHeader from '../components/TodoDetail/DetailHeader'
import DetailContent from '../components/TodoDetail/DetailContent'
import addItem from '../components/addItem'
// import { mapMutations } from 'vuex'
import { getLocalStorage } from '../tools/tools'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'TodoDetail',
  components: {
    DetailHeader,
    DetailContent,
    addItem
  },
  computed: {
    index() {
      return getLocalStorage('currentIndex')
    }
  },
  methods: {
    addItem(index) {
      this.$router.push({
        path: `/todoDetail/${index}/newItem`
      })
    },
    enter(el, done) {
      Velocity(el, 'transition.flipBounceXIn', { duration: 1000 }, function() {
        done()
      })
    },
    leave(el, done) {
      Velocity(el, 'transition.flipBounceXOut', { duration: 1000 }, function() {
        done()
      })
    }
  }
}
</script>
<style scoped lang="scss">
.todo-detail {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
}
</style>
