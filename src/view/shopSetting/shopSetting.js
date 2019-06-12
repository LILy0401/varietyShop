import React, { Component } from 'react';
import { connect } from 'dva';
import style from './shopSetting.module.css'
import { DatePicker, List } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
    // set the minDate to the 0 of maxDate
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr} ${timeStr}`;
}

// If not using `List.Item` as children
// The `onClick / extra` props need to be processed within the component
const CustomChildren = ({ extra, onClick, children }) => (
    <div
        onClick={onClick}
        style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
    >
        {children}
        <span style={{ float: 'right', color: '#888' }}>{extra}</span>
    </div>
);

class ShopSetting extends Component {
    state = {
        startValue: null,
        time: now,
        endValue: null,
        endOpen: false,
        weeks: [{
            week: '周一',
            id: '1',
            flag: true
        }, {
            week: '周二',
            id: '2',
            flag: true
        }, {
            week: '周三',
            id: '3',
            flag: true
        }, {
            week: '周四',
            id: '4',
            flag: true
        }, {
            week: '周五',
            id: '5',
            flag: true
        }, {
            week: '周六',
            id: '6',
            flag: false
        }, {
            week: '周日',
            id: '7',
            flag: false
        }]
    };
    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    };
 
    componentWillMount(){
        console.log('事不过三，其实一次就够了，只是你不张心罢了')
        console.log(this)
    }
   
    render() {
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div className={style.shop_wrap}>
                <div className={style.shop_header}>
                    <span className='iconfont iconjiantou4'></span>
                    <span className={style.shop_dp}>店铺设置</span>
                    <span></span>
                </div>
                <p className={style.shop_logo}>店铺LOGO</p>
                <div className={style.shop_kuang}>
                    <span className='iconfont icon_add iconicon_add'></span>
                    <p className={style.shop_kuang2}>上传logo</p>
                </div>
                <p className={style.shop_bn}><b>店铺banner</b><span>（1-3张）</span></p>
                <div className={style.shop_bn_box}>
                    <div className={style.shop_bn_su}>
                        <img src='./1.gif' alt='加载失败' title='店铺banner'></img>
                    </div>
                    <div className={style.shop_bn_su}>
                        <span className='iconfont icon_add iconicon_add'></span>
                        <p>上传banner</p>
                    </div>
                </div>
                <div className={style.shop_bot}>
                    <ul>
                        <li><span>店铺名称</span><input type='text' placeholder='请输入店铺名称'></input></li>
                        <li><span>起送价格</span><input type='text' placeholder='请输入起送价格'></input></li>
                        <li><span>配 送 费</span><input type='text' placeholder='请输入配送费'></input></li>
                        <li className={style.shop_check}>
                            <p>营业周期</p>
                            <div>
                                {
                                    this.state.weeks && this.state.weeks.map((item, i) => {
                                        return <label name='a' key={item.id}><input type='checkbox' defaultChecked={item.flag} id='a'></input><span>{item.week}</span> </label>
                                    })
                                }
                            </div>

                        </li>
                        <li className={style.shop_zzdq}>
                            <span>营业时间</span>
                            <div> <span>08:00 <i className='iconfont iconjiantou-copy-copy'></i></span> 至 <span>22:00 <i className='iconfont iconjiantou-copy-copy'></i></span></div>
                        </li>
                       <li className={style.shop_ps}>
                            <List className="date-picker-list" style={{ backgroundColor: 'white' ,fontSize:'.28rem' ,marginLeft:0 }}>
                            <DatePicker
                                mode="time"
                                minuteStep={2}
                                use12Hours
                                value={this.state.time}
                                onChange={time => this.setState({ time })}
                            >
                                <List.Item arrow="horizontal">配送时效</List.Item>
                            </DatePicker>
                           
                            </List>
                        </li> 
                        <li className={style.shop_last}>
                            <p>首页风格</p>
                            <div>
                                <dl>
                                    <dd>
                                        <img src='./2.gif'></img>
                                    </dd>
                                    <dt><input type='radio' name='a'></input></dt>
                                </dl>
                                <dl>
                                    <dd>
                                    <img src='./2.gif'></img>
                                    </dd>
                                    <dt><input type='radio' name='a'></input></dt>
                                </dl>
                            </div>
                        </li>
                    </ul>
                    <button>保存</button>
                </div>
            </div>
        )
    }
  
}
export default ShopSetting