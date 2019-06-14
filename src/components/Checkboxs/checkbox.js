/*
 * @Author: 楚凤沛 
 * @Date: 2019-06-13 10:54:29 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-06-14 09:57:15
 */

 import './checkbox.css'
 import React ,{ Component } from 'react';

export default class Checkboxs extends Component{
    constructor(){
        super()
        this.state = {
            clas:'checkbox'
        }
        this.style = {
            display:'inline-block',
            width:'.4rem',
            height:'.4rem',
            lineHeight:'.4rem',
            textAlign:'center',
            border:'1px solid #ccc',
            color:'#fff'
        }
    }
    checked(){
        this.setState((state)=>{
            return {
                cls:state.clas === 'checkbox'?'checkbox checked':'checkbox'
            }
        })
    }
    render(){
        return(
            <span className={this.state.cls} style={this.style} onClick={this.checked.bind(this)}></span>
        )
    }
}
