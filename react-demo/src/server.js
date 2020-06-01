// server render script

import Koa from 'koa'
import { createServerApp } from './create-app'
import ReactDomServer from 'react-dom/server'
import koaStatic from 'koa-static'
import path from 'path'
import fs from 'fs'

const app = new Koa()
app.use(koaStatic(path.resolve(__dirname, '../build'), { index: false }))

let htmlTpl = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8')

app.use(async (ctx) => {
  const url = ctx.url
  console.log('url', url)
  const { state, root } = await createServerApp(url)
  const html = ReactDomServer.renderToString(root)
  // 元素
  let body = htmlTpl.replace(/<div\s*id="root">.*<\/div>/, `
    <div id="root">
      ${ html }
    </div>
  `)
  // initial state
  body = body.replace(/<script\s*data-type="state">.*<\/script>/, `
    <script>
      window.__INITIAL__STATE__ = ${ JSON.stringify(state) }
    </script>
  `)
  ctx.body = body
})

app.listen(8080)
console.log('listen in 8080')