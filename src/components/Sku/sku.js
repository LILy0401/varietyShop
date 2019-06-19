import React, { Component } from 'react';
import './sku.css';
import SkuItem from './skuItem.js';
class sku extends Component {
    addSkuItem(flag){
        console.log(flag);
        if(flag){
            
        }
    }
    render() {
        let { flag } = this.props;
        return (
            <div className='cll_sku'>
                <p className='cll_sku_p'>
                    <input type='text' placeholder='请输入你要添加的类型'></input>
                    <span onClick={this.addSkuItem.bind(this,flag)}>{flag?'+':'-'}</span>
                </p>
                <div className='cll_skuItem_div'>
                    <SkuItem></SkuItem>
                    <SkuItem></SkuItem>
                </div>
            </div>
        );
    }

}

export default sku;