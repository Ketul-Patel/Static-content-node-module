var http = require('http');
var fs = require('fs');
var static_content = require('./modules/static.js');

server = http.createServer(function (request, response) {
	static_content(request, response);
});
server.listen(8000);
console.log("Server is up and running at port 8000")
