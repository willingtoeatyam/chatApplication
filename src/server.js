const express = require('express');

const app = express();

const http = require('http').Server(app);

const io = require('socket.io');

const PORT = 4000;

const socket = io(http);

socket.on('connection', (socket) => {
    console.log('User Connected');
});

socket.on('chat message', (msg) =>{
    console.log('message: '+ msg);
    //broadcast the message to everyone bar the sender
    socket.broadcast.emit('received', {message: msg});
});

http.listen(PORT, () =>{
    console.log(`Connected on port ${PORT}`)
})
