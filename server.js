var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , overwatch = require('overwatch-api')
  , port = 8080;

const platform = 'pc';
const region = 'us';
const tag = 'Synapse-11382';

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
      sendFile(res, 'style.css', 'text/css')
      break
    case '/no-style.html':
      sendFile(res, 'no-style.html')
      break
    case '/overwatch':
      getOverwatchProfile(res);
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename, type) {
  type = type || 'text/html';
  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': type})
    res.end(content, 'utf-8')
  })

}


function sendJSON(res, data){
  res.writeHead(200, {'Content-type': 'application/json'})
  res.end(JSON.stringify(data), 'utf-8')
}

function getOverwatchProfile(res){
  overwatch.getProfile(platform, region, tag, (err, json) => {
    if (err) console.error(err);
    else sendJSON(res, json)
  });
}