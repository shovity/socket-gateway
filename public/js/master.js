document.addEventListener('DOMContentLoaded', () => {
    const socket = io.connect('', {
        query: {token: 'sho'}
    })

    socket.on('message', m => {
        console.log('receive message from server ' + m)
        
    })
})