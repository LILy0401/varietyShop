import React, { Component } from 'react';
import uuid from 'uuid/v4'
import {CreateShop} from '../../services'
import './create.css'
import Connent from  '../../utiles/router'
class createstore extends Component {
    state={
        sfz:'',
        shopName:'',
        fl:'',
        flList:''
    }
    overFn=()=>{
        let {sfz,shopName,fl,flList} = this.state;
        console.log(sfz,shopName,fl,flList)
        CreateShop({
            idcard:sfz,
            store_name:shopName,
            cat:fl,
            sub_cat:flList,
            cat_id:uuid(),
            uid:uuid()
        }).then(res=>{
            if(res.code===1){
                localStorage.setItem('store_id',res.store_id)
                alert('创建成功！')
                this.props.history.push('/home');
            }else{
                alert('参数传递有误')
            }
        })
    }
    sfzFn(e){
        let num = e.target.value
        this.setState((state)=>{
            return {sfz:num}
        })
    }
    shopNameFn(e){
        let num = e.target.value
        this.setState((state)=>{
            return {shopName:num}
        })
    }
    flFn(e){
        let num = e.target.value
        this.setState((state)=>{
            return {fl:num}
        })
    }
    flListFn(e){
        let num = e.target.value
        this.setState((state)=>{
            return {flList:num}
        })
    }
    render() {
        return (
            <div className='cfp_create_wrap'>
                <h3>创建店铺</h3>
                <ul>
                    <li><input type='text' onChange={(e)=>{this.sfzFn(e)}} placeholder='请输入您的身份证'></input></li>
                    <li><input type='text' onChange={(e)=>{this.shopNameFn(e)}} placeholder='请输入您的店铺名称'></input></li>
                    <li><input type='text' onChange={(e)=>{this.flFn(e)}} placeholder='请输入您的分类'></input></li>
                    <li><input type='text' onChange={(e)=>{this.flListFn(e)}} placeholder='请输入您的分类列表'></input></li>
                    <li><button onClick={this.overFn}>完成</button></li>
                </ul>
            </div>

        );
    }
}

export default Connent(createstore);