import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


//登录，拿到token并保存
// axios({
//   url:'http://t.com/staff_login',
//   method:'POST',
//   data:{
//     username:'root',
//     password:'Qq123456.'
//   }
// }).then(res=> window.localStorage['x-token'] = res.headers['x-token'])

//拿token去访问身份验证接口
// axios({
//   url:'http://t.com/route/index',
//   method:'GET',
//   params:{
//     team_id:1
//   },
//   headers:{
//     Authorization:'Bearer ' + localStorage.getItem('x-token')
//   }
// }).then(res=>console.log(res))


// //修改公共配置
// axios.defaults.baseURL = 'http://t.com'
// axios.defaults.headers = {
//   Authorization:'Bearer ' + localStorage.getItem('x-token')
// }

// //创建实例进行配置，直接调用实例
// const a1 = axios.create({
//   baseURL:'http://t.com',
//   headers:{
//     Authorization:'Bearer ' + localStorage.getItem('x-token')
//   }
// })

import {request} from './network/request'

request({
  url:'/route/index'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})