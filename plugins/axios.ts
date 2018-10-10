import { AxiosRequestConfig } from 'axios'
import { apiUrl } from '~/config'

export default ({ $axios }) => {
  $axios.onRequest((config: AxiosRequestConfig) => {
    config.baseURL = apiUrl
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
}
