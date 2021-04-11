<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" tag="button" replace>首页鸭</router-link> |
      <router-link to="/about">关于鸭</router-link>
      <button @click="btnhome">点击跳转到首页</button>
      <div>
        <router-link :to="'/user/'+id">显示用户名</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"app",
    data(){
      return {
        id:2,
        username:[
            {
                "id":1,
                "name":"张三"
            },
            {
                "id":2,
                "name":"李四"
            },
            {
                "id":3,
                "name":"王五"
            }
        ]
    }
  },
  methods:{
    btnhome(){
      // this.$router.push('/home')
      //防止跳转到当前页面时报错
      if(this.$route.path !== '/home/home_one'){
        this.$router.replace('/home')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
