const http = require('http');
const app = require('./app.js');

const server = http.createServer(app);
const port = 4000;

server.listen(port, '0.0.0.0', function() {
  console.log('Listening on port %d', port);
});