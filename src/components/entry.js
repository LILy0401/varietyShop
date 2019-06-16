import React, { PureComponent } from 'react'
import request from '../utiles/request'
export default class Entry extends PureComponent {
    getFile=(e)=>{
        e.persist();
        // console.log(e.target.files)//打印出来是一个类数组 
        console.log(e.target.files[0])
    }
    render() {
        return (
            <div>
                {/* 这是将他上传到浏览器上了 */}
                <input type='file' onChange={this.getFile}></input>
            </div>
        )
    }
}
