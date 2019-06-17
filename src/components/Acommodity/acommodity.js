import React, { Component } from 'react';
import style from './acommodity.module.css';
class acommodity extends Component {
 
    render() {
        return (
            <>
                {
                    this.props.data.map((ele,index) => {
                        return <div className={style.product_every} key={index}>
                           
                            <div className={style.product_every_div} onClick={(e)=>this.getDetail(e,ele)} >
                                {
                                    this.props.type === 'yes' ? <input type='checkbox'></input> : ''
                                }
                                <img src={ele.cart_image} alt='banner'></img>
                                <span>{ele.goods_name}</span>
                                <span onClick={this.deletPro.bind(this)}>删除</span>
                            </div>
                            <div className={style.product_every_text}>
                                <p>
                                    <span>商品编号:</span>
                                    <span>{ele.serial_number}</span>
                                </p>
                                <p>
                                    <span>商号:</span>
                                    <span>121212121212</span>
                                </p>
                            </div>
                        </div>
                    })
                }
            </>
        );
    }
    deletPro(){
        
    }
    getDetail(e,ele){
        this.props.getEle(ele);
    }
}

export default acommodity;