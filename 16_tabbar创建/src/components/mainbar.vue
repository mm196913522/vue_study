<template>
    <div>
        <tabbar>
        <tabbaritem link="/home" ztcolor="red">
            <template v-slot:icon>
            <img src="../assets/img/tabbar/home.png" alt="">
            </template>
            <!-- <template v-slot:hyicon>
            <img src="../assets/img/tabbar/home.png" alt="">
            </template> -->
            <template v-slot:text>
                <div>首页</div>
            </template>
        </tabbaritem>

        <tabbaritem link="/fl" ztcolor="red">
            <template v-slot:icon>
            <img src="../assets/img/tabbar/fl.png" alt="">
            </template>
            <!-- 点击时候显示下面的活跃图标 -->
            <!-- <template v-slot:hyicon>
            <img src="../assets/img/tabbar/fl.png" alt="">
            </template> -->
            <template v-slot:text>
            <div>分类</div>
            </template>
        </tabbaritem>

        <tabbaritem link="/gwc" ztcolor="red">
            <template v-slot:icon>
            <img src="../assets/img/tabbar/gwc.png" alt="">
            </template>
            <!-- <template v-slot:hyicon>
            <img src="../assets/img/tabbar/gwc.png" alt="">
            </template> -->
            <template v-slot:text>
            <div>购物车</div>
            </template>
        </tabbaritem>

        <tabbaritem link="/mine" ztcolor="red">
            <template v-slot:icon>
            <img src="../assets/img/tabbar/mine.png" alt="">
            </template>
            <!-- <template v-slot:hyicon>
            <img src="../assets/img/tabbar/mine.png" alt="">
            </template> -->
            <template v-slot:text>
            <div>我的</div>
            </template>
        </tabbaritem>
        </tabbar>
    </div>
</template>

<script>
import tabbar from './tabbar/tabbar.vue'
import tabbaritem from './tabbar/tabbaritem.vue'

export default {
    name:"mainbar",
    components:{
        tabbar,
        tabbaritem
    }
}
</script>