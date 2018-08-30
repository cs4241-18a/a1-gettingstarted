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
    case '/stylesA1.css':
      sendFile(res, 'stylesA1.css')
      break
    case '/MoLProj.JPG':
        sendFile(res, 'MoLProj.JPG')
        break
    case '/kittyCollage.JPG':
        sendFile(res, 'kittyCollage.JPG')
        break
    case '/PointCloudBasic.JPG':
        sendFile(res, 'PointCloudBasic.JPG')
        break
    case '/Skydiving.JPG':
        sendFile(res, 'Skydiving.JPG')
        break
    case '/SwissAlps.JPG':
        sendFile(res, 'SwissAlps.JPG')
        break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename) {
    switch( filename ) {
        case 'index.html':
            fs.readFile(filename, function (error, content) {
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.end(content, 'utf-8')
            })
            break
        case 'stylesA1.css':
            fs.readFile(filename, function (error, content) {
                res.writeHead(200, { 'Content-type': 'text/css' })
                res.end(content, 'utf-8')
            })
            break
        case 'MoLProj.JPG':
        case 'kittyCollage.JPG':
        case 'PointCloudBasic.JPG':
        case 'Skydiving.JPG':
        case 'SwissAlps.JPG':
            fs.readFile(filename, function (error, content) {
                res.writeHead(200, { 'Content-type': 'image/jpg' })
                res.end(content, 'utf-8')
            })
            break
        default:
            fs.readFile(filename, function (error, content) {
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.end(content, 'utf-8')
            })
    }
}
