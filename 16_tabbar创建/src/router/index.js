import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('../views/home.vue')
const fl = () => import('../views/fl.vue')
const gwc = () => import('../views/gwc.vue')
const mine = () => import('../views/mine.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/fl',
    component: fl
  },
  {
    path: '/gwc',
    component: gwc
  },
  {
    path: '/mine',
    component: mine
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
