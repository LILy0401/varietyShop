import React, { Component } from 'react';
import style from './classify.module.css';
import Dialog from '../../components/DialogCom/dialog';
import request from '../../utiles/http';
import Cookies from 'js-cookie';
import ClassifyDOm from '../../components/ClassifyCom/classifycom';

class classify extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:['取消','确定'],
            isShow:false,
            cat_name:'',
            type:'',
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
                <Dialog title='填写分类名称'change={this.change} btn={this.state.arr} isShow={this.state.isShow}>
                    {
                        this.state.type !== 'delet'? <input onChange={(e)=>{
                            this.setState({
                                cat_name:e.target.value
                            })
                        }} type='text' placeholder='请输入'></input>:<p>您确定要删除吗?</p>
                    }
                   
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

        this.setState({
            type:type,
            cat_id:cat_id
        })
        if(type === 'delet'){
            this.setState({
                isShow:true
            })
            
        }else{
           
            this.props.history.push({pathname:'/putaway',query:{cat_id:cat_id,cat_name:cat_name}})
        }
      
    }
    addType(){
        this.setState({
            isShow:true,
            type:'check'
        })
    }
    change=(isShow,data)=>{
        
        this.setState({
            isShow:isShow
        })
        let tokens = Cookies.get('token');
        if(data.msg === '确定'){
            if(this.state.type === 'check'){
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
                }else{
                    alert('请输入信息');
                }
            }else{
                request.delete('/store/goods/cat.delete',{
                    headers:{
                        'authorization':tokens,
                    },
                    body:{
                        cat_id:this.state.cat_id
                    }
                }).then(res=>{
                    console.log(res);
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

export default classify;