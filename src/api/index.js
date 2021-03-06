/*
根据接口编写接口请求函数
包含n个接口请求函数的模块
函数的返回值是promise对象
 */
import ajax from './ajax'
// const BASE = 'http://localhost:5000'
const BASE = '/api'  // 引入在config的proxyTable代理配置的端口

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longtitude, latitude)  => ajax(BASE+`/position/${latitude},${longtitude}`)


// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqCategorys = ()  => ajax(BASE + '/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = ({longtitude, latitude})  => ajax(BASE + '/shops', {longtitude, latitude}) 

// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE+'/search_shops', {geohash, keyword})

// [6、用户名密码登陆](#6用户名密码登陆)<br/>
// export const reqPwdLogin = (user)  => ajax(BASE + '/login_pwd', user, 'POST')
// export const reqPwdLogin = ({name, pwd, captcha})  => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')
export const reqPwdLogin = (name, pwd, captcha)  => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')

// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone)  => ajax(BASE + '/sendcode', {phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin = (phone, code)  => ajax(BASE + '/login_sms', {phone, code}, 'POST')

// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUser = ()  => ajax(BASE + '/userinfo')

// [10、用户登出](#10用户登出)<br/>
export const reqLogout = ()  => ajax(BASE + '/logout')


// 商家信息moock接口;   不加BASE(/api)代理就不识别拦截
export const reqGoods = () => ajax('/goods')
export const reqRatings = () => ajax('/ratings')
export const reqInfo = () => ajax('/info')

