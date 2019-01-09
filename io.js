const socketio = require('socket.io')

const io = socketio()

// authentication middleware
io.use((socket, next) => {
    
    console.log(socket.handshake.query);
    
    next()
})

io.on('connection', socket => {
    console.log('a user connected')


    socket.on('disconnect', () => {
        console.log('a user disconnected')
    })
})

setInterval(() => {
   io.emit('message', Date.now()) 
}, 1000);

module.exports = io


