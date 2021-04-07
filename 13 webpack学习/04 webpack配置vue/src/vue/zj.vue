<template>
    <div><h2>{{test}}</h2>
    <ul>
        <li v-for="v in arr">{{v}}</li>
    </ul>
    <button @click="clk">点吧</button></div>
</template>

<script>
export default {
    name:'zj',
    data(){
        return {
            test:'呵呵',
            arr:[
                ' 小强',
                '小明',
                '小猪'
            ]
        }
    },
    methods:{
        clk(){
            alert('哈哈')
        }
    }
}
</script>

<style scoped>

</style>