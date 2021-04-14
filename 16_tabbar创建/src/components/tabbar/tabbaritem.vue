<template>
    <div class = 'tabbar_item' @click="btn">
      <!-- 增加属性或者判断是否显示的时候，最好在插槽外层增加一个DIV -->
        <div v-if="!this.huoyue">
          <slot name="icon"></slot>
        </div>
          
        <div v-else>
          <slot name="hyicon"></slot>
        </div>
          
        <div :style="iscolor">
          <slot name=text></slot>
        </div>
        <!-- <slot></slot>
        <slot></slot> -->
    </div>
</template>

<script>
export default {
    name:"tabbaritem",
    props:{
      link:String,
      ztcolor:{
        type:String,
        default:"red"
      }
    },
    computed:{
      huoyue(){
        //route是处于活跃状态的路由
        return this.$route.path.indexOf(this.link) !==-1;
      },
      iscolor(){
        return this.huoyue ? {color:this.ztcolor} : {}
        // return {color:this.ztcolor};
      }
    },
    methods:{
      btn(){
        this.$router.replace(this.link)
      }
    }
}
</script>

<style>
  .tabbar_item{
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tabbar_item img{
    width: 25px;
    height: 25px;
    font-size: 15px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>