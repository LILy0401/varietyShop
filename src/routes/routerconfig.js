import Putaway from '../view/putaway/putaway';
import Classify from '../view/classify/classify';
import ProductList from '../view/productList/productlist.js';
import ProductDetail from '../view/productDetail/productDetail';
import Home from '../view/home/home';
import ShopSetting from '../view/shopSetting/shopSetting'
import Login from '../view/login/login';
import Register from '../view/register/register';
import CreateStore from '../view/createStore/createstore';

let routers = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        name:'home',
        path:'/home',
        component:Home,
    },{
        name:'shopSetting',
        path:'/shopSetting',
        component:ShopSetting
    },{
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
    },{
        name:'login',
        path:'/login',
        component:Login
    },{
        name:'register',
        path:'/register',
        component:Register
    },{
        name:'createStore',
        path:'/createStore',
        component:CreateStore
    }
]

export default routers;
