#全局对象
全局对象的属性可以在程序的任何位置访问,即全局变量, nodejs的全局对象是global, 所有全局变量都是global的属性,`global的作用是全局变量的宿主`;

`不使用var定义变量会将变量定义为全局变量; `

#1.PROCESS
`用于描述当前node进程的状态; `
1. process.argv: `命令行参数数组`, 第一个元素是node, 第二个元素是运行的脚本名, 之后是运行参数; 

2. process.stdout: `标准输出流`, process.stdout.write作用同console.log;

3. process.nextTick(function), `某任务不在当前做, 而是在下一次循环响应时做`, 类似setTimeout(function, waitTime);
   setTimeout(fn, 0)的效率比process.nextTick(callback)低;

#2.CONSOLE
`用于向stdout和stderr输出字符并以换行结束`, console.log和console.error;

#3.UTIL
提供常用函数;
1. `util.inherits(Sub, Base)`; `实现对象之间的继承; `
JS没有对象继承, 而是通过原型复制实现; 仅继承prototype中的方法, 构造函数内部定义的方法和属性不会继承;
obj在prototype中定义的属性不会在console.log(obj)中输出;
2. `util.inspect(obj, [showHidden], [depth], [colors])`; `将任意对象转为字符串;`
通常用于调试和错误输出, 至少需要一个obj, 表示需要转换的对象;
showHidden: true的话将输出更多的隐藏信息; 
depth: 最大递归层数; 
color: 若为true则在控制台输出时会以ANSI编码;

#4.EVENT ???

#5.FS
`文件操作, 文件的读取 写入 更名 删除 遍历 连接`; 
fs操作包含异步和同步两个版本;
`fs.readFile(filename, [encoding], [callback(err, data)]);` `异步`;
encodeing: 文件的编码; 
callback: 接受文件内容; 

`fs.readFileSync(filename, [encoding]);` `同步readFile;` 
参数与readFile相同, `读取的文件内容以函数返回值的形式返回`, 若有错误fs会抛出异常;

#6.HTTP
`http.Server是http模块中的HTTP服务器对象`;
`创建服务器实例`:
var http = require('http');
http.createServer(function(req, res) {}).listen(3000); 创建http.server实例, req为请求对象, res为响应对象;
listen监听端口3000;

`http.Server事件`：
1. `request`: 当客户端请求到来时触发, 提供两个参数: req, res, 分别是http.ServerRequest和http.ServerRespose的实例;
2. `connection`: TCP连接建立时触发, 提供参数socket, 即net.socket的实例; connection的事件粒度大于request, 客户端在keep-alive模式下可能会在同一个连接内发送多次请求;
3. `close`: 当服务器关闭时触发; 

`http.ServerRequest`: HTTP请求信息, 由http.Server的request事件发送, 简称request或req;

`http.ServerResponse`: 返回客户端的信息, 由http.Server的request事件发送, 简称response或res; 
参数:
1. response.writeHead(statusCode, [headers]); 响应头, statusCode是HTTP状态码, 如200或404; headers表示响应头的每一个属性;
2. `response.write(data, [encoding])`; 响应内容, data为发送内容, encoding是编码方式,  默认是UTF-8;
   `response.end()之前write可多次调用`;
3. response.end([data], [encoding]); 结束响应, 内容发送完成之后必须调用, 否则客户端一直等待;







