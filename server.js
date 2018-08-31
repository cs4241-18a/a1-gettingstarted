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
    case '/styles.css':
      sendFile(res, 'styles.css')
      break
    case '/materialize.min.css':
      sendFile(res, 'materialize.min.css')
      break
    case '/materialize.min.js':
      sendFile(res, 'materialize.min.js', 'text/javascript')
      break
    case '/images/wpi.jpg':
      sendFile(res, 'images/wpi.jpg', 'image/jpg')
      break
    case '/images/wpilogo.png':
      sendFile(res, 'images/wpilogo.png', 'image/png')
      break
    case '/images/work.jpg':
      sendFile(res, 'images/work.jpg', 'image/jpg')
      break
    case '/images/code.jpg':
      sendFile(res, 'images/code.jpg', 'image/jpg')
      break
    case '/images/class.jpg':
      sendFile(res, 'images/class.jpg', 'image/jpg')
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines


  function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}
