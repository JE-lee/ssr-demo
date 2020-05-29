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
import { store } from './store/index'

const App = withRouter(function App(props){
  const branch = matchRoutes(routes, props.location.pathname)
  const promises = branch.map(({ route, match}) => {
    const component = route.component ? route.component.WrappedComponent : null
    return component ? component.asyncData() : Promise.resolve()
  })
  Promise.all(promises).then(res => console.log('res', res))
  return <>{ props.children }</>
})

export default function createApp(isServer){
  const UseRouter = isServer ? StaticRouter : Router
  return (
    <UseRouter>
      <Provider store={ store }>
        <React.StrictMode>
          <App>
            { renderRoutes(routes) }
          </App>
        </React.StrictMode>
      </Provider>
    </UseRouter>
  )
}