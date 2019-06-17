import React, { Component } from 'react';
import style from './shopSetting.module.css'
import { Register } from '../../services'
import { DatePicker, List } from 'antd-mobile';
import Select from '../../components/selects'
import UploadPicture from '../../components/Uploadpicture/uploadpicture';
import Checkboxs from '../../components/Checkboxs/checkbox'
import 'antd-mobile/lib/date-picker/locale/en_US';
// import { open,close } from '../../components/Loading/loading';
import Cookies from 'js-cookie'
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
if (minDate.getDate() !== maxDate.getDate()) {
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}
let arr = []

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
        as1: ['第一组', '123', 'asd'],
        business_time: '',
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
        dataImg: ['1'],
        wokeTime: '',
        imgD:'',
        logUrl: '',
        store_id:'',
        url:'',
        main_image:'',
        weekArr:[],
        flag:false
    };
    getMsg = (data, num) => {
            this.setState((state) => {
                return {
                    main_image:data.url[0].url
                }
            })
    }
    getMsg1 = (data, num) => {
        this.setState((state) => {
            return {
                logUrl: data.url[0].url
            }
        })
        localStorage.setItem('logUrl',data.url[0].url)
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
        localStorage.setItem('shopName',e.target.value)
    }
    addPriceFnFn(e) {
        this.setState({
            addPriceFn: e.target.value
        })
        localStorage.setItem('addPriceFn',e.target.value)
    }
    psfFn(e) {
        this.setState({
            psfFn: e.target.value
        })
        localStorage.setItem('psfFn',e.target.value)
    }
    // 选择布局样式
    radioFn(e) {
        console.log(e.target.value)
        this.setState({
            indexstyle: e.target.value
        })
    }
    deliveryFn = (i) => {
        this.setState({
            business_time: this.state.business_time + ',' + i
        })
    }
    deliverysFn = (i) => {
        this.setState({
            business_time: this.state.business_time + ',' + i
        })
    }
    checkboxFN = (i) => {
        let {weekArr}  = this.state;
        let index = weekArr.findIndex(item=>item===i)
        console.log(index)
        if(index==-1){
            weekArr.push(i);
        }else{
            weekArr.splice(index,1);
        }
        localStorage.setItem('week',weekArr)  
    }
    componentWillMount(){
        this.setState((state)=>{
            return{
                psfFn:localStorage.getItem('psfFn')?localStorage.getItem('psfFn'):'',
                addPriceFn:localStorage.getItem('addPriceFn')?localStorage.getItem('addPriceFn'):'',
                shopName:localStorage.getItem('shopName')?localStorage.getItem('shopName'):'',
                logUrl:localStorage.getItem('logUrl')?localStorage.getItem('logUrl'):''
            }
        },()=>{
            // console.log(this.state.psfFn,this.state.addPriceFn,this.state.shopName)
        })
        this.setState((state)=>{
            let naws = localStorage.getItem('store_id');
            return {
                store_id:naws
            }
        })
        this.setState(state=>{
            return {
                url:'/upload?store_id='+state.store_id
            }
        })
    }
    saveFn() {
        Register({
            banner:this.state.dataImg,
            store_id: this.state.store_id,
            store_name: this.state.shopName,
            brand_name: this.state.shopName,
            main_image: this.state.main_image,
            contact_number: '13612344321,021-12336754',
            business_time: this.state.business_time,
            indexstyle_id: this.state.indexstyle,
            delivery_fee: this.state.psfFn,
            logo: this.state.logUrl
        }).then(res => { 
            if(res.code===1){
                console.log(res.result)
            }else{
                alert('参数有误！')
            }
         })
    }
    backFn(){
        window.history.back(-1); 
    }
    render() {
        return (
            <div className={style.shop_wrap}>
                <div className={style.shop_header}>
                    <span className='iconfont iconjiantou4' onClick={this.backFn}></span>
                    <span className={style.shop_dp}>店铺设置</span>
                    <span></span>
                </div>
                <p className={style.shop_logo}>店铺LOGO</p>
                <UploadPicture title='上传banner' getMsg={this.getMsg1} url={this.state.url} type='small'></UploadPicture>
                <p className={style.shop_bn}><b>店铺banner</b><span>（1-3张）</span></p>
                <div className={style.shop_bn_box}>
                    <div className={style.shop_bn_su}>
                        <img src='./1.gif' alt='加载失败' title='店铺banner'></img>
                    </div>
                    <div className="photo">
                        {
                            this.state.dataImg.map((ele, index) => {
                                return <UploadPicture key={index} num='3' getMsg={this.getMsg} title='上传logo' url={this.state.url} type='big'></UploadPicture>
                            })
                        }
                    </div>
                </div>
                <div className={style.shop_bot}>
                    <ul>
                        <li><span>店铺名称</span><input type='text' onChange={(e) => this.shopNameFn(e)}  value={this.state.shopName} placeholder='请输入店铺名称'></input></li>
                        <li><span>起送价格</span><input type='text' onChange={(e) => this.addPriceFnFn(e)}  value={this.state.addPriceFn} placeholder='请输入起送价格'></input></li>
                        <li><span>配 送 费</span><input type='text' onChange={(e) => this.psfFn(e)} value={this.state.psfFn} placeholder='请输入配送费'></input></li>
                        <li className={style.shop_check}>
                            <p>营业周期</p>
                            <div>
                                {
                                    this.state.weeks && this.state.weeks.map((item, i) => {
                                        return <label name='a' key={item.id}>
                                            <Checkboxs checkboxFN={this.checkboxFN.bind(this, item.week)}></Checkboxs>
                                            <span>{item.week}</span> </label>
                                    })
                                }
                            </div>
                        </li>
                        <li className={style.shop_zzdq}>
                            <span>营业时间</span>
                            <div> <Select deliveryFn={this.deliveryFn} /> 至 <Select deliveryFn={this.deliverysFn} />  </div>
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
                                        <dt><input onChange={(e) => this.radioFn(e)} checked={true} type='radio' value='0' name='a'></input></dt>
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

