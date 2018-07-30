// POST 数据接收:
// POST 数据可以比 GET 大得多
// POST 很大 --> 分段

const http = require('http');
const querystring = require('querystring');

http.createServer((req, resp) => {

    let str = ''; // 接收数据 (用 String 不严谨)

    let i = 0;
    // data 事件: 每有一段数据到达时, 就会发生 (会发生很多次)
    req.on('data', function (data) {
        console.log(`第${++i}次收到数据`);
        str += data;
    });

    // end 事件: 数据全部到达时, 会发生 (只发生一次)
    req.on('end', function () {
        let POST = querystring.parse(str);
        console.log(POST);
    });

}).listen(8080);
