import axios from 'axios'

export function request(config){

    //！！！！！假如哪天axios不能用了，就要用Promise了，然后把里面的axios相关换掉
    // return new Promise((resolve,reject)=>{
    //     
    //     const instance = axios.create({
    //         baseURL:'http://t.com',
    //     })

    //     //发送网络请求
    //     instance(config).then(res => resolve(res)).catch(error => reject(error))
    // })

        //axios自带Promise
        const instance = axios.create({
            baseURL:'http://t.com',
        })

        //axios拦截器
        //请求拦截
        instance.interceptors.request.use(success=>{
            console.log(success);
            return success
        },err=>{
            console.log(err);
            return err
        })
        //响应拦截,跟上面一样
        // instance.interceptors.response.use()




        return instance(config)
}