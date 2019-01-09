var fs = require('fs')

fs.writeFile('./data/fileData.txt','这是node.js的数据', function(error){
    if(error == null){
        fs.readFile('./data/fileData.txt',function(error, data){
            if(data){
                console.log(data.toString())
            }else{
                console.log(error)
            }
        })
    }
})

