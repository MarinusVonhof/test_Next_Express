const fs = require('fs');
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const srv = express();
  const srvHtdocs = express();
  srv.use("/htdocs", srvHtdocs); // mount the sub-app

  srvHtdocs.get("/", (req, res) => {
    let src = fs.readFileSync("./htdocs/traditional.html").toString("utf8");
    res.send(src);
  })
  srvHtdocs.use("/", express.static("./htdocs")); // verwijs naar img, style enz.

/*  srv.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })*/

  srv.all('*', (req, res) => {
    return handle(req, res)
  })

  srv.listen(port, (err) => {
    if (err) throw err
    console.log(`> Express ready on http://localhost:${port}`)
  })
})
