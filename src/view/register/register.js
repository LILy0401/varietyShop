import React, { Component } from 'react';
import '../login/login.css';
import request from '../../utiles/http';
class register extends Component {
    state={
        user_name:'',
        user_pwd:'',
        phone:''
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
                    <p className='cll_user_name'>
                        <span>
                            手机号:
                        </span>
                        <input type='text' onChange={(e)=>{
                    
                            this.setState({
                                phone:e.target.value
                            })
                        }}  placeholder='请输入手机号'></input>
                    </p>
                    <p className='cll_p'>
                        <button className='cll_btn' onClick={this.setUser}>注册</button>
                    </p>
                

                </div>
            </div>
        );
    }
    setUser=()=>{ 
        let {user_name,user_pwd,phone} = this.state;
        if(user_name&&user_pwd&&phone){
            request.post('/store/register',{
                body:{
                    user_name:user_name,
                    user_pwd:user_pwd,
                    phone:phone
                }
            })
            .then(res=>{
                console.log(res);
                if(res.code === 1){
                    alert('注册成功')
                    setTimeout(()=>{
                        this.props.history.push('/home');
                    },1000)
                    
                }else{
                    alert('信息错误');
                }
               
            })
        }else{
            alert('请输入全部信息');
        }
    }
}

export default register;