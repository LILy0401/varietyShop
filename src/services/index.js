import request from '../utiles/http'

// request.get('/store/catagory')
request.get('/store/goods/totallist').then(res=>res.json()).then(res=>{
    console.log(res)
})
// request.get('/store/statistics/profit?from=2019-07-21&store_id=asdfg',{
//     query:{

//     },
//     headers:{
//         authorization:'12asdf'
//     }
// })