import React, { Component } from 'react';
import style from './putaway.module.css';
import Headers from '../../components/Header/headers'
class putaway extends Component {
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
                                    <input type='text' placeholder='选择商品名称'></input>
                                </p>
                            
                            </div>
                            <div className={style.put_p_t}>
                                <span>选择分类</span>
                                <p>
                                    <input type='text' placeholder='选择分类'></input>
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
                                    <input type='text' placeholder='请选择商品售价'></input>
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
                        <div className={style.photo}>
                            <div className={style.photo_div}>
                                <img src='./1.jpg'></img>
                                <span className='iconfont iconshanchu2'></span>
                            </div>
                            <div className={style.photo_div}>
                                <img src='./1.jpg'></img>
                                <span className='iconfont iconshanchu2'></span>
                            </div>
                            <div className={style.photo_div}>
                                <img src='./1.jpg'></img>
                                <span className='iconfont iconshanchu2'></span>
                            </div>
                            <div className={style.photo_div_add}>
                                
                                <span className='iconfont iconplus-add'></span>
                                <span>上传图片</span>
                            </div>
                        </div>
                        <p className={style.com_picture}>购物车图(必填)</p>
                        <div className={style.photo}>

                            <div className={style.photo_div_add}>
                                
                                <span className='iconfont iconjia'></span>
                                <span>上传图片</span>
                            </div>
                        </div>
                        <p className={style.com_picture}>商品详情</p>
                        <div className={style.photo}>
                            
                            <div className={style.photo_div_add_big}>
                                
                                <span className='iconfont iconjia'></span>
                                <span>上传图片</span>
                            </div>
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

                                <div className={style.photo_div_add}>
                                    
                                    <span className='iconfont iconplus-add'></span>
                                    <span>上传图片</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={style.sku}>
                        <p>
                            <span className='iconfont iconicon_add'> SKU</span>
                        </p>
                    </div>
                    <p className={style.footer_p}>
                        申请上架
                    </p>
                </div>
            </div>
        );
    }
}

export default putaway;