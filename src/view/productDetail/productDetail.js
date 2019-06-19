import React, { Component } from 'react';
import './productDetail.css';
import Headers from '../../components/Header/headers';
import PdetailList from '../../components/PdetailList/pdetaillist';
import DialogCom from '../../components/DialogCom/dialog';
import request from '../../utiles/http';
import Cookies from 'js-cookie';
import Connent from  '../../utiles/router'
class productDetail extends Component {
    state={
        isShow:false,
        price:'',
    }
    amend(e,price){
        this.setState({
            price:price,
            isShow:true
        })
    }
    change=(isShow,data)=>{
    
        this.setState({
            isShow:isShow
        })
        if(data.msg === '确定'){
            request.post('/store/goods/edit',{
                headers:{
                    authorization:Cookies.get('token')
                },
                body:{
                    goods_id: this.props.history.location.query.ele.goods_id,
                    price:this.state.price
                }
            }).then(res=>{
                console.log(res);
            })
        }
    }
    render() {
        if(this.props.history.location.query){
            let state = this.props.history.location.query.ele;
        return (
            <div className='cll_productDetail'>
                <Headers title="商品详情"></Headers>
                <DialogCom change={this.change} title='修改分类' btn={['取消','修改']} isShow={this.state.isShow}>
                    <input type='text' value={this.state.price} onChange={(e)=>{
                        this.setState({
                            price:e.target.value
                        })
                    }}></input>
                </DialogCom>
                <div className='cll_productD_con'>
                    
                    <div className='cll_detail_box'>
                        <PdetailList title="商品信息"></PdetailList>
                        <div className='detail_box'>
                            <p>
                                <span>商品编号:</span>
                                <span>wfssFCGYsdwww</span>
                            </p>
                            <p>
                                <span>商品名称:</span>
                                <span>{state.goods_name}</span>
                            </p>
                            <p>
                                <span>商品条形码:</span>
                                <span>{state.code_bar}</span>
                            </p>
                            <p>
                                <span>商品标签:</span>
                                <span>{state.cat}</span>
                            </p>
                            <p>
                                <span>添加时间:</span>
                                <span>{state.create_time}</span>
                            </p>
                        </div>
                    </div>

                    <div className='cll_detail_box'>
                        <PdetailList title="价格信息"></PdetailList>
                        <div className='detail_box'>
                            <p className='market'>
                                <span>销售价:</span>
                                <span>{state.price}</span>
                                <span onClick={(e)=>this.amend(e,state.price)}>修改</span>
                            </p>
                            <p>
                                <span>市场价:</span>
                                <span>{state.market_price}</span>
                            </p>
                            <p>
                                <span>成本价:</span>
                                <span>wfssFCGYsdwww</span>
                            </p>
                        </div>
                    </div>
                    <div className='cll_detail_box'>
                        <PdetailList title="规格信息"></PdetailList>
                        <div className='detail_box'>
                            <p>
                                <span>重量:</span>
                                <span>wfssFCGYsdwww</span>
                            </p>
                            <p>
                                <span>库存:</span>
                                <span>wfssFCGYsdwww</span>
                            </p>
                        </div>
                    </div>
                    <div className='cll_detail_img'>
                        <p>商品大图</p>
                        <div className='cll_detail_img_div'>
                            <img src='./1.jpg'></img>
                            <img src='./1.jpg'></img>
                    
                        </div>
                    </div>
                    <div className='cll_detail_img'>
                        <p>购物车图</p>
                        <div className='cll_detail_img_div'>
                            <img src={state.cart_image}></img>
                        </div>
                    </div>
                    <div className='cll_detail_img'>
                        <p>商品详情</p>
                        <div className='cll_detail_img_div_big'>
                            <img src={state.image}></img>
                        </div>
                    </div>
                </div>
                
            </div>
        );
       }else{
           return (
               <h1>数据走失了</h1>
           )
       }
   
    }
}

export default Connent(productDetail);