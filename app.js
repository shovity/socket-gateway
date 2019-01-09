const http = require('http')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const io = require('./io')

const PORT = 80

const app = express()
const server = http.createServer(app)

io.attach(server)


app.set('view engine', 'pug')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res, next) => {
    return res.render('home')
})

app.use((req, res, next) => {
    console.log(req.url);
    


    next()
})

app.get('/api/kick', (req, res, next) => {
    return res.json({ message: 'sending a kick' })
})

server.listen(PORT, () => {
    console.log('socket gateway app is running')
})