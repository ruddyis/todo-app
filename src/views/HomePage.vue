<template>
  <div class="home-page" ref="homePage">
    <AppBar></AppBar>
    <Avator></Avator>
    <TodoList ref="todoList" @changeTheme="changeTheme"></TodoList>
    <Gradient :currentIndex="this.currentIndex"></Gradient>
    <transition :css="false" @enter="enter" @leave="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import AppBar from '../components/HomePage/AppBar'
import Avator from '../components/HomePage/Avatar'
import TodoList from '../components/HomePage/TodoList'
import Gradient from '../components/HomePage/Gradient'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'HomePage',
  components: {
    AppBar,
    Avator,
    TodoList,
    Gradient
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeTheme(index) {
      this.currentIndex = index
      // console.log(index)
    },
    enter(el, done) {
      Velocity(el, 'transition.flipBounceXIn', { duration: 500 }, function() {
        done()
      })
    },
    leave(el, done) {
      Velocity(el, 'transition.flipBounceXOut', { duration: 500 }, function() {
        done()
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
.home-page {
  width: 100%;
  height: 100%;
  @include bg_color();
}
</style>
