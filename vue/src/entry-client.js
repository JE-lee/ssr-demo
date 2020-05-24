import createApp from './create-app'
import Vue from 'vue'
const target = process.env.VUE_APP_RUN_TARGET
const isDev = process.env.NODE_ENV === 'development'
console.log('isDev', isDev)
// beforeRouteUpdate
Vue.mixin({
  beforeRouteUpdate(to,from,next){
    const { asyncData } = this.$options
    if(asyncData){
      asyncData({ route:to, store }).then(next).catch(next)
    }else {
      next()
    }
  }
})

const registerBeforeResolve = (router, store) => {
  // register beforeResolve
  router.beforeResolve((to, from, next) => {
    let matchComponets = router.getMatchedComponents(to),
      asyncHooks = matchComponets.map(comp => comp.asyncData)
    // wait asyncData
    Promise.all(asyncHooks.map(hook => hook && hook({ route: to, store })))
      .then(next).catch(next)
  })
}

let { router, store, app } = createApp(isDev && registerBeforeResolve)
// replace state
if(window.__INITIAL_STATE__){
  store.replaceState(window.__INITIAL_STATE__)
}

if (!isDev) {
  registerBeforeResolve(router)
}

if (target === 'server') {
  router.onReady(registerBeforeResolve)
}

// mount in hydration
// 激活模式加载
app.$mount('#app')

