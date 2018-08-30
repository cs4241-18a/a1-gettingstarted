var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;
 var path = require('path');

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)
	console.log(req.url)
  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'index.html')
      break
    case '/index.html':
      sendFile(res, 'index.html')
	  break
	case  '/assets/css/styles.css':
	  sendFile(res, 'assets/css/styles.css')
      break
	case  '/assets/bootstrap/css/bootstrap.min.css':
	  sendFile(res, 'assets/bootstrap/css/bootstrap.min.css')
      break
	case  '/assets/js/jquery.min.js':
	  sendFile(res, 'assets/js/jquery.min.js')
      break
	case  '/assets/bootstrap/js/bootstrap.min.js':
	  sendFile(res, 'assets/bootstrap/js/bootstrap.min.js')
      break
	case  '/assets/img/toggle_profilbild.png':
	  sendFile(res, 'assets/img/toggle_profilbild.png')
	  break
	case  '/assets/img/australia3.png':
	  sendFile(res, 'assets/img/australia3.png')
	  break
	case  '/assets/img/australia2.png':
	  sendFile(res, 'assets/img/australia2.png')
	  break
	case  '/assets/img/australia1.png':
	  sendFile(res, 'assets/img/australia1.png')
	  break
	case  '/assets/img/tasmania.png':
	  sendFile(res, 'assets/img/tasmania.png')
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
	  if(filename.indexOf('.html')!== -1){
		res.writeHead(200, {'Content-type': 'text/html'})
		res.end(content, 'utf-8')  
	  }
	  if(filename.indexOf('.css')!== -1){
		res.writeHead(200, {'Content-type': 'text/css'})
		res.end(content, 'utf-8')  
	  }
	  if(filename.indexOf('.js')!== -1){
		res.writeHead(200, {'Content-type': 'application/javascript'})
		res.end(content, 'utf-8')  
	  }
	  if(filename.indexOf('.png')!== -1){
		res.writeHead(200, {'Content-type': 'image/png'})
		res.end(content, 'utf-8')  
	  }
	  
  })

}
