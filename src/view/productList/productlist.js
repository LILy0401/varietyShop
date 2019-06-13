import React, { Component } from 'react';
import style from './productlist.module.css';
import Acommodity from '../../components/Acommodity/acommodity';
import {Checkbox} from 'antd-mobile';
import Headers from '../../components/Header/headers';
class productlist extends Component {
    render() {
        return (
            <div className={style.productlist}>
                <Headers title="添加平台商品" titleT='申请列表'></Headers>
                <div className={style.product_section}>
                    <div className={style.product_inp}>
                        <input type='text' placeholder='请输入商品名称'></input>
                    </div>
                    <Acommodity type='yes'></Acommodity>
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