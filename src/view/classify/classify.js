import React, { Component } from 'react';
import style from './classify.module.css';

class classify extends Component {
    render() {
        return (
            <div className={style.classfiy}>
                <div className={style.classfiy_box}>
                    <div className={style.classify_div}>
                        <p className={style.classfiy_p_o}>
                            <span>分类名称：水果</span>
                            <span>添加时间：2018-06-21</span>
                        </p>
                        <p className={style.classfiy_p_t}>
                            <span className='iconfont iconicon_compile'></span>
                            <span className='iconfont iconshanchu'></span>
                        </p>
                    </div>
                </div>
                
                <div className={style.classfiy_footer}>
                        添加分类
                </div>
            </div>
        );
    }
}

export default classify;