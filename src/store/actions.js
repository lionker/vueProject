/*
功能：包含n个间接更新状态的方法的对象
*/

import { reqShops, reqCategorys, reqAddress } from '../api'

import { RECEIVE_SHOPS, RECEIVE_CATEGORYS, RECEIVE_ADDRESS } from './mutation-types'

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
      commit(RECEIVE_ADDRESS, { address })
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
      commit(RECEIVE_CATEGORYS, { categorys })
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
      commit(RECEIVE_SHOPS, { shops })
    }
  }
}