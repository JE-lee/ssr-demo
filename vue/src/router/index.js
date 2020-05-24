import Router from 'vue-router'
import Now from '../pages/now.vue'
import Vue from 'vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Now
  },
  
]

export default function createRouter(){
  return new Router({
    mode: process.env.NODE_ENV === 'development' ? 'hash' : 'history',
    routes
  })
}