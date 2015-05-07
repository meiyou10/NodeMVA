var http = require('http');

var server = http.createServer
(
    function (request, response) 
    {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("1+1\n");
        response.end("Hello world\n");
    }
);

var port = 7000;
server.listen(port);
console.log('Starting server...\n');
console.log('Listening at port ' + port);
