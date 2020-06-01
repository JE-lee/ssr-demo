import React from 'react'
import { withRouter } from 'react-router'
import { matchRoutes } from 'react-router-config'
import routes from './routes/index'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  StaticRouter
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { generateStore } from './store/index'

let firstMounted = false // 是否首次挂载
const isClient = typeof window !== 'undefined' // 在浏览器
const isSSR = !!process.env.REACT_APP_SERVER_RENDER // 在服务端
// const isDev = !!process.env.REACT_APP_DEVELOPMENT // 开发环境
const isProd = !!process.env.REACT_APP_PRODUCTION // 生产环境

function hleAsyncData(store, path) {
  const branch = matchRoutes(routes, path)
  const promises = branch.map(({ route }) => {
    const component = route.component ? route.component.WrappedComponent : null
    return component ? component.asyncData(store) : Promise.resolve()
  })
  return Promise.all(promises).then(res => {
    console.log('res', res)
    return res
  })
}

const wrapApp = (store) => withRouter(function App(props){
  const jsx = <>{ props.children }</>
  // 生产模式下第一次挂载
  if ((isProd && !firstMounted) || isSSR) {
    firstMounted = true
    return jsx
  }
  hleAsyncData(store, props.location.pathname)
  return jsx
})

const wrapStore = store => {
  const App = wrapApp(store)
  return <Provider store={ store }>
    <React.StrictMode>
      <App>
        { renderRoutes(routes) }
      </App>
    </React.StrictMode>
  </Provider>
}

function createApp(store, location) {
  console.log('create app')
  const UseRouter = isSSR ? StaticRouter : Router
  return (
    <UseRouter location={location}>
      { wrapStore(store) }
    </UseRouter>
  )
}

export function createClientApp() {
  let preloadState = null
  if (isClient) {
    preloadState = window.__INITIAL__STATE__
  }
  const store = generateStore(preloadState)
  return createApp(store)
}

export async function createServerApp(url) {
  const store = generateStore()
  await hleAsyncData(store, url)
  return {
    state: store.getState(),
    root: createApp(store, url)
  }
}