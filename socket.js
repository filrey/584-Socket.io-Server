let app = require('http').createServer(); // create HTTP server
let io = require('socket.io')(app, { path: '/socket.io' }); // bind Socket to HTTP server
app.listen(3000); // listen on port 3000
console.log('Listening for connections on port 3000');
io.on('connection', function (socket) {
    console.log('Socket connected');
    socket.emit('fromServer', { id: 'Hello' }); // send message fromServer to client

    socket.on('fromClient', function (data) { // listen for fromClient message
        console.log('Message from client: ' + data.id);
        socket.emit('fromServer2', { id: 'How are you?' }); // send message fromServer to client
    });
    socket.on('fromClient2', function (data) { // listen for fromClient message
        console.log('Message from client: ' + data.id);
    });   
});
