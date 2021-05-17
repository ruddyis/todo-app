<template>
  <div class="todo-list">
    <swiper :options="swiperOption" class="banner" ref="mySwiper">
      <swiper-slide
        v-for="(todo, index) in this.todos"
        :key="index"
        class="item"
      >
        <List :index="index" @select="openDetail"></List>
        <!-- <div class="icon">
          <i
            :class="`icon-img iconfont icon-${todo.iconImg}`"
            @click.stop="openDetail(index)"
          ></i>
        </div>
        <p class="task">{{ todo.tasks.length }} Tasks</p>
        <p class="name">{{ todo.name }}</p>
        <div class="progress">
          <div class="progress-line">
            <div class="progress-line-in"></div>
          </div>
          <span class="progress-num">0%</span>
        </div> -->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <router-view></router-view>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import '../../store/index'
import { mapGetters } from 'vuex'
import List from '../List'
import { setLocalStorage, getLocalStorage } from '../../tools/tools'
export default {
  name: 'TodoList',
  components: {
    swiper,
    swiperSlide,
    List
  },
  computed: {
    ...mapGetters(['todos']),
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    const that = this
    this.swiper.on('slideChangeTransitionStart', function() {
      var clickedIndex = this.realIndex
      that.changeTheme(clickedIndex)
    })
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      themes: ['theme', 'theme1', 'theme2'],
      currentIndex: 0
    }
  },
  methods: {
    changeTheme(index) {
      this.currentIndex = index
      setLocalStorage('currentTheme', this.themes[this.currentIndex])
      document.documentElement.setAttribute('data-theme', getLocalStorage('currentTheme'))
      // document.documentElement.setAttribute('data-theme', this.themes[index])
      this.$emit('changeTheme', this.currentIndex)
    },
    openDetail(index) {
      // console.log(index)
      this.$router.push({
        path: `todoDetail/${index}`
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import '../../assets/css/variable.scss';
@import '../../assets/css/mixin.scss';
.todo-list {
  width: 75%;
  height: 45%;
  margin-top: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  .banner {
    width: 100%;
    height: 100%;
    .item {
      width: 100%;
      height: 100%;
      background: white;
      position: flex;
      justify-content: space-around;
      border-radius: 30px;
    }
  }
}
</style>
<style lang="scss">
@import '../../assets/css/variable.scss';
@import '../../assets/css/mixin.scss';
.banner {
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .swiper-pagination-bullet-active {
    @include bg_color();
  }
}
</style>
