const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urllib = require('url');

http.createServer((req, resp) => {
    // 解析数据
    let str = '';
    req.on('data', function (data) {
        str += data;
    });

    req.on('end', function () {
        let parsed = urllib.parse(req.url, true);

        const URL = parsed.pathname;
        const GET = parsed.query;
        const POST = querystring.parse(str);




    })

    // 读取文件

}).listen(8080);