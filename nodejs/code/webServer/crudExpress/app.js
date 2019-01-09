var express = require('express')
var app = express()
var router = require('./router.js') 

app.use('/public', express.static('./public/'))
app.use('/node_modules', express.static('./node_modules/'))
app.engine('html', require('express-art-template'))

// router(app) 老方式

app.use(router)

app.listen(3001,function () {
  console.log('running.......')
})
