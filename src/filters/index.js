import Vue from 'vue'
// import moment from 'moment' 
// import format from 'date-fns'   // 比moment包小
import format from 'date-fns/format'   // 比上面引入方式包更小

// 日期格式化的过滤器
/* Vue.filter('date-format', function(value, formatStr){
  return moment(value).format(formatStr || 'YYYY-MM-DD HH:mm:ss')
}) */
// 默认值方式传入
/* Vue.filter('date-format', function(value, formatStr='YYYY-MM-DD HH:mm:ss'){
  return moment(value).format(formatStr)
}) */

// date-fns 优化
Vue.filter('date-format', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return format(value, formatStr)
})
