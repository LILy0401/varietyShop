import Putaway from '../view/putaway/putaway';
import Classify from '../view/classify/classify';
import ProductList from '../view/productList/productlist.js';
import ProductDetail from '../view/productDetail/productDetail';
import Home from '../view/home/home';
import ShopSetting from '../view/shopSetting/shopSetting'
let routers = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        name:'home',
        path:'/home',
        component:Home,
        children:[
          
        ]
    },{
        name:'shopSetting',
        path:'/shopSetting',
        component:ShopSetting
    } ,
    {
        name:'putaway',
        path:'/putaway',
        component:Putaway
    },{
        name:'classify',
        path:'/classify',
        component:Classify
    },{
        name:'productList',
        path:'/productList',
        component:ProductList,
    },
    {
        name:'productDetail',
        path:'/productDetail',
        component:ProductDetail
    }  
]
export default routers;
