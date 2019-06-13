import React, { Component } from 'react'
import './upload.css'
export default class Upload extends Component {
    render() {
        return (
            <div className='cfp_log_wrap'>
                <input type='file' className='cfp_log_filed'></input>
                <div className='cfp_log_as'>
                    <span className='iconfont icon_add iconicon_add'></span>
                    <b>上传logo</b>
                </div>
            </div>
        )
    }
}
