let express = require('express')
let chalk = require('chalk')
let { createBundleRenderer } = require('vue-server-renderer')
let fs = require('fs')
let path = require('path')
const resolve = file => path.resolve(__dirname, file)

let app  = express(),
  template = fs.readFileSync(resolve('./template.html'),'utf8')
let render = createBundleRenderer(require('./dist-server/vue-ssr-server-bundle.json'),{
    template,
    clientManifest: require('./dist-client/vue-ssr-client-manifest.json'),
    // recommended for performance
    runInNewContext: false
  })

const serve = path => express.static(resolve(path), {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    index: false
  })


app.use(serve('./dist-client'))

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  let url = req.url,
    context = { url }
  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if(err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }
  render.renderToString(context, (err, html) => {
    if(err) handleError(err)
    res.end(html)
  })

})

const PORT = 4000
app.listen(PORT,() => {
  console.log(chalk.green(`listening at port ${PORT}`))
})
