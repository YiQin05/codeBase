var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')
var MessageList = [
    {
        name: '张三',
        msg: '留言留言留言！',
        dateTime: '2018/11/15'
    },
    {
        name: '张三',
        msg: '留言留言留言！',
        dateTime: '2018/11/15'
    },
    {
        name: '李三',
        msg: '留言留言留言！',
        dateTime: '2018/11/15'
    },
    {
        name: '张三',
        msg: '留言留言留言！',
        dateTime: '2018/11/15'
    },
]
http
  .createServer(function (req, res) {
    var parseObj = url.parse(req.url, true)
    var pathname = parseObj.pathname
    console.log(23333)
    console.log("2333" + pathname)
    if (pathname.indexOf('/public/') === 0) {
        fs.readFile('.' + pathname, function (err, data) {
            if (err) {
              return res.end('404')
            }
            res.end(data)
        })
    } else {
        switch (pathname) {
            case '/':
              fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                  return res.end('404')
                }
                var htmlStr = template.render(data.toString(), {
                    MessageList: MessageList
                })
                res.end(htmlStr)
              })
              break
            case '/post':
              fs.readFile('./views/post.html', function (err, data) {
                if (err) {
                  return res.end('404')
                }
                res.end(data)
              })
              break
            case '/comment':
              var obj = parseObj.query
              var time = new Date()
              var year = time.getFullYear()
              var month = time.getMonth()
              var day = time.getDay()
              obj.dateTime = year + '/' + month + '/' + day
              MessageList.unshift(obj)
              res.statusCode = 302
              res.setHeader('Location', '/')
              res.end()
              break
            default:
              fs.readFile('./views/404.html', function (err, data) {
                if (err) {
                  return res.end('404')
                }
                res.end(data)
              })
              break
          }
    }
    
})
  .listen(3000, function () {
    console.log('running....')
  })
