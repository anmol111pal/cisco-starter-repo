const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(55455);
const wsServer = new webSocketServer({ httpServer: server });

wsServer.on('request', function (request) {
    console.log('Establishing a new connection with client');
    var connection = request.accept(null, request.origin);
    connection.sendUTF(new Date().getTime());
});