import React, { Component } from 'react';
import './login.css';
class login extends Component {
    render() {
        return (
            <div className='cll_login'>
                <div className='cll_login_div'>
                    <p className='cll_user_name'>
                        <span>
                            用户名：
                        </span>
                        <input type='text' placeholder='请输入用户名'></input>
                    </p>
                    <p className='cll_user_name'>
                        <span>
                            密码:
                        </span>
                        <input type='password' placeholder='请输入密码'></input>
                    </p>
                    <p className='cll_p'>
                        <button className='cll_btn'>登录</button>
                    </p>
                   
                    <p className='cll_zuce' onClick={this.zuce}>去注册</p>
                </div>
            </div>
        );
    }
    zuce=()=>{
        this.props.history.push('/register');
    }
}

export default login;