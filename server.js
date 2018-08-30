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
    case '/style/dark.css':
      sendCSS(res,'style/dark.css')
      break
    case '/style/light.css':
      sendCSS(res,'style/light.css')
      break
    case '/style/main.css':
      sendCSS(res,'style/main.css')
      break
    case '/img/umi_cry.png':
      sendImg(res,'img/umi_cry.png')
      break;
    case '/img/mimikyu.png':
      sendImg(res,'img/mimikyu.png')
      break;
    case '/scripts/main.js':
      sendFile(res, 'scripts/main.js')
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

function sendCSS(res,filename) {
  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': 'text/css'})
    res.write(content)
    res.end()
  })
}

function sendImg(res,filename) {
  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': 'image/png'})
    res.write(content)
    res.end()
  })
}
