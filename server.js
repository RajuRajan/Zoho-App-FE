const express = require('express')
const path = require('path')
const app = express()
const env = process.env.NODE_ENV || 'production'
const getPort = {test: 3001, staging: 3002, production: 3000}
const PORT = getPort[env]
function startServer() {
  // Static assets -> JS, CSS, Imgs, HTML
  app.use(express.static(path.join(__dirname, 'build')))
  app.use(express.static(path.join(__dirname, 'bg')))
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(express.static(path.join(__dirname, 'assets')))
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))
  // Start server on specified port -> "http://localhost:{PORT}"
  app.listen(PORT, () => console.info(`> Server started on :: http://localhost:${PORT} 🚀`))
}
startServer()