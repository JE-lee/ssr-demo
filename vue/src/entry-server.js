// server render
import createApp from './create-app'

export default context => {
  // check url
  let { router, store, app } = createApp()
  const url = context.url
  const { fullPath } = router.resolve(url).route
  if(fullPath !== url){
    return Promise.reject({ url: fullPath })
  }

  // navigate to url
  router.push(url)
  return new Promise((resolve, reject) => {
    router.onReady(() => {
      const matchComponents = router.getMatchedComponents()
      if (!matchComponents.length) {
        return reject({ code: 404 })
      }

      // wait async data
      return Promise.all(matchComponents.map(({ asyncData }) => asyncData && asyncData({ route: router.currentRoute, store })))
        .then(() => {
          // window.__INITIAL_STATE__
          context.state = store.state
          resolve(app)
        }).catch(reject)
    })
  })

}
