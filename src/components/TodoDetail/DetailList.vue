<template>
  <div class="detail-list">
    <div class="today" v-show="this.isToday">
      <h1 class="list-title">Today</h1>
      <ul>
        <li v-for="(value, index) in this.todayTasks" :key="index" class="item">
          <div class="item-wrapper" v-if="!value.deleted">
            <div class="item-left">
              <input
                type="checkbox"
                class="left-checkbox"
                v-model="value.done"
              />
              <span class="left-name">{{ value.title }}</span>
            </div>
            <i
              class="item-right iconfont icon-shanchu"
              v-show="value.done"
              @click="deleteTask(value)"
            ></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="tomorrow" v-show="this.isTomorrow">
      <h1 class="list-title">Tomorrow</h1>
      <ul>
        <li
          v-for="(value, index) in this.tomorrowTasks"
          :key="index"
          class="item"
        >
          <div class="item-wrapper" v-if="!value.deleted">
            <div class="item-left">
              <input
                type="checkbox"
                class="left-checkbox"
                v-model="value.done"
              />
              <span class="left-name">{{ value.title }}</span>
            </div>
            <i
              class="item-right iconfont icon-shanchu"
              v-show="value.done"
              @click="deleteTask(value)"
            ></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'DetailList',
  props: {
    index: {
      type: Number,
      default: 0,
      require: true
    }
  },
  computed: {
    ...mapGetters([
      'todos',
      'personalTodayTasks',
      'personalTomorrowTasks',
      'workTodayTasks',
      'workTomorrowTasks',
      'homeTodayTasks',
      'homeTomorrowTasks'
    ]),
    todayTasks() {
      // return this.todos[this.index].tasks.filter(task => {
      //   return task.date >= today && task.date < tomorrow
      // })
      var todayTasks = []
      if (this.index === 0) {
        todayTasks = this.personalTodayTasks
      } else if (this.index === 1) {
        todayTasks = this.workTodayTasks
      } else if (this.index === 2) {
        todayTasks = this.homeTodayTasks
      }
      return todayTasks
    },
    tomorrowTasks() {
      var tomorrowTasks = []
      if (this.index === 0) {
        tomorrowTasks = this.personalTomorrowTasks
      } else if (this.index === 1) {
        tomorrowTasks = this.workTomorrowTasks
      } else if (this.index === 2) {
        tomorrowTasks = this.homeTomorrowTasks
      }
      return tomorrowTasks
    },
    isToday() {
      return this.todayTasks.length > 0
    },
    isTomorrow() {
      return this.tomorrowTasks.length > 0
    }
  },
  methods: {
    ...mapMutations(['deleteTask'])
  }
}
</script>
<style scoped lang="scss">
@import '../../assets/css/variable.scss';
@import '../../assets/css/mixin.scss';
.detail-list {
  width: 100%;
  height: 100%;
  //   background: red;
  position: relative;
  .list-title {
    margin-top: 50px;
    margin-left: 45px;
    color: rgba(121, 121, 118, 0.5);
    @include font_size($font_large);
  }
  ul {
    margin-top: 20px;
    margin-left: 50px;
    width: 83%;
    .item {
      margin-top: 10px;
      .item-wrapper {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(90, 80, 80, 0.3);
        .item-left {
          .left-checkbox {
            width: 30px;
            height: 30px;
            border: 1px solid #000;
            margin-right: 20px;
          }
          .left-name {
            @include font_size($font_small);
            line-height: 30px;
          }
        }
        .item-right {
          @include icon_size(30px);
          color: rgba(90, 80, 80, 0.3);
        }
      }
    }
  }
}
</style>
