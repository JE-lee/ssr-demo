import axios from 'axios'

axios.interceptors.response.use(res => {
  return res.data
})

export function getNowWeather(){
  const url = 'https://free-api.heweather.net/s6/weather/now?location=auto_ip&key=eab55f33222b4105ae3ebf602a3a0aad'
  return axios.get(url)
}