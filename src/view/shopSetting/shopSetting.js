import React, { Component } from 'react';
import style from './shopSetting.module.css'
import { Register } from '../../services'
import { DatePicker, List } from 'antd-mobile';
import Select from '../../components/selects'
import UploadPicture from '../../components/Uploadpicture/uploadpicture';
import Checkboxs from '../../components/Checkboxs/checkbox'
import 'antd-mobile/lib/date-picker/locale/en_US';
import { open,close } from '../../components/Loading/loading';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
if (minDate.getDate() !== maxDate.getDate()) {
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

class ShopSetting extends Component {
    state = {
        shopName: '',
        addPriceFn: '',
        psfFn: '',
        indexstyle: '0',
        startValue: null,
        time: now,
        endValue: null,
        endOpen: false,
        as1: ['第一组', '相信自己', '50分钟'],
        business_time:'',
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
        dataImg:['1'],
        wokeTime:'',
        logUrl:''
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
    getMsg1=(data,num)=>{
        this.setState((state)=>{
            return {
                logUrl:data.url[0].url
            }
        })
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
    addPriceFnFn(e) {
        this.setState({
            addPriceFnFn: e.target.value
        })
    }
    psfFn(e) {
        this.setState({
            psfFn: e.target.value
        })
    }
    // 选择布局样式
    radioFn(e) {
        this.setState({
            indexstyle: e.target.value
        })
    }
    deliveryFn=(i)=>{
        this.setState({
            business_time : this.state.business_time +','+i
        })
     }
     deliverysFn=(i)=> {
        this.setState({
            business_time : this.state.business_time +','+i
       })
    }
    checkboxFN=(i)=>{
        console.log(i)
    }
    componentWillMount() {
    }
    saveFn() {
        console.log(this.state.business_time)
        Register({
            banner:this.state.dataImg,
            store_id: '7fd2189e7e33562e060f58e0b88035cf',
            store_name: this.state.shopName,
            brand_name: this.state.shopName,
            main_image: '1T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC',
            contact_number: '13612344321,021-12336754',
            business_time: this.state.business_time,
            indexstyle_id: this.state.indexstyle,
            delivery_fee: this.state.psfFn,
            logo: this.state.logUrl
        }).then(res => { console.log(res) })
    }
   
 
    render() {
        return (
            <div className={style.shop_wrap}>
                <div className={style.shop_header}>
                    <span className='iconfont iconjiantou4'></span>
                    <span className={style.shop_dp}>店铺设置</span>
                    <span></span>
                </div>
                <p className={style.shop_logo}>店铺LOGO</p>
                
                    <UploadPicture title='上传banner'  getMsg={this.getMsg1}  url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='small'></UploadPicture>
                   
                
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
                        <li><span>起送价格</span><input type='text' onChange={(e) => this.addPriceFnFn(e)} placeholder='请输入起送价格'></input></li>
                        <li><span>配 送 费</span><input type='text' onChange={(e) => this.psfFn(e)} placeholder='请输入配送费'></input></li>
                        <li className={style.shop_check}>
                            <p>营业周期</p>
                            <div>
                                {
                                    this.state.weeks && this.state.weeks.map((item, i) => {
                                        return <label name='a' key={item.id}>
                                            <Checkboxs checkboxFN={this.checkboxFN.bind(this,item.week)}></Checkboxs>
                                            <span>{item.week}</span> </label>
                                    })
                                }
                            </div>
                        </li>
                        <li className={style.shop_zzdq}>
                            <span>营业时间</span>
                            <div> <Select deliveryFn={this.deliveryFn} /> 至 <Select deliveryFn={this.deliverysFn}/>  </div>
                        </li>
                        <li className={style.shop_ps}>
                            <List className="date-picker-list" style={{ backgroundColor: 'white', fontSize: '.28rem', marginLeft: 0}}>
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