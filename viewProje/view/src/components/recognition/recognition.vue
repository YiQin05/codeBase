<template>
    <div class="container recog">
        <div class="leftPanel">
          <cell/>
        </div>
        <div class="rightPanel">
          <div class="recogTop">
            <div class="TopTitle">场景文件</div>
            <div class="imgContain">
              <div class="fileLeft">
                <imgleft/>
              </div>
              <div class="fileRight">
                <imgright/>
              </div>
            </div>
          </div>
          <div class="recogBotton">
            <div class="TopTitle">场景识别</div>
            <div class="scen">
              <div class="scenleft">
                <div><img src="..\..\assets\u115.png" alt="上面点击传递过来的图片"></div>
              </div>
              <div class="scenright">
                <div>
                  <div class="fileTitle">识别结果：</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import cell from './cellTree.vue'
import imgleft from './imgLeft.vue'
import imgright from './imgRight.vue'
export default {
  data () {
    return {
      msg: '场景识别'
    }
  },
  components: {
    cell,
    imgleft,
    imgright
  }
}
</script>
<style scoped>
.fileTitle{
  margin-top: 0px;
}
.recog{
  display: flex;
  margin-bottom: 10px;
}
.leftPanel{
  width: 200px;
  border: 1px solid #ebeef5;
}
.rightPanel{
  width: 84%;
}
.imgContain,.scen{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.scenleft > div{
  margin-left: 10px;
}
.scenleft img{
  width: 100%;
}
.scenright > div{
  border: 1px solid #ebeef5;
  position: relative;
  height: 318px;
}
.imgresult{
  width: 100px;
  height: 35px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(255, 152, 51);
  line-height: 35px;
  color: white;
  font-size: 20px;
}
.fileLeft,
.fileRight,
.scenleft,
.scenright{
  width: 49%;
}

</style>
