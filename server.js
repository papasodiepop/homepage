const fs = require('fs')
const http = require('http')
const https = require('https')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))
app.enable('trust proxy')
app.use(function(req, res, next) {
    if (req.secure) {
        // https request, nothing to handle
        next()
    } else {
        // this is an http request, redirect to https
        res.redirect(301, 'https://' + req.headers.host + req.url)
    }
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.get('*', (req, res) => {
    res.redirect('https://' + req.headers.host + req.url)
})
const privateKey = fs.readFileSync(
    '/etc/letsencrypt/live/tomhornbuckle.xyz/privkey.pem',
    'utf8'
)
const certificate = fs.readFileSync(
    '/etc/letsencrypt/live/tomhornbuckle.xyz/cert.pem',
    'utf8'
)
const ca = fs.readFileSync(
    '/etc/letsencrypt/live/tomhornbuckle.xyz/chain.pem',
    'utf8'
)

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
}

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80')
})
httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443')
})
