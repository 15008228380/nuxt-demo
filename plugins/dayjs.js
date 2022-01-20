import Vue from 'vue'
import dayjs from 'dayjs'

//自定义过滤器  {{ 表达式 | 过滤器 }}
Vue.filter('date', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(value).format(format)
})
