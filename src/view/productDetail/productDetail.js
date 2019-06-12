import React, { Component } from 'react';
import './productDetail.css';
import Headers from '../../components/Header/headers';
import PdetailList from '../../components/PdetailList/pdetaillist';
class productDetail extends Component {
    render() {
        return (
            <div className='cll_productDetail'>
                <Headers title="商品详情"></Headers>
                <PdetailList title="订单信息"></PdetailList>
            </div>
        );
    }
}

export default productDetail;