<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <h2>{{$store.state.num}}</h2>
    <button @click="add()">+</button>
    <button @click="ajj()">-</button>
    <button @click="jia_n(10)">+10</button>
    <hellovuex></hellovuex>
    <h2>{{$store.getters.pingfang}}</h2>
    <h2>{{$store.getters.more(20)}}</h2>
    <button @click="yibu()">异步</button>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
  name:"app",
  data(){
    return {
      msg:"APP组件的消息"
    }
  },
  methods:{
    add(){
      this.$store.commit('jia')
    },
    ajj(){
      this.$store.commit('jian')
    },
    jia_n(n){
      this.$store.commit('jia_c',n)
    },
    //调用异步
    yibu(){
      this.$store.dispatch('fun','携带的信息').then(res=>console.log(res))
    }
  },
  components:{
    hellovuex:HelloVuex
  }
}
</script>

<style>

</style>
