var http = require('http')

var server = http.createServer()
var fs = require('fs')
// request是请求
server.on('request', function (req, res) {
    console.log('收到客户端请求')
    console.log('请求路径是：' + req.url)

    // response 是响应 write给客户端发送数据，可多次使用，但一定要用end结束响应，否则客户端会一直等待
    // response.write('hello')
    // response.write(' server')
    // response.end()
    //等同于以下发送数据后同时结束
    // response.end('hell0 server')
    var products = [
        {
            name: '苹果',
            code: 11
        },
        {
            name: '梨子',
            code: 12
        },
    ]
    
    
    // request.url输出的是端口号后的地址

   
    var url = req.url
    var dir = 'E:/code/nodejs/code'
    var filePath = '/index.html'
    if (url !== '/') {
        filePath = url
    }
    fs.readFile(dir + filePath, function (err,data){
        if(err) {
            return res.end('404 Not Found')
        }
        res.end (data)
    })
    
})
HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS,DELETE,PUT");
HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Test");




// 绑定端口号，启动服务器,300是端口号
server.listen(3000, function(){
    console.log('服务器启动成功，通过localhost:3000启动')
})


