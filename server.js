var http = require('http')
    , fs = require('fs')
    , url = require('url')
    , port = 8080;

var server = http.createServer(function (req, res) {
    var uri = url.parse(req.url);

    switch (uri.pathname) {
        case '/':
            sendFile(res, 'index.html');
            break;
        case '/index.html':
            sendFile(res, 'index.html');
            break;
        case '/style.css':
            sendFile(res, 'style.css');
            break;
        case '/profile.jpg':
            sendFile(res, 'profile.jpg');
            break;
        default:
            res.end('404 not found');
    }
});

server.listen(process.env.PORT || port);
console.log('listening on 8080');

// subroutines

function sendFile(res, filename) {
    fs.readFile(filename, function (error, content) {
        if (filename.indexOf('.html') !== -1) {
            res.writeHead(200, {'Content-type': 'text/html'});
        }
        if (filename.indexOf('.css') !== -1) {
            res.writeHead(200, {'Content-type': 'text/css'});
        }
        if (filename.indexOf('.jpg') !== -1) {
            res.writeHead(200, {'Content-type': 'image/jpeg'});
        }
        res.end(content, 'utf-8');
    })
}
