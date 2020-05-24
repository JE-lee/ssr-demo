import vuex, {Store} from 'vuex'
import { getNowWeather } from '../services/api'
import Vue from 'vue'

Vue.use(vuex)

export default function createStore(){
  return new Store({
    state: {
      nowWeather: {
        basic: {},
        now: {},
        update: {}
      }
    },
    actions: {
      fetchNowWeather({ state }){
        return getNowWeather().then(res => {
          state.nowWeather = res.HeWeather6[0]
        })
      }
    }
  })
}