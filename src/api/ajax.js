import axios from 'axios'

export default function ajax (url = '', data = {}, type = 'GET') {
  /* eslint-disable no-new */
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      let dataStr = ''
      // /login?name=xx&pwd=123
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr) {
        dataStr = dataStr.substr(0, dataStr.length - 1)
      }
      url += '?' + dataStr
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}
