
var fs = require('fs')

fs.readFile('./data/test.txt', function (error, data) {
    if(data !== null){
        console.log(data.toString())
    }else{
        console.log(error)
    }
    
    
})