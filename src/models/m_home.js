export default {
    namespace:'m_home',
    state:{
        count:1
    },
    reducers:{
        addCount(state,action){
           
            let { count } = state;
            count +=1;
    
            return {...state,count};
        }
    },
    effects:{

    }
}
