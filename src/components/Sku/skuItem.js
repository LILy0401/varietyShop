import React, { Component } from 'react';
import './sku.css';
class skuItem extends Component {
    state={
        
    }
    addItem=()=>{

    }
    render() {
        return (
            <div className='cll_skuitem'>
                <input type='text' placeholder='请输入分类'></input>
               
                <span onClick={this.addItem}>+</span>
               
            </div>
        );
    }
}

export default skuItem;