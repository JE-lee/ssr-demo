import Koa from 'koa'
// server render script
import createApp from './create-app'
import ReactDomServer from 'react-dom/server'

const app = new Koa()

app.use(async (ctx) => {
  const html = ReactDomServer.renderToString(createApp(true))
  ctx.body = html
})

app.listen(8080)
console.log('listen in 8080')