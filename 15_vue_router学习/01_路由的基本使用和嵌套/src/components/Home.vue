<template>
    <div>
        <h2>我是首页</h2>
        <router-link to="/home/home_one">第一个子嵌套</router-link><br/>
        <router-link to="/home/home_two">第二个子嵌套</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name:"Home"
}
</script>