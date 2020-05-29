import { createStore, applyMiddleware } from 'redux'
import { nowWeatherReducer } from './now-weather'
import thunkMiddleware from 'redux-thunk'

export const store = createStore(
  nowWeatherReducer,
  applyMiddleware(thunkMiddleware)
)

export const dispatch = (...rest) => store.dispatch(...rest)