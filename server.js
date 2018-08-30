var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'index.html','text/html')
      break
    case '/index.html':
      sendFile(res, 'index.html','text/html')
      break
	case '/styles.css':
      sendFile(res, 'styles.css','text/css')
      break
	case '/AGD_image.png':
	  sendFile(res, 'AGD_image.png', 'image/png')
	  break
	case '/me.png':
	  sendFile(res, 'me.png', 'image/png')
	  break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename, ct) {

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': ct})
    res.end(content, 'utf-8')
  })

}
