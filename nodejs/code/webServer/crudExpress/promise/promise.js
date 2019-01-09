
var fs = require('fs')
/*
var p1 = new Promise(function (resolve, reject) {
   fs.readFile('promiseTest1.txt', 'utf8', function (err, data) {
     if (err) {
       reject(err)
     } else {
       resolve(data)
     }
   })
})

var p2 = new Promise(function (resolve, reject) {
  fs.readFile('promiseTest2.txt', 'utf8', function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

var p3 = new Promise(function (resolve, reject) {
  fs.readFile('promiseTest3.txt', 'utf8', function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
p1
  .then(function (data) {
    console.log(data)
    return p2
  }, function (err) {
    console.log(err)
  })
  .then(function (data) {
    console.log(data)
    return p3
  }, function (err) {
    console.log(err)
  })
  .then(function (data) {
    console.log(data)
  }, function (err) {
    console.log(err)
  })
*/

// 封装
function package (fileUrl) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileUrl, 'utf8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// 调用
package('./promiseTest1.txt')
  .then(function (data) {
    console.log('成功')
    console.log(data)
    return package('./promiseTest2.txt')
  }, function (err) {
    console.log(err)
    console.log('失败')
  })
  .then(function (data) {
    console.log('成功')
    console.log(data)
    return package('./promiseTest3.txt')
  }, function (err) {
    console.log('失败')
  })
  .then(function (data) {
    console.log('成功')
    console.log(data)
  }, function (err) {
    console.log('失败')
  })

