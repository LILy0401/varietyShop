
import Home from '../view/home/home';
import Putaway from '../view/putaway/putaway';
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
    }
]
export default routers;
