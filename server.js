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
    case '/experience.html':
      sendFile(res, 'experience.html')
      break
    case '/projects.html':
      sendFile(res, 'projects.html')
      break
    case '/about_me.html':
      sendFile(res, 'about_me.html')
      break
    case '/contact.html':
      sendFile(res, 'contact.html')
      break
    case '/envelope.png':
      sendFile(res, 'envelope.png')
      break
    case '/linkedin.png':
      sendFile(res, 'linkedin.png')
      break
    case '/meMachuPicchu.jpg':
      sendFile(res, 'meMachuPicchu.jpg')
      break
    case '/Professional4.jpg':
      sendFile(res, 'Professional4.jpg')
      break
    case '/main.css':
      sendCssFile(res, 'main.css')
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

function sendCssFile(res, filename) {
  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': 'text/css'})
    res.end(content, 'utf-8')
  })
}
