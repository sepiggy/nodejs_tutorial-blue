const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urllib = require('url');

/*
 * WebServer主要关心三个点:
 * url - 要什么
 * GET - get 数据
 * POST - post 数据
 */
http.createServer((req, resp) => {
    console.log(req.url);

    let obj = urllib.parse(req.url, true);

    // url
    let url = obj.pathname;

    // GET
    const GET = obj.query;

    // POST
    let str = '';
    req.on('data', (data) => {
        str += data;
    });

    req.on('end', () => {
        const POST = querystring.parse(str);

        console.log(url, GET, POST);
    });

    // 文件请求
    var filepath = './www' + url;
    fs.readFile(filepath, (err, data) => {
        if (err) {
            resp.write('404');
        } else {
            resp.write(data);
        }
        resp.end();
    });

}).listen(8080);
