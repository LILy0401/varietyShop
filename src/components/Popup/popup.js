import React, { Component } from 'react';
import './popup.css';
import Animate from 'rc-animate';
class popup extends Component {
    render() {
        return (
            <Animate transitionName='popup'>
                <div className='popup'>
                    
                </div>
            </Animate>
        );
    }
}
let openPoP = ()=>{
    
}
let closePop = () =>{

}
export {
    openPoP,
    closePop
};