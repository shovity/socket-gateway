const http = require('http')
const express = require('express')

const PORT = 3000

const app = express()
const server = http.createServer(app)

app.get('/', (req, res, next) => {
    return res.json({ message: 'i am node socket getway app' })
})

server.listen(PORT, () => {
    console.log('node socket getway listening at 3000')
})