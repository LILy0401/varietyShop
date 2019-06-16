// import request from '../utiles/http'
import Cookies from 'js-cookie';
import request from '../utiles/request';

function Logins(params){
    return request.post('/store/login',{
        body:params
    })
}
function Register(params){
    console.log(Cookies.get('token'))
    return request.post('/store/decorate',{
        body:params,
        headers: {
            authrization: Cookies.get('token')
        }
    })
}
// Logins({
//     user_name:'test',
//     user_pwd:'test1!'
// }).then(res=>{
//     console.log(res)
// })


export {
    Logins,
    Register
}










// request.post('/store/register',{
//     body:{
//         user_name:'写死',
//         user_pwd:'wangmeng!1',
//         phone:17600086280
//     }
// })
// .then(res=>{
//     console.log(res);
// })
// request.put('/store/goods/cat.add',{
//     body:{
//         cat_name:'蔬1菜',
//         store_id:'1e01685654c1cb5672e896c58f011dbfs'
//     },
//     headers:{
//         authorization:'asdfg'
//     }
// }).then(res=>console.log(res))
// request.delete('/store/goods/cat.delete',{
//     body:{
//         cat_id:'8217c3fdb19242d7fd86f558d1872b48'
//     },
//     headers:{
//         authorization:'asdfg'
//     }
// }).then(res=>console.log(res))

// //post 接口跑通
// request.post('/store/decorate',{
//     body:{
//         banner:'1T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC,1T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC',
//         store_id:'1e01685654c1cb5672e896c58f011dbf',
//         store_name:'五谷粥坊',
//         brand_name:'五谷粥坊',
//         main_image:'1T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC',
//         contact_number:'13612344321,021-12336754',
//         business_time:'周一-周五 09:00-20:00,周六-周日 10:00-22:00',
//         indexstyle_id:'1',
//         delivery_fee:'10',
//         logo:'base64'
//     }, 
//     headers:{
//         authrization:'asdascxv123asd'
//     }
// }).then(res=>{
//     console.log(res)
// })

// request.get('/store/goods/totallist')

// request.get('/store/goods/catlist').then(res=>{
//     console.log(res)
// })
// //可以获取到需要的数据

// request.get('/store/statistics/profit',{
//     query:{
//         from:'2019-07-21',
//         to:'2019-08-01',
//         store_id:'asdfg'
//     },
//     headers:{
//         authorization:'12asdf'
//     }
// }).then(res=>console.log(res))

// request.post('',{
//     body:{
//         from:'2019-07-21',
//         to:'2019-08-01',
//         store_id:'asdfg'
//     },
//     headers:{
//         authorization:'12asdf'
//     }
// })
