const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'All_in_one.html');
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Virhe palvelimen lukemisessa');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Palvelin käynnissä osoitteessa http://localhost:${PORT}`);
});
