import React, { Component } from 'react'
import './index.css'
export default class Selects extends Component {
    state = {
        clas: 'cfp_select_content',
        initData: '',
        data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00']
    }
    selectFn() {
        this.setState((state) => {
            return { clas: state.clas === 'cfp_select_content' ? 'cfp_select_content cfp_select_active' : 'cfp_select_content' }
        })
    }
    changeFn(i) {
        this.props.deliveryFn && this.props.deliveryFn(i)
        this.setState({
            initData: i
        })
    }
    componentWillMount() {
        let som = this.props.arr;
        this.setState({
            data: this.props.arr ? this.props.arr : this.state.data,
            initData: som ? som[0] : this.state.data[0]
        })
    }
    render() {
        return (
            <div className='cfp_select_wrap' onClick={this.selectFn.bind(this)}>
                <p><span>{this.state.initData}</span><i className='iconfont iconjiantou-copy-copy'></i></p>
                <ul className={this.state.clas}>
                    {this.state.data.map((item, i) => <li key={i} onClick={this.changeFn.bind(this, item)}>{item}</li>)}
                </ul>
            </div>
        )
    }
}
