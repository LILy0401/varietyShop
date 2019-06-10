import React from 'react'
import Home from '../view/home/home';
import CommodityDetail from '../view/commodityDetail/commodityDetail';

let routers = [
    {
        name:'home',
        path:'/',
        component:Home,
        children:[
            {
                name:'aaa',
                path:'/aaa',
                component:()=><h3>wwww</h3>, 
            }
        ]
    },
    {
        name:'commodityDetail',
        path:'/commodityDetail',
        component:CommodityDetail
    },
]
export default routers;
