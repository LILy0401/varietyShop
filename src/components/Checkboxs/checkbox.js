/*
 * @Author: 楚凤沛 
 * @Date: 2019-06-13 10:54:29 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-06-14 20:57:04
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
                clas:state.clas === 'checkbox'?'checkbox checked':'checkbox'
            }
        },()=>{
            console.log(this.state.clas)
        })
    }
    render(){
        return(
            <span className={this.state.clas} style={this.style} onClick={this.checked.bind(this)}></span>
        )
    }
}
