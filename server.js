const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

io.on('connection', (socket) => {
    console.log('User Connected');

    socket.on('disconnect', () => {
        console.log('User Disconnected');
    })
})

server.listen(3000, () => {
    console.log('listening on *:3000');
})