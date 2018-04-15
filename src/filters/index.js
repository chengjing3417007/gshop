import Vue from 'vue'
import moment from 'moment'
Vue.filter('dateString', function (value, format = 'YYY-MM-DD') {
  return moment(value).format(format)
})
