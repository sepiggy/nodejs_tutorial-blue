const http = require('http');
const fs = require('fs');

// 异步
let server = http.createServer((req, resp) => {

    let file_path = './www' + req.url;

    fs.readFile(file_path, function (err, data) {
        if (err) {
            resp.write('404');
        } else {
            resp.write(data);
        }
        resp.end();
    });
});

server.listen(8080);