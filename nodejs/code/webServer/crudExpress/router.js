var fs = require('fs')

var express = require('express')

var router = express.Router() // 创建路由容器router

// 把路由都挂在路由容器上
router.get('/', function (req, res) {
  fs.readFile('./db.json', 'utf8', function(err, data) {
    if (err) {
      return res.status(500).send('Server error')
    }
    res.render('index.html', {
      students: JSON.parse(data).students
    })
  })
})





module.exports = router

/* 老方式
module.exports = function (app) {
  app.get('/', function (req, res) {
    fs.readFile('./db.json', 'utf8', function(err, data) {
      if (err) {
        return res.status(500).send('Server error')
      }
      res.render('index.html', {
        students: JSON.parse(data).students
      })
    })
  })
  
  app.get('/edit', function (req, res) {
  
  })
  
  app.get('/edit', function (req, res) {
    
  })
}
*/
