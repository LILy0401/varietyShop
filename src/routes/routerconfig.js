
import Home from '../view/home/home';
import Putaway from '../view/putaway/putaway';
import Classify from '../view/classify/classify';
import ProductList from '../view/productList/productlist.js';
import ProductDetail from '../view/productDetail/productDetail';
let routers = [
    
    {
        name:'home',
        path:'/home',
        component:Home,
        children:[
          
        ]
    },
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
        children:[
            {
                name:'/productDetail',
                path:'/productList/productDetail',
                component:ProductDetail
            }   
        ]
    }
]
export default routers;
