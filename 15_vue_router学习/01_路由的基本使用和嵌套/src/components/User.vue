<template>
    <div>
        我是用户{{$route.params.id}}
    </div>
</template>

<script>
export default {
    name:"User",
    // computed:{
    //     userid(){
    //         return this.$route.params.id;
    //     }
    // }
}
</script>