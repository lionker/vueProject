import Vue from 'vue'
import moment from 'moment'

// 日期格式化的过滤器
/* Vue.filter('date-format', function(value, formatStr){
  return moment(value).format(formatStr || 'YYYY-MM-DD HH:mm:ss')
}) */
                                          // 默认值方式传入
Vue.filter('date-format', function(value, formatStr='YYYY-MM-DD HH:mm:ss'){
  return moment(value).format(formatStr)
})
