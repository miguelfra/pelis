import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pelis',
    component: () => import('../views/Pelis.vue')
  },
  {
    path: `/pelis_info/:name`,
    name: 'Pelis_info',
    component: () => import( '../views/Pelis_Info.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
