import React, { Component } from 'react';
import './login.css';
import request from '../../utiles/http';
import Cookies from 'js-cookie';
class login extends Component {
    state={
        user_name:'',
        user_pwd:''
    }
    render() {
        return (
            <div className='cll_login'>
                <div className='cll_login_div'>
                    <p className='cll_user_name'>
                        <span>
                            用户名：
                        </span>
                        <input type='text' onChange={(e)=>{
                            this.setState({
                               user_name:e.target.value
                            })
                        }} placeholder='请输入用户名'></input>
                    </p>
                    <p className='cll_user_name'>
                        <span>
                            密码:
                        </span>
                        <input type='password' onChange={(e)=>{
                            this.setState({
                                user_pwd:e.target.value
                            })
                        }} placeholder='请输入密码'></input>
                    </p>
                    <p className='cll_p'>
                        <button className='cll_btn' onClick={this.logins.bind(this)}>登录</button>
                    </p>
                   
                    <p className='cll_zuce' onClick={this.zuce}>去注册</p>
                </div>
            </div>
        );
    }
    logins(){
        if(this.state.user_name&&this.state.user_pwd){
            request.post('/store/login',{
                body:{
                    user_name:this.state.user_name,
                    user_pwd:this.state.user_pwd
                }
            }).then(res=>{
                if(res.code === 1){
                     Cookies.set('token',res.token)
                    this.props.history.push('/home');
                }else{
                    alert(res.msg);
                }
            })
        }else{
            alert('请输入全部信息');
        }
        
    }
    zuce=()=>{
        this.props.history.push('/register');
    }
}

export default login;