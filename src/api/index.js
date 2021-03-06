import ajax from './ajax'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAdress = (geohash) => ajax('/api/position/' + geohash)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodList = () => ajax('/api/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)latitude纬度，longitude经度
export const reqShopList = ({longitude, latitude}) => ajax('/api/shops', {longitude, latitude})

// [4、获取一次性验证码](#4获取一次性验证码)<br/>
// export const reqCaptcha = () => ajax('/api/captcha')

// [5、用户名密码登陆](#4用户名密码登陆)<br/>
export const loginPwd = ({name, pwd, captcha}) => ajax('/api/login_pwd', {name, pwd, captcha}, 'POST')

// [6、发送短信验证码](#5发送短信验证码)<br/>
export const sendCode = (phone) => ajax('/api/sendcode', {phone})

// [7、手机号验证码登陆](#6手机号验证码登陆)<br/>
export const loginSms = ({phone, code}) => ajax('/api/login_sms', {phone, code}, 'POST')

// [8、根据会话获取用户信息](#7根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax('/api/userinfo')

// mock数据的三个接口
export const reqShopGoods = () => ajax('/shopGoods') // 请求食品列表
export const reqShopRatings = () => ajax('/shopRatings') // 请求食品对应的所有评价
export const reqShopInfo = () => ajax('/shopInfo') // 请求食品详细信息
