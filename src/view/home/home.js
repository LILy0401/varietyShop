import React, { Component } from 'react';
import style from './home.module.css';
import { connect } from 'dva';
// import {setRouters} from '../../routes/index';
class home extends Component {
    render() {
        return (
            <div className={style.home}>
                <div className={style.header}>
                    <div className={style.header_p}>
                        <span className="iconfont iconsousuo1"></span>
                        <p>海海淀区社区派送配送中淀区社区派送配送中</p>
                        <span className="iconfont iconkaihuaidaxiaobiaoqing"></span>
                    </div>
                    <div className={style.header_div}>
                        <p className={style.header_div_p}>
                            <span></span>
                        </p>
                        <p className={style.messge}>
                            <span>13800002222</span>
                            <span>高级管理员</span>
                        </p>
                    </div>
            
                </div>
                <div className={style.section}>
                    <div className={style.section_tit}>
                        <span></span>
                        <span>指尖杂货铺</span>
                    </div>
                    <div className={style.content_list}>
                        <dl className={style.list_dl}>
                            <dt>
                                <span className='iconfont icon-xiaolu'></span>
                            </dt>
                            <dd>接单</dd>
                        </dl>
                        <dl className={style.list_dl}>
                            <dt>
                                <span className='iconfont iconxinshangbiaoqing'></span>
                            </dt>
                            <dd>扫码</dd>
                        </dl>
                        <dl className={style.list_dl}>
                            <dt>
                                <span className='iconfont iconicon_gather_fill'></span>
                            </dt>
                            <dd>退款</dd>
                        </dl>
                        <dl className={style.list_dl}>
                            <dt>
                                <span className='iconfont iconfangwu'></span>
                            </dt>
                            <dd>店铺设置</dd>
                        </dl>
                        <dl className={style.list_dl}>
                            <dt>
                                <span className='iconfont iconicon_workset'></span>
                            </dt>
                            <dd>分类管理</dd>
                        </dl>
                        <dl className={style.list_dl}>
                            <dt>
                                <span className='iconfont icon-xiaolu'></span>
                            </dt>
                            <dd>添加商品</dd>
                        </dl>
                        <dl className={style.list_dl}>
                            <dt>
                                <span className='iconfont icon-zhangyu'></span>
                            </dt>
                            <dd>商品列表</dd>
                        </dl>
                        <dl className={style.list_dl}>
                            <dt>
                                <span className='iconfont iconicon_compile'></span>
                            </dt>
                            <dd>收益报表</dd>
                        </dl>
                       
                    </div>
                </div>
            </div>
        );
    }
    addCount=()=>{
        this.props.dispatch({type:'m_home/addCount'})
    }
}
let state=(state)=>{
    
    return{
        count:state.m_home.count
        
    }
}
export default connect(state)(home);