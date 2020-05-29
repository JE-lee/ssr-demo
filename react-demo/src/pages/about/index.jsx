import React from 'react'
import { withRouter } from 'react-router-dom'

const CurrentPath = withRouter(function CurrentPath(props) {
  return <div>currnet path { props.location.pathname }</div>
})

export default function(props) {
  return (
    <>
      <CurrentPath></CurrentPath>
      <div>This is about page!</div>
    </>
  )
}