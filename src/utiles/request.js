import query from './http'

let instance = query.create({
    baseUrl:'',
    headers:{
        "x-response-tiem":"1324"
    }
})
// instance.request.use((config)=>{
//     return config
// })
export default instance;