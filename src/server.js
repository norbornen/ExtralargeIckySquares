// @ts-check

const net = require('net');
const hardy = require('./hardy');

const server = net.createServer((socket) => {
    socket.write('Echo server\r\n');

    socket.pipe(socket);

    socket.on('error', (err) => {
        console.log(err);
    });
    socket.on('data', (x) => {
        console.log('B:', x.toString());
    });

    // hardy((buf) => socket.write(buf));
});

server.listen(1337, '127.0.0.1');
