<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link :to="{
        path: '/profile',
        query: {
          id:1,
          name: 'mary',
          sex: 0
        }
      }">档案</router-link>
    </div>
    <button @click="da">档案</button>
    <!-- keep-alive保持组件不被销毁 -->
    <!-- <keep-alive exclude="Home,User">排除需要销毁的 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name:'App',
  methods:{
    da(){
      if(this.$route.path !== '/profile')
      {
        this.$router.replace({
          path: '/profile',
          query:{
            name:'haha',
            id:2,
            sex:1
          }
        })
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
