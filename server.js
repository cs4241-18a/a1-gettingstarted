var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'index.html', 1)
      break
    case '/index.html':
      sendFile(res, 'index.html', 1)
      break
	  case '/styles.css':
      sendFile(res, 'styles.css', 0)
      break
    default:
      res.end('404 not found')
  }
}

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename, type) {
  fs.readFile(filename, function(error, content) {
    if (type == 1) {
		res.writeHead(200, {'Content-type': 'text/html'})
	} else {
		res.writeHead(200, {'Content-type': 'text/css'})
	}
    res.end(content, 'utf-8')
  }

}
