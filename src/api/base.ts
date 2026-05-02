import axios from 'axios'
import { showDialog } from 'vant'
const API_BASE_URL = '/api'

const instance = axios.create({
  baseURL: API_BASE_URL,
})

instance.interceptors.response.use((response) => {
  const { data, code, msg } = response?.data || {}
  if (code !== 0) {
    showDialog({
      message: msg,
    }).then(() => {
      // todo 关闭弹窗
    })
    return Promise.reject(msg)
  }
  return data
})

export default instance
