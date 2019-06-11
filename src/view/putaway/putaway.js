import React, { Component } from 'react';
import style from './putaway.module.css';

class putaway extends Component {
    render() {
        return (
            <div className={style.putaway_box}>
                
                <div className={style.put_header}>
                    <span className="iconfont iconjiantou4"></span>
                    <p>添加商品</p>
                    <span>添加平台商品</span>
                </div>
                <div className={style.put_con}>
                    
                    <div className={style.put_commodity}>
                        
                        <div className={style.put_p}>
                            <span>商品名称</span>
                            <input type='text' placeholder='选择商品名称'></input>
                        </div>
                        <div className={style.put_p}>
                            <span>选择分类</span>
                            <input type='text' placeholder='选择分类'></input>
                            <span className='iconfont iconjiantou-copy-copy'></span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default putaway;