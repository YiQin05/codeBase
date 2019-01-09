<template>
    <div class="imgLeft">
        <div class="fileTitle">原始场景图片：</div>
        <div v-for="item in imgList" :key="item.filId" class="image">
            <img src="..\..\assets\u111.png"><div v-html="item.fileName"></div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'left',
      path: 'src/assets/',
      imgList: [
        {
          fileName: 'blue.png',
          filId: '1',
          filePath: ''
        },
        {
          fileName: 'logo.png',
          filId: '2',
          filePath: ''
        }
      ]
    }
  },
  mounted () {
    this.imgList.forEach(element => {
      element.filePath = this.path + element.fileName
    })
  }
}
</script>
<style scoped>
.imgLeft {
  border: 1px solid #ebeef5;
}
.imgLeft .image {
  text-align: left;
  margin-left: 10px;
  margin-bottom: 10px;
  vertical-align: middle;
  position: relative;
}
.imgLeft .image:hover {
  background-color: #ebeef5;
}
.image div {
  margin-left: 10px;
  cursor: pointer;
  height: 25px;
  position: absolute;
  top: 0px;
  line-height: 25px;
  left: 20px;
}
</style>
<style>
.fileTitle {
  background: url('..\..\assets\enquiry.png') no-repeat;
  height: 35px;
  margin-bottom: 10px;
  line-height: 35px;
  padding-left: 10px;
  color: white;
  font-size: 20px;
  text-align: left;
  margin-top: 5px;
}
</style>
