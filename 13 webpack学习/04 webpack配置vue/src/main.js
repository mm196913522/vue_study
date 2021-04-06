import * as obj_one from './js/one.js'
import * as obj_two from './js/two.js'
import Vue from 'vue'
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
    template:`<div><h2>{{test}}</h2>
    <ul>
        <li v-for="v in arr">{{v}}</li>
    </ul>
    <button @click="clk">点吧</button></div>`,
    data:{
        test:'呵呵',
        arr:[
            ' 小强',
            '小明',
            '小猪'
        ]
    },
    computed:{

    },
    methods:{
        clk(){
            alert('哈哈')
        }
    },
    filters:{

    },
    components:{
        
    }
})