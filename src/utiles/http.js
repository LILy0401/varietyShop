//兼容
import 'isomorphic-fetch'

class Query{
    constructor(options={headers:{}}){
        console.log(options)
        let defaults = {
            baseUrl:'',
            headers:{
                "content-type":"application/json"
            }
        }
        this.config = {
            ...defaults,
            ...options,
            headers:Object.assign({},defaults.headers,options.headers),
        }
        // this.headers = {
        //     ...defaults.headers,
        //     ...options.headers
        // }
    }
    setConfig(url,options){
        let {config} = this;
            // let headers = {...config.headers,...options.headers};
            let headers = config.headers;
            if(options.headers){
                headers =  {...config.headers,...options.headers};
            }
            if(config.baseUrl){
                url = config.baseUrl + url;
            }
            return {
                murl:url,headers
            }
        }
    get(url,options={}){
        return new Promise((resolve,reject)=>{
           let {murl,headers} = this.setConfig(url,options)
            fetch(murl,{
                headers
            }).then(res=>res.json())
            .then(res=>{
                resolve(res)
            })
        })
    }
    post(url,params){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                headers:{
                    ...this.headers
                },
                body:params
            }).then(res=>res.json())
            .then(res=>{
                resolve(res)
            })
        })
    }
    create(options){
        return new Query(options)
    }
}
let http = new Query({
    headers:{
        "content-type":"application/json"
    }
})
export default http;






// let getJson = (url)=>{
//     return new Promise((resolve,reject) =>{
//         fetch(url).then((response)=>{
//             return response.json();
//         }).then((json)=>{
//             console.log(json);
//             resolve(json);
//         })
//     })
// }
// let trys= {
//     install(React,options){
//        console.log(React)
//         // Object.defineProperty(React.prototype,'$http',{
//         //     writable:false,
//         //     value:$http
//         // })
//     }
// }
// export default trys;