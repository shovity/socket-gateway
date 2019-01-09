const amqp = require('amqplib/callback_api')

const DELAY_RETRY_CONNECT = 3000

const rabbit = {
    connection: null,
    channel: null,
}

rabbit.createChannel = (done) => {
    rabbit.connection.createChannel((error, channel) => {
        if (error) {
            return console.error('create default channel error', error)
        }
        
        // mount default channel
        rabbit.channel = channel
        done && done(channel)
    })
}

rabbit.connect = (done) => {
    amqp.connect('amqp://rabbitmq', (error, connection) => {
        if (error) {
            setTimeout(() => {
                rabbit.connect(done)
            }, DELAY_RETRY_CONNECT)
            console.error(error)
            return console.info('connect to rabbit error, retry in 3s')
        }

        // mount connection
        rabbit.connection = connection

        // create default channel
        rabbit.createChannel(() => {
            done && done(connection)
        })
    })
}

module.exports = rabbit