<template>
    <div>
        <h2>子组件11111111111</h2>
        <p>子内容</p>
        <p>{{bye}}</p>
        <test_tem_zi></test_tem_zi>
    </div>
</template>

<script>
import test_tem_zi from './test_tem_zi.vue'

export default {
    name:'test_tem',
    components:{
        test_tem_zi
    },
    data(){
        return {
            bye: '再见'
        }
    }
}
</script>

<style scoped>

</style>