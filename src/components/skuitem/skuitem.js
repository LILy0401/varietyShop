import React, { Component } from 'react'

export default class Skuitem extends Component {
    render() {
        return (
            <div>
                <div>
                <input type="text" placeholder='设置SKU类型'></input><span onClick={()=>{this.removeFn()}}> - </span>
                </div>
                <div>
                    <p>
                        <input type="text" placeholder='设置属性'></input><span> - </span>
                    </p>
                    <p>
                        <input type="text" placeholder='设置属性'></input><span> + </span>
                    </p>
                </div>
            </div>
        )
    }
    removeFn(){
        console.log('删除');
    }
}