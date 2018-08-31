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
    case '/wpi.png':
      sendFile(res, 'wpi.png')
      break
    case '/computer.png':
      sendFile(res, 'computer.png')
      break
    case '/ie.jpg':
      sendFile(res, 'ie.jpg')
      break
    case '/code.png':
      sendFile(res, 'code.png')
      break
    case '/class.png':
      sendFile(res, 'class.png')
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
