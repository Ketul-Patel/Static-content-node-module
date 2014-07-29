var fs = require('fs');
module.exports = function(request, response) {
// Index Page --> change if there is a different static index page
// or comment out if unneeded
	var index = "index.html"
//
//
	extension = request.url.split('.').pop();
// Static views handler, all static views must be within the views 
// folder inside the static folder
// comment out if static views functionality is not needed
	if(request.url === "/") {
		response.writeHead(200, {'Content-type': 'text/html'});
		var url = "./static/views/"+index
		fs.readFile(url, 'utf8', function (errors, contents) {
			response.write(contents);
			response.end();
		});
	}
	else if(extension === "html") {
		response.writeHead(200, {'Content-type': 'text/html'});
		var url = "./static/views"+request.url
		fs.readFile(url, 'utf8', function (errors, contents) {
			response.write(contents);
			response.end();
		});
	} 
// Static stylesheets handler, all static stylesheets must be within
// the styles folder inside the static folder
// comment out if there are no stylesheets
	else if(extension === "css") {
		response.writeHead(200, {'Content-type': 'text/css'});
		var url = "./static/styles"+request.url
		fs.readFile(url, function (errors, contents) {
			response.write(contents);
			response.end();
		});
	}
// Static js handler, all static js files must be within the js 
// folder inside the static folder
// comment out if there are no js files
	else if(extension === "js") {
		response.writeHead(200, {'Content-type': 'application/javascript'});
		var url = "./static/js"+request.url
		fs.readFile(url, function (errors, contents) {
			response.write(contents);
			response.end();
		});
	}
// If extension did not match
	else {
		response.writeHead(404, {'Content-type': 'text/html'});
		response.end("Static content not found. Check URL extension")
	}
}