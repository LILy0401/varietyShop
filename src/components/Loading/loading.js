import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './loading.css';
import Animate from 'rc-animate';
export default class Loading extends Component {
    state={
        flag:true
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            flag:nextProps.flag
        })
    }
    render() {
        return (
            <Animate transitionName='load'>
              { this.state.flag && <div className='loading'>
                    loading...
                </div>}
            </Animate>
        );
    }
}
let LoadingDom = document.createElement('div');
document.body.appendChild(LoadingDom);

let open = ()=>{
    ReactDOM.render(<Loading flag={true}></Loading>,LoadingDom)
}

let close = ()=>{
    ReactDOM.render(<Loading flag={false}/>,LoadingDom)
}
export {
    open,
    close
};
// 引入，调用open()或者close()即可