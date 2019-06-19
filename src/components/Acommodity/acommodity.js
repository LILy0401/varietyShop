import React, { Component } from 'react';
import style from './acommodity.module.css';
import Checkboxs from '../../components/Checkboxs/checkbox';
class acommodity extends Component {
    checkboxFN=(check)=>{
       console.log(check);
    }
    render() {
        return (
            <>
                {
                    this.props.data.map((ele,index) => {
                        return <div className={style.product_every} key={index}>
                           
                            <div className={style.product_every_div}>
                                {
                                    this.props.type === 'yes' ?<Checkboxs checkboxFN={this.checkboxFN.bind(this,ele.index)}></Checkboxs>: ''
                                }
                                <img src={ele.cart_image} alt='banner'></img>
                                <span onClick={(e)=>this.getDetail(e,ele)} >{ele.goods_name}</span>
                                <span onClick={(e)=>this.deletPro(e,ele.goods_id)}>删除</span>
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
    deletPro(e,goods_id){
        e.stopPropagation();
        this.props.getEle(goods_id,'delet');
    }
    getDetail(e,goods_id){
        e.stopPropagation();
        this.props.getEle(goods_id,'go');
    }
}

export default acommodity;