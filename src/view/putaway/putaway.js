import React, { Component } from 'react';
import style from './putaway.module.css';
import Headers from '../../components/Header/headers'
import Uploadpicture from '../../components/Uploadpicture/uploadpicture';
import Select from '../../components/selects/index.js';
import { open,close } from '../../components/Loading/loading';
import { openPoP } from '../../components/Popup/popup.js';
import Cookies from 'js-cookie';


class putaway extends Component {
    constructor(props){
        super(props);
        this.state={
            goods_name:'',
            cat:'',
            price:'',
            cat_id:'',
            dataImg:['1'],
            pro_image:'',
            weight:'2',
            gram:'克',
            code_bar:'',
            image:'',
            list:['克','千克','吨']
        }
    }
    componentDidMount(){

        if(this.props.history.location.query){
            let {cat_name,cat_id } =this.props.history.location.query;
          
            this.setState({
                cat:cat_name,
                cat_id:cat_id
            })
           
        }
       
        open();
        setTimeout(()=>{
            close()
        },1500)
    }
    getMsgDetail=(data)=>{
        this.setState({
            image:data.url[0].url
        })

    }
    getMsg=(data,num)=>{

        if(this.state.dataImg.length<num){
            this.setState((state)=>{
           
                let arr = [...state.dataImg]
                arr.length<3 && arr.push('1')
                return {
                    dataImg:arr
                }
            })
        }
    
        this.setState({
            pro_image:data.url[0].url
        })
    }
    getke(gram){
        this.setState({
            gram:gram
        })
    
    }
    render() {
        return (
            <div className={style.putaway_box}>
               <Headers title="添加商品" titleT='添加平台商品'></Headers>
                <div className={style.put_div}>
                    <div className={style.put_con}>
                        <div className={style.put_commodity}>
                            
                            <div className={style.put_p}>
                                <span>商品名称</span>
                                <p>
                                    <input type='text' value={this.state.goods_name} onChange={(e)=>{
                                    
                                       this.setState({
                                            goods_name:e.target.value
                                        })
                                    }} placeholder='选择商品名称'></input>
                                </p>
                            
                            </div>
                            <div className={style.put_p_t} onClick={this.goClassify}>
                                <span>选择分类</span>
                                <p>
                                    <input type='text' value={this.state.cat} onChange={(e)=>{
                                        this.setState({
                                            cat:e.target.value
                                        })
                                    }} placeholder='选择分类'></input>
                                </p>
                                
                                <span className='iconfont iconjiantou-copy-copy'></span>
                            </div>
                        
                        </div>
                        <div className={style.put_type}>
                            <div className={style.put_p_t_power}>
                                <span>重量</span>
                                <p>
                                    <input type='text' onChange={(e)=>{
                                        this.setState({
                                            weight:e.target.value
                                        })
                                    }}  placeholder='请输入重量'></input>
                                </p>
                                <Select deliveryFn={this.getke.bind(this)} arr={['克','千克','吨']}></Select>
                                
                            </div>
                            <div className={style.put_p}>
                                <span>商品售价</span>
                                <p>
                                    <input onChange={(e)=>{
                                        this.setState({
                                            price:e.target.value
                                        })
                                    }} type='text' placeholder='请选择商品售价'></input>
                                </p>
                            
                            </div>
                            <div className={style.put_p}>
                                <span>商品条码</span>
                                <p>
                                    <input type='text' onChange={(e)=>{
                                        this.setState({
                                            code_bar:e.target.value
                                        })
                                    }} placeholder='请输入商品条码（选填）'></input>
                                </p>
                            </div>
                        </div>
                    </div>
                     {/* type:big|small */}
                    <div className={style.put_content}>
                        <p className={style.com_picture}>商品图片</p>
                        <div className="photo">
                            
                             {
                                 this.state.dataImg.map((ele,index)=>{
                                     return  <Uploadpicture num='3' key={index} title='上传图片' getMsg={this.getMsg} url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='small'></Uploadpicture>
                                 })
                             }
                          
                        </div>
                    
                        <p className={style.com_picture}>购物车图(必填)</p>
                        <div className={style.photo}>
                           
                            <Uploadpicture title='上传图片' getMsg={this.getMsg} url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='small'></Uploadpicture>
                               
                        </div>
                        <p className={style.com_picture}>商品详情</p>
                        <div className={style.photo}>
                            
                            <Uploadpicture  title='上传图片' getMsg={this.getMsgDetail} url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='big'></Uploadpicture>
                             
                        </div>
                        <div className={style.put_con}>
                       
                        <div className={style.put_type}>
                            <div className={style.put_p_t_power}>
                                <span>重量</span>
                                <p>
                                    <input type='text' placeholder='请输入重量'></input>
                                </p>
                                <Select deliveryFn={this.getke.bind(this)} arr={['克','千克','吨']}></Select>
    
                            </div>
                            <div className={style.put_p}>
                                <span>商品售价</span>
                                <p>
                                    <input type='text' placeholder='请选择商品售价'></input>
                                </p>
                            
                            </div>
                            <div className={style.put_p}>
                                <span>商品条码</span>
                                <p>
                                    <input type='text' onChange={(e)=>{
                                        this.setState({
                                            code_bar:e.target.value
                                        })
                                    }} placeholder='请输入商品条码（选填）'></input>
                                </p>
                            </div>
                            <p className={style.com_picture}>购物车图(必填)</p>
                            <div className={style.photo}>

                                <Uploadpicture title='上传banner' getMsg={this.getMsg} url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='small'></Uploadpicture>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={style.sku}>
                        <p>
                            <span className='iconfont iconicon_add'> SKU</span>
                        </p>
                    </div>
                    <p className={style.footer_p} onClick={this.putaway}>
                        申请上架
                    </p>
                </div>
            </div>
        );
        
    }
    getke(arr){
        //克
        this.setState({
            gram:arr
        })
    }
    goClassify=()=>{
       openPoP(['添加分类'],(arr)=>{  
           if(arr === '添加分类'){
               setTimeout(()=>{
                    this.props.history.push('/classify')
               },1000)
              
           }
       });
    }
    putaway=()=>{
       
        let tokens = Cookies.get('token');
        if(this.state.goods_name&&this.state.cat&&this.state.price &&this.state.pro_image&&this.state.image){
            fetch('/store/goods/create',{
                headers:{
                    'authorization':tokens,
                    'content-type':'application/json'
                },
                method:'POST',
                body:JSON.stringify({
                    weight:this.state.weight+this.state.getke,
                    store_id:'7fd2189e7e33562e060f58e0b88035cf',
                    goods_name:this.state.goods_name, //名称
                    cat:this.state.cat, //分类
                    price:this.state.price, //价格
                    image:this.state.image, 
                    market_price:'100',
                    code_bar:this.state.code_bar,
                    detail:'又名波斯菜、赤根菜、鹦鹉菜等，属藜科菠菜属，一年生草本植物。植物高可达1米，根圆锥状，带红色，较少为白色，叶戟形至卵形，鲜绿色，全缘或',
                    cat_id:this.state.cat_id,
                    cart_image:this.state.pro_image, //购物车图
                    cost_price:'12', //成本价
                })
            })
            .then((res)=>res.json())
            .then(res=>{
                console.log(res);
                if(res.code === 1){
                    setTimeout(()=>{
                        this.props.history.push('/productList')
                    },1000)
                }
            })

        }else{
            alert('部分信息没有录入');
        }
    }
}

export default putaway;