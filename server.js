var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
    var uri = url.parse(req.url)

	//console.log(uri.pathname + "--")
	var path = uri.pathname
	if (path[0] == '/')
	{
		path = path.substr(1)
	}
    sendFile(res, path)
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename)
{	
	if (filename.length == 0)
	{
		filename = "index.html"
	}
	
	try
	{
		//console.log(filename + "--")
	    var stats = fs.statSync(filename); //Checks for file existence or errors
		
	    // File exists
	  
		var type = filename.split(".")
		type = type[type.length-1]
		fs.readFile(filename, function(error, content) {
			res.writeHead(200, {'Content-type': 'text/' + type } )
			res.end(content, 'utf-8')
		})
	}
	catch(err)
	{
	    // File does not exist
		
		fs.readFile("404.html", function(error, content) {
			res.writeHead(404, {'Content-type': 'text/html'})
			res.end(content, 'utf-8')
		})
	}
}
