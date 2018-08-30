var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'index.html')
      break
    case '/index.html':
      sendFile(res, 'index.html')
      break
    case '/style.css':
	  sendFile( res, 'style.css' )
	  break
	case '/img/self.jpg':
	  sendFile( res, '/img/self.jpg' )
	  break
    case '/img/arista.jpg'
	  sendFile(res, '/img/arista.jpg')
	  break
    case '/img/idT.jpg'
	  sendFile(res, '/img/idT.jpg')
	  break
    case '/img/curly.jpg'
	  sendFile(res, '/img/curly.jpg')
	  break
    case '/img/climb.jpg'
	  sendFile(res, '/img/climb.jpg')
	  break
    case '/img/acm.png'
	  sendFile(res, '/img/acm.png')
	  break
    case '/patterns/newspaper.jpg'
	  sendFile(res, '/patterns/newspaper.jpg')
	  break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename) {

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(content, 'utf-8')
  })

}
