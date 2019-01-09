//项目js文件

//从此处导入包
// import $ from 'jquery'
const $ = require('jquery')

$(function(){
    console.log("ok");
    $('li:odd').css('color','red');
});