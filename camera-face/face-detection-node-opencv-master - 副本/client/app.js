// MODIFY THIS TO THE APPROPRIATE URL IF IT IS NOT BEING RUN LOCALLY
var socket = io.connect('http://localhost');

var canvas = document.getElementById('canvas-video');
var context = canvas.getContext('2d');
var img = new Image();
var img2 = new Image();

// show loading notice
context.fillStyle = '#333';
context.fillText('Loading...', canvas.width/2-30, canvas.height/3);

var canvas5 = document.getElementById('canvas-video');//获取绘图区域
var ctx5 = canvas5.getContext('2d');//让我们拿到一个CanvasRenderingContext2D对象
img2.src = "./humenFrame.png";
  console.log(232256)
  img2.onload = function () {
    ctx5.drawImage(this, 0, 0)
    console.log(2333)
  }
socket.on('frame', function (data) {
  // Reference: http://stackoverflow.com/questions/24107378/socket-io-began-to-support-binary-stream-from-1-0-is-there-a-complete-example-e/24124966#24124966
  var uint8Arr = new Uint8Array(data.buffer);
  var str = String.fromCharCode.apply(null, uint8Arr);
  var base64String = btoa(str);

  img.onload = function () {
    context.drawImage(this, 0, 0, canvas.width, canvas.height);
  };
  img.src = 'data:image/png;base64,' + base64String;
});