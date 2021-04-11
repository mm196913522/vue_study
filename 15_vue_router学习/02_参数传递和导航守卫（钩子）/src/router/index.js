import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Home_child = () => import('../components/Home_child.vue')
const About = () => import('../views/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../views/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta:{
      title:'首页'
    },
    component: Home,
    children: [
      {
        path: 'home_child',
        component : Home_child
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      title:'关于'
    },
    component: About,
    children :[
      {
        path: 'user/:id',
        component: User
      }
    ]
  },
  {
    path: '/profile',
    meta:{
      title:'档案'
    },
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

//导航守卫,前置钩子
router.beforeEach((to ,from, next) => {
  // if(to.meta.title)
  // {
    document.title = to.matched[0].meta.title
  // }

  //可以传false或者路径
  next()
})

//导航守卫，后置钩子
router.afterEach((to, from) => {
   console.log('从【' + from.matched[0].meta.title + '】跳转到【' + to.matched[0].meta.title +'】');
})

export default router
