<template>
  <div>
    <h1> {{ title }}</h1>
    <div id="camera" class="borderstyle"></div>
    <div class="canvasContain">
      <canvas id="canvas" class="borderstyle" width="320px" height="240px"></canvas>
      <canvas id="humenFrame"></canvas>
    </div>
    <div id="showImg"></div>
    <ul id="cams"></ul>
    <button class="play" @click="click">拍照</button>
  </div>
</template>

<script>
import $ from 'jquery'
import {webcamJsFun} from '../../static/js/jquery.webcam.js'
export default {
  neme: 'flashImg',
  data () {
    return {
      title: 'flashImg flash拍照',
      saveCB: function () {}
    }
  },
  mounted () {
    var w = 320
    var h = 240
    var pos = 0
    var ctx = null
    var canvas = document.getElementById('canvas')
    if (canvas.toDataURL) {
      ctx = canvas.getContext('2d')
      var image = ctx.getImageData(0, 0, w, h)
      // console.log(image)
      // let data = image.data
      console.log(4123456)
      this.saveCB = function (data) {
        var col = data.split(';')
        var img = image
        for (var i = 0; i < 320; i++) {
          var tmp = parseInt(col[i])
          img.data[pos + 0] = (tmp >> 16) & 0xff
          img.data[pos + 1] = (tmp >> 8) & 0xff
          img.data[pos + 2] = tmp & 0xff
          img.data[pos + 3] = 0xff
          pos += 4
        }
        if (pos >= 4 * 320 * 240) {
          ctx.putImageData(img, 0, 0)
          // var Imagedata = canvas.toDataURL().substring(22) // 注意：上传给后台的图片数据！
          pos = 0
        }
      }
    } else {
      image = []
      this.saveCB = function (data) {
        image.push(data)
        pos += 4 * 320
        if (pos >= 4 * 320 * 240) {
          $.post(URL, {briStr: image.join(';')}, function (data) {
            // 在页面显示base64图片处理
            pos = 0
            image = []
          })
        }
      }
    }
    this.getWebcamJsFun()
    this.webcamFun(w, h, this.saveCB)
  },
  methods: {
    getWebcamJsFun: function () {
      webcamJsFun()
      console.log(676)
      // console.log(webcam)
    },
    webcamFun: function (w, h, saveCB) {
      $('#camera').webcam({
        width: w,
        height: h,
        mode: 'callback',
        swffile: '../../static/video/jscam.swf',
        // swffile: "./jscam_canvas_only.swf",
        onSave: saveCB,
        onCapture: function () { // 捕获图像
          window.webcam.save()
        },
        debug: function (type, string) { // 控制台信息
          console.log(type + ':' + string)
        },
        onLoad: function () { // flash 加载完毕执行
          var cams = window.webcam.getCameraList()
          for (var i in cams) {
            $('#cams').append('<li>' + cams[i] + '</li>')
          }
        }
      })
    },
    click: function () {
      window.webcam.capture()
    }
  }
}
</script>

<style scoped>
.borderstyle {
  border: 1px solid #b6b6b6;
  width: 320px;
  height: 240px;
}
#camera {
  float: left;
  margin:10px;
}
#cams {
  width: 500px;
  height: 500px;
  background-color: #b6b6b6;
}
#canvas {
  width: 320px;
  height: 240px;
  margin:10px;
}
</style>
