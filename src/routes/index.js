import React from 'react';
import {Router,Switch,Route,Redirect} from 'dva/router';
import routerconfig from './routerconfig'
import Cookies from 'js-cookie';
// import Connent from '../utiles/router'
// console.log(Connent())
function setRouters(routerconfig){
    return routerconfig.map(item=>{
           
            if(item.redirect){
                    return  window.location.pathname === item.path && <Redirect key={item.redirect} exact from={item.path} to={item.redirect}></Redirect>
            }
            if(item.children){
                return <Route path = {item.path} 
                key = {item.name}
                render={({history})=>{
                    return <item.component history={history} children={item.children}></item.component>
                }}></Route>
            }
      
        return <Route path={item.path} render={({history})=>{
            return <item.component history={history}></item.component>
        }} key={item.name}></Route>

        
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
