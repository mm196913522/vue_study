import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//抽离吧，分文件吧，把下面的属性安排的明明白白的！！！modules建文件夹，再继续分，分到怀疑人生！

export default new Vuex.Store({
  //数据
  //响应式修改：Vue.set(men[0],'height',1.88)
  //响应式修改2：Vue.delete(men[0],'age)
  state: {
    num:0,
    men:[
      {id:1,name:"小红",age:18},
      {id:2,name:"小明",age:21},
      {id:3,name:"小白",age:22}
    ]
  },
  //方法
  mutations: {
    jia(state){
      state.num++
    },
    jian(state){
      state.num--
    },
    //可以去定义常量=jia_c，然后用常量了
    ['jia_c'](state,n){
      state.num += n
    },
    yibugaibian(state){
      state.men[1].id=10
    }
  },
  //计算属性
  getters:{
    //还可以把getters传进来（第二个参数）
    pingfang(state){
      return state.num * state.num
    },
    //传条件
    more(state){
      return age => state.men.filter(s => s.age > age)
    }
  },
  actions: {
    //默认参数context
    fun(context,payload){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('yibugaibian')
          console.log(payload);
          resolve('111')
        },1000)
      })
    }
  },
  modules: {
    //开始分离吧，童鞋，搞对象，把上面的属性全拿过来。可以在外部把对象定义好丢进来
    //state要特殊调用，$state.state.duixiang
    //mutations跟上面一样的，没有特殊化
    //getters使用也没有特殊化，但是可以传第三个参数rootstate，拿到根厘米那的state
  }
})
