<template>
  <div>
    <p>这是关于</p>
    <router-link :to="'/about/user/'+100">查看用户id</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name :'About'
}
</script>