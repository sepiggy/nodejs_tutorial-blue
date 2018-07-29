const http = require('http');

var server = http.createServer(function (request, response) {
    switch (request.url) {
        case '/1.html':
            response.write('1111');
            break;
        case '/2.html':
            response.write('2222');
            break;
        default:
            response.write('404');
            break;
    }

    response.end();
});

// 服务器需要监听
server.listen(8080);