import React, { Component } from 'react';
import './popup.css';
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';
class Popup extends Component {
    render() {
        let { flag , arr} = this.props;
        return (
            <Animate transitionName='popup'>
                {
                   flag&&flag?<div className='popup'>
                       <div className='pop_div'>
                           {
                               arr.map((ele,index)=>{
                                   return <p key={index} onClick={this.getCheck.bind(this,ele)}>{ele}</p>
                               })
                           }
                       </div>
                       <p onClick={this.closediv.bind(this)}>关闭</p>
                   </div>:null
                }   
            </Animate>
        );
    }
    getCheck(ele){
    
        this.props.fnGetCheck(ele);
        setTimeout(()=>{
            closePop();
        },500)
    }   
    closediv(){
        closePop();
    }
}
let divpop = document.createElement('div');
document.body.appendChild(divpop);
let openPoP = (arr,fnGetCheck)=>{
    ReactDOM.render(<Popup fnGetCheck={fnGetCheck} arr={arr} flag={true}></Popup>,divpop)
}
let closePop = () =>{
    ReactDOM.render(<Popup flag={false}></Popup>,divpop)
}
export {
    openPoP,
    closePop
};