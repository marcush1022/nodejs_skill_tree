#HTTP
nodejs的核心模块，主要用于搭建HTTP服务；
例: 
var http = require('http');
var fs = require('fs')

var data;
http.createServer(function(req, res) {
    fs.readFile('111.txt', function readData(err, data) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);
    });

    if (req.url == '/') {
        console.log('=> URL: /');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('bloodGod');
    }
    else if (req.url == '/e') {
        console.log('=> URL: /e');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('everChoosen');
    }
    else if (req.url == '/s') {
        console.log('=> URL: /s');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('skullThrone');
    }
    else {
        res.write('CHOAS!');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('CLOSED!!!!');
    }

    // res.end('CLOSED!');
}).listen(3000);

console.log('Http server listenig at port 3000');

createServer的参数request, 属性为: 
url: 发出请求的网址;
method: 请求的方法;
headers: HTTP请求的HTTP头信息;
request.setEncoding(): 设置请求的编码；
request.addListener(): 为request添加事件的回调函数;


