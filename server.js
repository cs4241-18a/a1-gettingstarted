var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

//modified to serve css/javascript
var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'index.html')
      break
    case '/index.html':
      sendFile(res, 'index.html')
      break
    case '/style_stuff.css':
      sendFile(res, 'style_stuff.css')
      break
    case '/scripts.js':
      sendFile(res, 'scripts.js')
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines
//modified to serve css, javascript
//assumes only one css/js file
function sendFile(res, filename) {
  fs.readFile(filename, function(error, content) {
    if(filename.includes(".html")){
      res.writeHead(200, {'Content-type': 'text/html'})
      res.end(content, 'utf-8')
    }
    else if(filename.includes(".css")){
      res.writeHead(200, {'Content-type': 'text/css'})
      res.end(content, 'utf-8')
    }
    else if(filename.includes(".js")){
      res.writeHead(200, {'Content-type': 'text/javascript'})
      res.end(content, 'utf-8')
    }
    else{
      //some error
    }
  })


}
