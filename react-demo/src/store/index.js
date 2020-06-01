import { createStore, applyMiddleware } from 'redux'
import { nowWeatherReducer } from './now-weather'
import thunkMiddleware from 'redux-thunk'

export function generateStore(preloadStore) {
  return createStore(
    nowWeatherReducer,
    preloadStore,
    applyMiddleware(thunkMiddleware)
  )
}