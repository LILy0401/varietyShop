import React, { Component } from 'react';
import './classifydom.css';
class classifycom extends Component {
    render() {
        return (
            <>
            {
                this.props.data.map((ele,index)=>{
                    return <div key={index} className="classify_div" onClick={this.checkedClass.bind(this,ele.cat_id,ele.cat_name)}>
                        <p className="classfiy_p_o">
                            <span>分类名称：{ele.cat_name}</span>
                            <span>添加时间：2018-06-21</span>
                        </p>
                        <p className="classfiy_p_t">
                            <span className='iconfont iconicon_compile'></span>
                            <span className='iconfont iconshanchu' onClick={(e)=>this.deletClass(e,ele.cat_id)}></span>
                        </p>
                    </div>
                })
            }
          </>
        );
    }
    checkedClass(cat_id,cat_name){
        this.props.getCat_id(cat_id,'check',cat_name)
    }
    deletClass=(e,cat_id)=>{
        e.stopPropagation();
        this.props.getCat_id(cat_id,'delet')
    }
}

export default classifycom;