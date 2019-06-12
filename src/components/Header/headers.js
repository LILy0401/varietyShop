import React, { Component } from 'react';
import style from './headers.module.css';
class headers extends Component {
    render() {
        return (
            <div className={style.put_header}>
                <span className="iconfont iconjiantou4"></span>
                <p>{this.props.title}</p>
                <span>{this.props.titleT}</span>
            </div>
        );
    }
}

export default headers;