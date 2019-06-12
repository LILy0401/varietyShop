import React, { Component } from 'react';
import './dialog.css';
class Dialog extends Component {
    constructor(){
        super();
        this.state={
            isShow:false
        }
    }

    render() {
        return (
            <div className='cll_dialog' style={{'display': this.props.isShow?'block':'none'}}>
                <div className='cll_dialog_div'>
                    <p className='cll_title'>{this.props.title}</p>
                    <div className='cll_con'>
                       {this.props.children}
                    </div>
                    <p>
                        <span onClick={this.cancle.bind(this)}>{this.props.btn[0]}</span>
                        <span onClick={this.confirm.bind(this)}>{this.props.btn[1]}</span>
                    </p>
                </div>
            </div>
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