const { NodeRED } = require('node-red');

const nodeRed = new NodeRED({
  // settings...
});

nodeRed.init();

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Node-RED is running!');
});

server.listen(1880, () => {
  console.log('Node-RED is running on port 1880');
});