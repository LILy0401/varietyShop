import React, { Component } from 'react';
import './pdetaillist.css';
class pdetaillist extends Component {
    render() {
        return (
            // 商品详情里面的list
            <div className='cll_productD_con'>
                <div className='cll_product_list'>
                    <span></span>
                    <span>{this.props.title}</span>
                    <span className='iconfont iconjiantou2'></span>
                </div>
            </div>
        );
    }
}

export default pdetaillist;