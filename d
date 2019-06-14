[1mdiff --cc src/view/shopSetting/shopSetting.js[m
[1mindex b81dc82,38f1b06..0000000[m
[1m--- a/src/view/shopSetting/shopSetting.js[m
[1m+++ b/src/view/shopSetting/shopSetting.js[m
[36m@@@ -141,13 -113,8 +130,18 @@@[m [mclass ShopSetting extends Component [m
                      <div className={style.shop_bn_su}>[m
                          <img src='./1.gif' alt='加载失败' title='店铺banner'></img>[m
                      </div>[m
[32m++<<<<<<< HEAD[m
[32m +                    <div className="photo">[m
[32m +                        {[m
[32m +                            this.state.dataImg.map((ele,index)=>{[m
[32m +                                return  <UploadPicture key={index} num='3' getMsg={this.getMsg} title='上传logo' url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='big'></UploadPicture>[m
[32m +                            })[m
[32m +                        }[m
[32m +                   </div>[m
[32m++=======[m
[32m+                     <UploadPicture title='上传banner' url='/upload?store_id=7fd2189e7e33562e060f58e0b88035cf' type='big'></UploadPicture>[m
[32m+ [m
[32m++>>>>>>> cfp[m
                  </div>[m
                  <div className={style.shop_bot}>[m
                      <ul>[m
