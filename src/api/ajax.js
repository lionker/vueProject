/*
用来发送ajax请求的函数模块
函数的返回值是promise
包装axios

自己封装了promise
  1. 希望异步得到的是reponse中的data数据
  2. 统一处理请求错误
 */

import axios from 'axios'

// 1. 这种方式直接返回,需要在外部处理错误
/* export default function ajax(url, data = {}, type = 'GET') {
  // 判断请求方式
  if (type === 'GET') {
    return axios.get(url, { // 配置对象
      params: data // 这里包含所有query请求参数的对象
    })
  } else {
    return axios.post(url, data)
  }
} */

// 2. 再封装Promise,直接在这里处理统一错误
export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    // 判断请求方式
    if (type === 'GET') {
      promise = axios.get(url, { // 配置对象
        params: data // 这里包含所有query请求参数的对象
      })
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      // 成功了, 调用resolve
      // 不直接返回response,而是返回response.data便于处理
      resolve(response.data)
    }).catch(error => {
      // 出错了, 调用reject
      // reject(error)
      // 统一处理请求错误
      alert('请求出错: ' + error.message)
    })

  })
}