const http = require('http');
const urllib = require('url');

http.createServer((req, resp) => {
    let r = urllib.parse(req.url, true);
    console.log(r.pathname, r.query);

}).listen(8080);
