/*
功能：包含n个间接更新状态的方法的对象
*/

import { 
  reqShops, 
  reqCategorys, 
  reqAddress,
  reqUser,
  reqLogout,
  reqGoods,
  reqRatings,
  reqInfo
 } from '../api'

import { 
  RECEIVE_SHOPS, 
  RECEIVE_CATEGORYS, 
  RECEIVE_ADDRESS, 
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO

} from './mutation-types'

export default {

  // 获取地址的异步action
  async getAddress({ commit, state }) {
    console.log('getAddress')
    const { longtitude, latitude } = state

    // 1. 发送异步ajax请求
    const result = await reqAddress(longtitude, latitude)
    // 2. 根据提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })   // 传递给mutation的是包含数据的对象, 而不是数据本身
    }
  },

  // 获取分类列表的异步action
  async getCategorys({ commit, state }) {
    console.log('getCategorys')
    // 1.发送异步请求
    const result = await reqCategorys()
    // 2. 根据提交mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,  categorys )
    }
  },

  //  获取商家列表的异步action
  async getShops({ commit, state }) {
    console.log('getShops')
    const { longtitude, latitude } = state

    // 1.发送异步ajax请求
    const result = await reqShops({ longtitude, latitude })

    // 2. 根据提交mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS,  shops )
    }
  },

  // 记录user的同步action
  saveUser({commit}, user) {
      commit(RECEIVE_USER, user) 
  },

  // 获取用户信息的异步action
  async getUser ({commit}) {
    const result = await reqUser()
    if (result.code === 0) {
      const user = result.data
      commit(RESET_USER, user)
    }
  },

  // 退出登录的异步actions
  async logout ({commit}) {
    const result = await reqLogout()
    if(result===0){
      commit(RESET_RSER)
    }
  },

  // 异步获取商家信息 
  async getShopInfo({commit}) {
    const result = await reqInfo()
    if(result.code===0){
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  // 异步获取商家评价列表 
  async getShopRatings({commit}) {
    const result = await reqRatings()
    if(result.code===0){
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({commit}) {
    const result = await reqGoods()
    if(result.code===0){
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  }
}