import React from 'react'
import Home from '../view/home/home';
import CommodityDetail from '../view/commodityDetail/commodityDetail';
import ShopSetting from '../view/shopSetting/shopSetting'
let routers = [
    {
        name:'home',
        path:'/home',
        component:Home,
        children:[
            {
                name:'aaa',
                path:'/aaa',
                component:()=><h3>wwww</h3>, 
            }
        ]
    },{
        name:'shopSetting',
        path:'/shopSetting',
        component:ShopSetting
    } ,
    {
        name:'commodityDetail',
        path:'/commodityDetail',
        component:CommodityDetail
    },
]
export default routers;
