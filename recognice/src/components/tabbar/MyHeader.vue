<template>
  <div class="header">
    <div class="TopTitle">
      <img src="./../../assets/logo.png">
      <h2>人脸进出管理平台</h2>
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        text-color="black"
        active-text-color="white"
        router>
        <el-menu-item index="/" append>首页</el-menu-item>
        <el-menu-item index="/eventInquire" append>事件查询</el-menu-item>
        <el-menu-item index="/inOut" append>进出查询</el-menu-item>
        <el-menu-item index="/statistics" append>数据统计</el-menu-item>
        <el-menu-item index="/disposition" append>配置中心</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      activeIndex: ''
    }
  },
  mounted () {
    this.activeIndex = this.$route.path
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 180px;
  position: relative;
  .TopTitle{
    margin-left: 5%;
    margin-top: 20px;
    position:absolute;
    img{
      width: 84px;
      height: 76px;
      float: left;
    }
    h2{
      color: #0000ff;
      float: left;
      line-height: 76px;
      margin-left: 20px;
    }
  }

  @navColor: rgb(0, 153, 255);
  .nav{
    width: 100%;
    top: 106px;
    position: absolute;
    background-color: @navColor;
    ul.el-menu{
      background-color:@navColor;
      li{
        background-color: @navColor;
      }
      li:hover{
        background-color: #87CEFA;
      }
      li:nth-child(1){
        margin-left: 10%
      }
    }
  }
}
</style>
<style>
.container{
  margin-left: 30px;
  margin-right: 30px;
}
</style>
