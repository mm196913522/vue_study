import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/Home.vue');
const About = () => import('../components/About.vue');
const User = () => import('../components/User.vue');
const Home_one = () => import('../components/Home_one.vue');
const Home_two = () => import('../components/Home_two.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //重定向
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        redirect: 'home_one'
      },
      {
        path:'home_one',
        name:'Home_one',
        component: Home_one
      },
      {
        path:'home_two',
        name:'Home_tow',
        component: Home_two
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  routes,
  //默认是hash模式，需要进行更改
  mode:"history"
})

export default router
