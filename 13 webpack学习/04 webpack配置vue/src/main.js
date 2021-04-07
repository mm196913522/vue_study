import * as obj_one from './js/one.js'
import * as obj_two from './js/two.js'
import Vue from 'vue'
import zj from './vue/zj.vue'
import test_tem from './vue/test_tem.vue'
// import ig from './img/02.jpg'

console.log(obj_one.sum(10, 20));
console.log(obj_one.cheng(3, 10));
console.log(obj_two.o.name);
console.log(obj_two.o.sex);
console.log(obj_two.o.haha());

//依赖css文件
require('./css/yanse.css')

//引入Vue之后可以使用vue代码了
new Vue({
    el:"#app",
    template:`<div>
        <zj/>
        <test_tem/>
    </div>`,
    components:{
        zj,
        test_tem
    }
})