import React, { Component } from 'react';
import style from './productlist.module.css';
import {Checkbox} from 'antd-mobile';
class productlist extends Component {
    render() {
        return (
            <div className={style.productlist}>
               
                <div className={style.product_section}>
                    <div className={style.product_inp}>
                        <input type='text' placeholder='请输入商品名称'></input>
                    </div>
                    <div className={style.product_every}>
                        <div className={style.product_every_div}>
                            <input type='checkbox'></input>
                            <img src='./1.jpg'></img>
                            <span>苗掌柜香辣小鱼干</span>
                            <span className='iconfont iconjiantou'></span>
                        </div>
                        <div className={style.product_every_text}>
                            <p>
                                <span>商品编号:</span>
                                <span>121212121212</span>
                            </p>
                            <p>
                                <span>重量:</span>
                                <span>40G</span>
                            </p>
                            <p>
                                <span>售价:</span>
                                <span>3.00</span>
                            </p>
                        </div>
                    </div>
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

export default productlist;