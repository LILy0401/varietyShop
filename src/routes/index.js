import React from 'react';
import {Router,Switch,Route } from 'dva/router';
import routerconfig from './routerconfig'

function setRouters(routerconfig){

    return routerconfig.map(item=>{
       
        if(item.children){
            return <Route path = {item.path} 
            key = {item.name}
            render={({history})=>{
                return <item.component history={history} children={item.children}></item.component>
            }}></Route>
        }
        return <Route path={item.path} component={item.component} key={item.name}></Route>
    })
}
let ROUTER = (({history,app})=>{
   
    return  <Router history={history}>
                <Switch>
                    {setRouters(routerconfig)}
                </Switch>
            </Router>
})

export {setRouters};
export default ROUTER;
