/*
功能：包含n个直接更新状态的数据的方法的对象
*/

import { RECEIVE_SHOPS, RECEIVE_CATEGORYS, RECEIVE_ADDRESS } from './mutation-types'

export default {
  [RECEIVE_SHOPS] (state, shops) {
    console.log(shops)
    state.shops = shops
  },
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  }
}