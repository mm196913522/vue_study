import * as obj_one from './js/one.js'
import * as obj_two from './js/two.js'

console.log(obj_one.sum(10, 20));
console.log(obj_one.cheng(3, 10));
console.log(obj_two.o.name);
console.log(obj_two.o.sex);
console.log(obj_two.o.haha());

//依赖css文件
require('./css/yanse.css')