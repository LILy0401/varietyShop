import React, { Component } from 'react';
import './pdetaillist.css';
class pdetaillist extends Component {
    render() {
        return (
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