import React,{Component} from 'react';
import style from './shopSetting.module.css'
class ShopSetting extends Component {
    render(){
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
                        <li>店铺名称<input></input></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default ShopSetting