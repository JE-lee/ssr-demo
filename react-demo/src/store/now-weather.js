import { FETCHED_NOW_WEATHER } from './action-types'
import { getNowWeather } from '../services/api'
import pick from 'lodash/pick'

const defaultNow = {
  basic: {},
  now: {},
  update: {}
}
export function nowWeatherReducer(state = defaultNow, action) {
  switch(action.type) {
    case FETCHED_NOW_WEATHER:
    default:
      return Object.assign({}, state, pick(action, ['basic', 'now', 'update']))
  }
}

export function fetchNowWeather() {
  return dispatch => {
    return getNowWeather().then(res => {
      dispatch({
        type: FETCHED_NOW_WEATHER,
        ...res.HeWeather6[0]
      })
    })
  }
}