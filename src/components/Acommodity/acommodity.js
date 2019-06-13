import React, { Component } from 'react';
import style from './acommodity.module.css';
class acommodity extends Component {
    render() {
        
        return (
            <div className={style.product_every}>
                
                <div className={style.product_every_div}>
                    {
                        this.props.type === 'yes'?<input type='checkbox'></input>:''
                    }
                    <img src='./1.jpg' alt='banner'></img>
                    <span>苗掌柜香辣小鱼干</span>
                    <span className='iconfont iconjiantou'></span>
                </div>
                <div className={style.product_every_text}>
                    <p>
                        <span>商品编号:</span>
                        <span>121212121212</span>
                    </p>
                    <p>
                        <span>商号:</span>
                        <span>121212121212</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default acommodity;