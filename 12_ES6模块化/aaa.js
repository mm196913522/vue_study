let name = "小明"
let sex = "男"
let age = 18
function sum(num1,num2){
    return num1 + num2
}

if(sex === '男')
{
    console.log(sum(10,20));
}

//方式1：
export {
    name,sex,age,sum
}

//方式2：
// export let name = "小明";
// export let sex = "男"
// export let age = 18

// export let function sum(num1,num2){
//     return num1 + num2
// }

// export let calss staff {

// }