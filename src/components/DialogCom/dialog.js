import React, { Component } from 'react';
import './dialog.css';
import Animate from 'rc-animate';
class Dialog extends Component {
    constructor(){
        super();
        this.state={
            isShow:false
        }
    }
    // 使用dialog请前往classify.js
    render() {
        let { btn=['取消','确定'] ,type ,isShow} = this.props;
        return (
            <Animate transitionName='dia'>
                { 
                    isShow && 
                    <div className='cll_dialog'>
                        <div className='cll_dialog_div'>
                            <p className='cll_title'>{this.props.title}</p>
                            <div className='cll_con'>
                            {this.props.children}
                            </div>
                            <p>
                                <span onClick={this.cancle.bind(this)}>{btn[0]}</span>
                                <span onClick={this.confirm.bind(this)}>{btn[1]}</span>
                            </p>
                        </div>
                    </div>
                }
                    
                
            </Animate>
        );
    }
    confirm(){
        this.setState({
            isShow:false
        })
        this.props.change(this.state.isShow,{msg:'确定'})
    }
    cancle(){
        this.setState({
            isShow:false
        })
        this.props.change(this.state.isShow,{msg:'取消'})
    }
}

export default Dialog;