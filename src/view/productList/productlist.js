import React, { Component } from 'react';
import style from './productlist.module.css';
import Acommodity from '../../components/Acommodity/acommodity';
import {Checkbox} from 'antd-mobile';
import Headers from '../../components/Header/headers';
import Cookie from 'js-cookie';
import request from '../../utiles/http';
import Connent from  '../../utiles/router'
class productlist extends Component {
    state={
        data:[]
    }
    componentDidMount(){

        request.post('/store/goods/list',{
            headers:{
                'authorization':Cookie.get('token')
            },
            body:{
                store_id:'7fd2189e7e33562e060f58e0b88035cf'
            }
        })
        .then(res=>{
            if(res.code === 1){
                this.setState({
                    data:res.result
                })
            }
        })
    }
    getEle=(ele)=>{
        this.props.history.push({pathname:'/productDetail',query:{ele:ele}})
    }
    render() {
        return (
            <div className={style.productlist}>
                <Headers title="添加平台商品" titleT='申请列表'></Headers>
                <div className={style.product_section}>
                    <div className={style.product_inp}>
                        <input type='text' placeholder='请输入商品名称'></input>
                    </div>
                    <Acommodity getEle={this.getEle} data={this.state.data} type='yes'></Acommodity>
                </div>
                <div className={style.product_footer}>
                    <p className={style.allChecked}>
                        <Checkbox></Checkbox>
                        <span>全选</span>
                    </p>
                    <p>
                        下架
                    </p>
                    <p>
                        上架
                    </p>
                </div>
            </div>
        );
    }
}
export default Connent(productlist);