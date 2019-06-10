import React, { Component } from 'react';
import './home.css';
import { connect } from 'dva';
import {setRouters} from '../../routes/index';
class home extends Component {
    render() {
        return (
            <div className='home'>
                
                <span onClick={this.addCount}>home</span>
                <span>{this.props.count}</span>
                {setRouters(this.props.children)}
            </div>
        );
    }
    addCount=()=>{

        this.props.dispatch({type:'m_home/addCount'})
    }
}
let state=(state)=>{
    
    return{
        count:state.m_home.count
    }
}
export default connect(state)(home);