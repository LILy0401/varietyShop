import React, { Component } from 'react';
import style from './classify.module.css';
import Dialog from '../../components/DialogCom/dialog';
import request from '../../utiles/http';
import Cookies from 'js-cookie';
import ClassifyDOm from '../../components/ClassifyCom/classifycom';
import Connent from  '../../utiles/router'
class classify extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:['取消','添加'],
            isShow:false,
            cat_name:'',
            data:[]
        }
    }
    componentWillMount(){
        this.getClassList();
    }
    getClassList(){
        let tokens = Cookies.get('token');
        request.post('/store/goods/cat.list',{
            headers:{
                'authorization':tokens
            },
            body:{
                store_id:'7fd2189e7e33562e060f58e0b88035cf'
            }
        })
        .then(res=>{
            // console.log(res.result)
            this.setState({
                data:res.result
            })
        })
    }
    render() {
        return (
            <div className={style.classfiy}>
                <Dialog type='ss' title='填写分类名称'change={this.change} btn={this.state.arr} isShow={this.state.isShow}>
                    <input onChange={(e)=>{
                        this.setState({
                            cat_name:e.target.value
                        })
                    }} type='text' placeholder='请输入'></input>
                </Dialog>
                <div className={style.classfiy_box}>
                   <ClassifyDOm data={this.state.data} getCat_id={this.getcat_id}></ClassifyDOm>
                </div>
                <div className={style.classfiy_footer} onClick={this.addType.bind(this)}>
                        添加分类
                </div>
            </div>
        )
    }
    getcat_id=(cat_id,type,cat_name)=>{
        console.log(type)
        if(type === 'delet'){
            let tokens = Cookies.get('token');
            request.delete('/store/goods/cat.delete',{
                headers:{
                    'authorization':tokens,
                },
                body:{
                    cat_id:cat_id
                }
            }).then(res=>{
                console.log(res);
            })
        }else{
           
            this.props.history.push({pathname:'/putaway',query:{cat_id:cat_id,cat_name:cat_name}})
        }
      
    }
    addType(){
        this.setState({
            isShow:true
        })
    }
    change=(isShow,data)=>{
        
        this.setState({
            isShow:isShow
        })
        if(data.msg === '确定'){
            let tokens = Cookies.get('token');
            if(this.state.cat_name){
                request.put('/store/goods/cat.add',{
                    headers:{
                        'authorization':tokens,
                        'content-type':'application/json'
                    },
                    body:{
                        store_id:'7fd2189e7e33562e060f58e0b88035cf',
                        cat_name:this.state.cat_name,
                    }
                }).then(res=>{

                    if(res.code === 1){
                        this.getClassList();
                    }
                })
            }
           
        }   
       
    }
    componentDidMount(){
       
    }
}

export default Connent(classify);