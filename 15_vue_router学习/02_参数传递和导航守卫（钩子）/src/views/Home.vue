<template>
  <div>
    <h2>这是首页</h2>
    <router-link to="/home/Home_child">显示孩子按钮</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  //生命周期函数，创建组件时回调
  created(){

  },
  //生命周期函数，销毁时回调（跳到其他页面）
  destoryed(){

  },
  //生命周期函数，挂载后回调
  mounted(){

  },
  //生命周期函数，发生更新（数据渲染）时回调
  updated(){
    
  }
}
</script>