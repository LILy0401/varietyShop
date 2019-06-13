import React, { Component } from 'react';
import style from './putaway.module.css';
import Headers from '../../components/Header/headers'
import Uploadpicture from '../../components/Uploadpicture/uploadpicture';
class putaway extends Component {
    constructor(props){
        super(props);
        this.state={
            goods_name:'',
            cat:'',
            price:''
        }
    }
    render() {
        return (
            <div className={style.putaway_box}>
               <Headers title="添加商品" titleT='添加平台商品'></Headers>
                <div className={style.put_div}>
                    <div className={style.put_con}>
                        <div className={style.put_commodity}>
                            
                            <div className={style.put_p}>
                                <span>商品名称</span>
                                <p>
                                    <input type='text' value={this.goods_name} onChange={(e)=>{
                                        this.setState({
                                            goods_name:e.target.value
                                        })
                                    }} placeholder='选择商品名称'></input>
                                </p>
                            
                            </div>
                            <div className={style.put_p_t} onClick={this.goClassify}>
                                <span>选择分类</span>
                                <p>
                                    <input type='text' onChange={(e)=>{
                                        this.setState({
                                            cat:e.target.value
                                        })
                                    }} placeholder='选择分类'></input>
                                </p>
                                
                                <span className='iconfont iconjiantou-copy-copy'></span>
                            </div>
                        
                        </div>
                        <div className={style.put_type}>
                            <div className={style.put_p_t_power}>
                                <span>重量</span>
                                <p>
                                    <input type='text' placeholder='请输入重量'></input>
                                </p>
                                <span>
                                    克
                                    <i className='iconfont iconjiantou-copy-copy'></i>
                                </span>
                            </div>
                            <div className={style.put_p}>
                                <span>商品售价</span>
                                <p>
                                    <input onChange={(e)=>{
                                        this.setState({
                                            price:e.target.value
                                        })
                                    }} type='text' placeholder='请选择商品售价'></input>
                                </p>
                            
                            </div>
                            <div className={style.put_p}>
                                <span>商品条码</span>
                                <p>
                                    <input type='text' placeholder='请输入商品条码（选填）'></input>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={style.put_content}>
                        <p className={style.com_picture}>商品图片</p>
                        <div className="photo">
                             {/* type:big|small */}
                            <Uploadpicture title='上传图片' url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='small'></Uploadpicture>
                       
                        </div>
                       
                        <p className={style.com_picture}>购物车图(必填)</p>
                        <div className={style.photo}>
                            <Uploadpicture title='上传图片' url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='small'></Uploadpicture>
                            
                        </div>
                        <p className={style.com_picture}>商品详情</p>
                        <div className={style.photo}>
                       
                        <Uploadpicture title='上传图片' url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='big'></Uploadpicture>
                        </div>
                        <div className={style.put_con}>
                       
                        <div className={style.put_type}>
                            <div className={style.put_p_t_power}>
                                <span>重量</span>
                                <p>
                                    <input type='text' placeholder='请输入重量'></input>
                                </p>
                                <span>
                                    克
                                    <i className='iconfont iconjiantou-copy-copy'></i>
                                </span>
                            </div>
                            <div className={style.put_p}>
                                <span>商品售价</span>
                                <p>
                                    <input type='text' placeholder='请选择商品售价'></input>
                                </p>
                            
                            </div>
                            <div className={style.put_p}>
                                <span>商品条码</span>
                                <p>
                                    <input type='text' placeholder='请输入商品条码（选填）'></input>
                                </p>
                            </div>
                            <p className={style.com_picture}>购物车图(必填)</p>
                            <div className={style.photo}>

                            <Uploadpicture title='上传banner' url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='small'></Uploadpicture>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={style.sku}>
                        <p>
                            <span className='iconfont iconicon_add'> SKU</span>
                        </p>
                    </div>
                    <p className={style.footer_p} onClick={this.putaway}>
                        申请上架
                    </p>
                </div>
            </div>
        );
        
    }
    goClassify=()=>{
        this.props.history.push('/classify');
    }
    putaway=()=>{
        fetch('/store/goods/create',{
            method:'POST',
            header:{
                authorization:'asddf'
            },
            store_id:'7fd2189e7e33562e060f58e0b88035cf',
            goods_name:this.state.goods_name,
            cat:this.state.cat,
            price:this.state.price,
            image:'',
            detail:''
        })
        .then((res)=>res.json())
        .then(res=>{
            console.log(res);
        })
    }
}

export default putaway;