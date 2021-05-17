import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoDetail from '../views/TodoDetail.vue'
import NewItem from '../views/NewItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/todoDetail/:index',
    component: TodoDetail,
    children: [{ path: '/todoDetail/:index/newItem', component: NewItem }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
