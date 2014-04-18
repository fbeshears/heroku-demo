//app.js

var http, server, port;

http = require('http');

port = process.env.PORT || 3000;

server = http.createServer( function(request, response){
  response.writeHead( 200, { 'Content-Type': 'text/plain'});
  response.end( 'Hello World' );
}).listen( port );



console.log('Listening on port %d', server.address().port);