import Vue from 'vue'
import App from './App.vue'
import createRouter from './router/index'
import createStore from './store/index'

export default function(registerHook) {
  const router = createRouter()
  const store = createStore()
  if (typeof registerHook === 'function') {
    registerHook(router, store)
  }
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}