import request from '../utiles/http'
request.put('/store/goods/cat.add',{
    body:{
        cat_name:'蔬1菜',
        store_id:'1e01685654c1cb5672e896c58f011dbfs'
    },
    headers:{
        authorization:'asdfg'
    }
}).then(res=>console.log(res))
// request.delete('/store/goods/cat.delete',{
//     body:{
//         cat_id:'8217c3fdb19242d7fd86f558d1872b48'
//     },
//     headers:{
//         authorization:'asdfg'
//     }
// }).then(res=>console.log(res))

// //post 接口跑通
// request.post('/store/goods/cat.list',{
//     body:{
//         store_id:'1e01685654c1cb5672e896c58f011dbf'
//     },
//     headers:{
//         authorization:'asdfg'
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