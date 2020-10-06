// @ts-check

const https = require('https');

module.exports = (/** @type {(x: Buffer) => void} */ cb) => {
    const req = https.request('https://jsonplaceholder.typicode.com/photos', (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
            let json = JSON.parse(body);
            json = [...json, ...json, ...json, ...json, ...json, ...json, ...json, ...json, ...json];
            console.log(json[0], json.length);
            const buf = Buffer.from(JSON.stringify(json));
            console.log('go->', Math.trunc(buf.length/1024) + 'kb');
            cb(buf);
        });
    });
    req.on('error', console.error);
    req.end();
};
