import Putaway from '../view/putaway/putaway';
import React from 'react'
import Home from '../view/home/home';
// import CommodityDetail from '../view/commodityDetail/commodityDetail';
import ShopSetting from '../view/shopSetting/shopSetting'
let routers = [
    
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
    }
]
export default routers;
