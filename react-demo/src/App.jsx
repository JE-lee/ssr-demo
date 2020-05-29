import React from 'react'
import { withRouter } from 'react-router'
import { matchRoutes } from 'react-router-config'
import routes from './routes/index'

export default withRouter(function App(props){
  const branch = matchRoutes(routes, props.location.pathname)
  const promises = branch.map(({ route, match}) => {
    const component = route.component ? route.component.WrappedComponent : null
    return component ? component.asyncData() : Promise.resolve()
  })
  Promise.all(promises).then(res => console.log('res', res))
  return <>{ props.children }</>
})