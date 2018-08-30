var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
        sendFile(res, 'index.html');
        break;
      case '/index.html':
        sendFile(res, 'index.html');
        break;
      case '/bio.html':
        sendFile(res, 'bio.html');
        break;
      case '/workExp.html':
          sendFile(res, 'workExp.html');
          break;
      case '/wpiExperience.html':
          sendFile(res, 'wpiExperience.html');
          break;
      case 'stylesheet.css':
          sendCssFile(res, 'stylesheet.css');
          break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines
// Send HTML Files
function sendFile(res, filename) {

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(content, 'utf-8')
  })

}

// Send CSS Files
function sendCssFile(res, filename) {

    fs.readFile(filename, function(error, content) {
        res.writeHead(200, {'Content-type': 'text/css'})
        res.end(content, 'utf-8')
    })

}