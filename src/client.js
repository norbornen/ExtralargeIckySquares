// @ts-check

const net = require('net');
const hardy = require('./hardy');

const client = new net.Socket({
    // readableHighWaterMark: 100,
    // writableHighWaterMark: 200,
    // highWaterMark: 150
});

client.connect(1337, '127.0.0.1', () => {
	console.log('Connected');
    client.write('Hello, server! Love, Client.');
    
    setTimeout(() => hardy((buf) => client.write(buf)), 1500);
});

client.on('data', (data) => {
    console.log('Received: ' + data);
});

client.on('close', () => {
	console.log('Connection closed');
});
