import React, { Component } from 'react';
import style from './classify.module.css';
import Dialog from '../../components/DialogCom/dialog';
import request from '../../utiles/http';
import Cookies from 'js-cookie';


class classify extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:['取消','添加'],
            isShow:false
        }
    }
    componentWillMount(){
        request.post('/store/goods/cat.list',{
            headers:{
                authrization:Cookies.get('token')
            },
            body:{
                store_id:'7fd2189e7e33562e060f58e0b88035cf'
            }
            
        })
        .then(res=>{
            console.log(res);
        })
    }

    render() {
        return (
            <div className={style.classfiy}>
               {/*
                dialog
                title:弹框信息,
                btn:数组，dialog的取消和确定按钮
                change:是判断显示隐藏,以及返回信息,是个函数
             */}
                <Dialog type='ss' title='填写分类名称'change={this.change} btn={this.state.arr} isShow={this.state.isShow}>
                    <input type='text' placeholder='请输入'></input>
                </Dialog>
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
                <div className={style.classfiy_footer} onClick={this.addType.bind(this)}>
                        添加分类
                </div>
            </div>
        );
    }
    addType(){
        this.setState({
            isShow:true
        })
    }
    change=(isShow,msg)=>{
        console.log(msg)
        this.setState({
            isShow:isShow
        })
    }
    componentDidMount(){
       
    }
}

export default classify;