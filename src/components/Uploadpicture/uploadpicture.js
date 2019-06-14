import React, { Component } from 'react';
import './uploadpicture.css';


class uploadpicture extends Component {
    
    state = {
        src:null
    }
    div = '';
    render() {
        let {src} = this.state
        return (
            <>
                {

                    src&&src?<div className={this.props.type == 'big'?'photo_div_big':'photo_div'}>
                        <img src={this.state.src}></img>
                        <span className='iconfont iconshanchu2' onClick={this.delPicture}></span>
                    </div>: <div className={this.props.type == 'big'?'photo_div_add_big':'photo_div_add'}>                
                    <span className='iconfont iconplus-add'></span>
                    <span>{this.props.title}</span>
                    <input type='file' onChange={this.getUrl.bind(this)}></input>
                </div>
                }
            </>  
               
           
        );
    }
    delPicture(){
        console.log('删除图片');
    }
    getUrl(e){
        let { url } = this.props;
        e.persist();
        let FD =  new FormData()
        FD.append('img1',e.target.files[0]);
        fetch(url,{
            method:'POST',
            body:FD
        })
        .then(res=>res.json())
        .then((res)=>{
            if(res.code == 1){
                this.props.getMsg&&this.props.getMsg(res,this.props.num)
                this.setState(()=>{
                    return {src:res.url[0].url}
                })
            }
        })
    }

}

export default uploadpicture;
