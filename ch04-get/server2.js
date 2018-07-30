const http = require('http');
const querystring = require('querystring');

http.createServer((req, resp) => {
    let GET = {};
    let url = '';

    if (req.url.indexOf('?') == -1) {
        url = req.url;
    } else {
        url = req.url.split('?')[0];
        GET = querystring.parse(req.url.split('?')[1]);
    }

    console.log(url, GET);

}).listen(8080);