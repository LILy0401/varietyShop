import React, { Component } from 'react';
import style from './shopSetting.module.css'
import request from '../../utiles/http'
import { DatePicker, List } from 'antd-mobile';

import UploadPicture from '../../components/Uploadpicture/uploadpicture';

import 'antd-mobile/lib/date-picker/locale/en_US';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
// const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
    // set the minDate to the 0 of maxDate
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

class ShopSetting extends Component {
    state = {
        shopName: '',
        addPrice: '',
        psf: '',
        indexstyle: '0',
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
        }],
        dataImg:['1']
    };
    getMsg=(data,num)=>{
        
        if(this.state.dataImg.length<num){
            this.setState((state)=>{
           
                let arr = [...state.dataImg]
                arr.length<3 && arr.push('1')
                return {
                    dataImg:arr
                }
            })
        }
        console.log(data,'我在这里');
    }
    onChange = (field, value) => {
        this.setState({
            // [field]: value,
        });
    }
    shopNameFn(e) {
        this.setState({
            shopName: e.target.value
        })
    }
    addPriceFn(e) {
        this.setState({
            addPrice: e.target.value
        })
    }
    psfFn(e) {
        this.setState({
            psf: e.target.value
        })
    }
    // 选择布局样式
    radioFn(e) {
        this.setState({
            indexstyle: e.target.value
        })
    }
    componentWillMount() {
    }
    saveFn() {
        request.post('/store/decorate', {
            body: {
                banner: '1T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC,1T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC',
                store_id: '7fd2189e7e33562e060f58e0b88035cf',
                store_name: this.state.shopName,
                brand_name: this.state.shopName,
                main_image: '1T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC',
                contact_number: '13612344321,021-12336754',
                business_time: '周一-周五 09:00-20:00,周六-周日 10:00-22:00',
                indexstyle_id: this.state.indexstyle,
                delivery_fee: this.state.psf,
                logo: 'base64'
            },
            headers: {
                authrization: 'asdascxv123asd'
            }
        }).then(res => console.log(res))
    }

    render() {
        // const { startValue, endValue, endOpen } = this.state;
        return (
            <div className={style.shop_wrap}>
                <div className={style.shop_header}>
                    <span className='iconfont iconjiantou4'></span>
                    <span className={style.shop_dp}>店铺设置</span>
                    <span></span>
                </div>
                <p className={style.shop_logo}>店铺LOGO</p>
                
                    <UploadPicture title='上传banner' url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='small'></UploadPicture>
                   
                
                <p className={style.shop_bn}><b>店铺banner</b><span>（1-3张）</span></p>
                <div className={style.shop_bn_box}>
                    <div className={style.shop_bn_su}>
                        <img src='./1.gif' alt='加载失败' title='店铺banner'></img>
                    </div>
                    <div className="photo">
                        {
                            this.state.dataImg.map((ele,index)=>{
                                return  <UploadPicture key={index} num='3' getMsg={this.getMsg} title='上传logo' url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='big'></UploadPicture>
                            })
                        }
                   </div>
                </div>
                <div className={style.shop_bot}>
                    <ul>
                        <li><span>店铺名称</span><input type='text' onChange={(e) => this.shopNameFn(e)} placeholder='请输入店铺名称'></input></li>
                        <li><span>起送价格</span><input type='text' onChange={(e) => this.addPrice(e)} placeholder='请输入电话号'></input></li>
                        <li><span>配 送 费</span><input type='text' onChange={(e) => this.psf(e)} placeholder='请输入配送费'></input></li>
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
                            <List className="date-picker-list" style={{ backgroundColor: 'white', fontSize: '.28rem', marginLeft: 0 }}>
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
                                <label name='a'>
                                    <dl>
                                        <dd>
                                            <img src='./2.gif' alt='单列图文'></img>
                                        </dd>
                                        <dt><input onChange={(e) => this.radioFn(e)} type='radio' value='0' name='a'></input></dt>
                                    </dl>
                                </label>
                                <label name='a'>
                                    <dl>
                                        <dd>
                                            <img src='./2.gif' alt='双列图文'></img>
                                        </dd>
                                        <dt><input onChange={(e) => this.radioFn(e)} type='radio' value='1' name='a'></input></dt>
                                    </dl>
                                </label>
                            </div>
                        </li>
                    </ul>
                    <button onClick={this.saveFn.bind(this)}>保存</button>
                </div>
            </div>
        )
    }
}
export default ShopSetting