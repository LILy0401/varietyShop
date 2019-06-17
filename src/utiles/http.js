//兼容
import 'isomorphic-fetch'
class Query{
    constructor(options={headers:{}}){
        
        // console.log(options)
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
    }
    setConfig(url,options,method){
        if(method === 'get' && options.query){
            let {query} = options;
            let usp = new URLSearchParams('')
            Object.entries(query).forEach(item=>{
                usp.append(item[0],item[1])
            })
            url=url+'?'+usp.toString();
        }
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
           let {murl,headers} = this.setConfig(url,options,'get');
            fetch(murl,{
                headers
            }).then(res=>res.json())
            .then(res=>{
                resolve(res)
            })
        })
    }
    post(url,options){
        return new Promise((resolve,reject)=>{
            let {headers} = this.setConfig(url,options,'post')
            let o = {
                method:'POST',
                headers:{
                    ...headers
                }
            }
            if(options.body){
                o.body = JSON.stringify(options.body)//在接口中自己进行转化
            }
            
            fetch(url,o)
            .then(res=>res.json())
            .then(res=>{
                resolve(res)
            })
        })
    }
    delete(url,options){
        return new Promise((resolve,reject)=>{
            let {headers} = this.setConfig(url,options,'post')
            let o = {
                method:'DELETE',
                headers:{
                    ...headers
                }
            }
            if(options.body){
                o.body = JSON.stringify(options.body)//在接口中自己进行转化
            }
            fetch(url,o).then(res=>res.json())
            .then(res=>{
                resolve(res)
            })
        })
    }
    put(url,options){
        return new Promise((resolve,reject)=>{
            let {headers} = this.setConfig(url,options,'post')
            let o = {
                method:'PUT',
                headers:{
                    ...headers
                }
            }
            if(options.body){
                o.body = JSON.stringify(options.body)//在接口中自己进行转化
            }
            fetch(url,o).then(res=>res.json())
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