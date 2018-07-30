const http = require('http');

http.createServer(function (req, resp) {
    let GET = {};
    let url = '';

    if (req.url.indexOf('?') != -1) {
        let arr = req.url.split('?');
        url = arr[0];
        let params = arr[1].split('&');

        for (let param of params) {
            GET[param.split('=')[0]] = param.split('=')[1];
        }
    } else {
        url = req.url;
    }

    console.log(url, GET);

    resp.write("ok");
    resp.end();
}).listen(8080);