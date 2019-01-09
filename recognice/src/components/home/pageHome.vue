<template>
  <div class="home container">
    <div class="Top">
      <div class="TopLeft">
        <tree/>
      </div>
      <div class="TopMiddle">
        <!-- <object></object> -->
        <object
          name="XDView1"
          ID="XDView1"
          width="640"
          height="480"
          CLASSID="CLSID:8DA9A0A7-AC21-4EA9-BB7E-43AEF89688A6"
          CODEBASE="/WebCMS.exe#Version=2,0,0,0">
        </object>
      </div>
      <div class="TopRight">
        <right/>
      </div>
    </div>
    <div class="bottom">
      <div class="bottomLeft">
        <div class="leftTitle">陌生人报警</div>
        <div class="leftMain">
          <div class="showImg">
            <div class="icon left" @click="trigerLeftClick(leftImgList)"><i class="el-icon-arrow-left"></i></div>
            <ul>
              <li v-for="item in leftImgList" :key="item.url" v-show="item.show"><img :src="item.url" alt=""></li>
            </ul>
            <div class="icon right" @click="trigerRightClick(leftImgList)"><i class="el-icon-arrow-right"></i></div>
          </div>
          <div class="detailTab">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div class="bottomMidle">
        <div class="middleTitle">黑名单告警</div>
        <div class="middleMain">
          <div class="showImg">
            <div class="icon left" @click="trigerLeftClick(rightImgList)"><i class="el-icon-arrow-left"></i></div>
            <ul>
              <li v-for="item in rightImgList" :key="item.url" v-show="item.show"><img :src="item.url" alt=""></li>
            </ul>
            <div class="icon right" @click="trigerRightClick(rightImgList)"><i class="el-icon-arrow-right"></i></div>
          </div>
          <div class="detail">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div class="bottomRight">
        <div class="summary">应到人数<span>{{ shouHaveNum }}</span>人/实到<span>{{ exactNum }}</span>人</div>
        <div class="rightTab">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="80">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="80">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tree from '@/components/home/tree'
import right from '@/components/home/right'
export default {
  name: 'pageHome',
  data () {
    return {
      leftImgIndex: 1,
      rightImgIndex: 1,
      shouHaveNum: 450,
      exactNum: 420,
      leftImgList: [
        {
          show: false,
          url: require('../../assets/logo.png')
        },
        {
          show: false,
          url: require('../../assets/1.png')
        },
        {
          show: false,
          url: require('../../assets/2.png')
        },
        {
          show: false,
          url: require('../../assets/3.png')
        },
        {
          show: false,
          url: require('../../assets/4.png')
        },
        {
          show: false,
          url: require('../../assets/logo.png')
        }
      ],
      rightImgList: [
        {
          show: false,
          url: require('../../assets/logo.png')
        },
        {
          show: false,
          url: require('../../assets/1.png')
        },
        {
          show: false,
          url: require('../../assets/2.png')
        },
        {
          show: false,
          url: require('../../assets/3.png')
        },
        {
          show: false,
          url: require('../../assets/4.png')
        },
        {
          show: false,
          url: require('../../assets/logo.png')
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      videoParme: {
        url: '172.16.10.100',
        port: '5000',
        uname: 'admin',
        psw: 'admin',
        Channel: '0'
      }
    }
  },
  components: {
    tree,
    right
  },
  created () {
    this.showImg()
  },
  mounted () {
    this.login()
  },
  methods: {
    $ () {
      var elements = []
      for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i]
        if (typeof element === 'string') {
          element = document.getElementById(element)
        }
        if (arguments.length === 1) {
          return element
        }
        elements.push(element)
      }
      return elements
    },
    login () {
      console.log('进来了')
      console.log(this.$('XDView1'))
      this.$('XDView1').m_szUrl = this.videoParme.url
      this.$('XDView1').m_dwDataPort = this.videoParme.port
      this.$('XDView1').m_szUserName = this.videoParme.uname
      this.$('XDView1').m_szPassword = this.videoParme.psw
      this.$('XDView1').m_ProtocolType = 0
      this.$('XDView1').Login()
      this.$('XDView1').StartPreview()
    },
    showImg (index, imgList) {
      if (arguments.length === 0) {
        for (var j = 0; j < 3; j++) { // 初始化显示
          this.leftImgList[j].show = true
          this.rightImgList[j].show = true
        }
      } else {
        for (var i in imgList) {
          if ((i >= (3 * index - 3)) && i < (3 * index)) {
            imgList[i].show = true
          } else {
            imgList[i].show = false
          }
        }
      }
    },
    trigerLeftClick (list) {
      if (list === this.leftImgList && this.leftImgIndex > 1) {
        this.leftImgIndex--
        this.showImg(this.leftImgIndex, list)
      } else if (list === this.rightImgList && this.rightImgIndex > 1) {
        this.rightImgIndex--
        this.showImg(this.rightImgIndex, list)
      }
    },
    trigerRightClick (list) {
      var len = Math.ceil(list.length / 3)
      if (list === this.leftImgList && this.leftImgIndex < len) {
        this.leftImgIndex++
        this.showImg(this.leftImgIndex, list)
      } else if (list === this.rightImgList && this.rightImgIndex < len) {
        this.rightImgIndex++
        this.showImg(this.rightImgIndex, list)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@bgColor: #F2F2F2;
@borderLeftColor: rgb(255,204,0);
.flexPosition {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.title{
  height: 50px;
  background-color: @bgColor;
  border-left: 5px solid @borderLeftColor;
  padding-left: 10px;
  line-height: 50px;
  margin-bottom: 10px;
}
.img{
  max-width: 165px;
  max-height: 116px;
}
.rotateImg{
  height: 150px;
  line-height: 150px;
  position: relative;
  .icon{
    width: 50px;
    height: 130px;
    color: #ccc;
    font-size: 40px;
    line-height: 130px;
    position: absolute;
    &:hover{
      background-color: #e6e6e6;
      color: white;
    }
    &.right{
      top: 0px;
      right: 0px;
    }
  }
  ul{
    margin-left: 60px;
    margin-right: 60px;
    .flexPosition();
    li{
      list-style: none;
      img{
        .img();
      }
    }
  }
}

.home{
  .Top{
    .flexPosition();
    .TopMiddle{
      object{
        min-width: 800px;
        min-height: 500px;
      }
    }
  }
  .bottom{
    margin-top: 10px;
    .flexPosition();
    .bottomLeft{
      width: 37%;
      height: 100%;
      .leftTitle{
        .title();
      }
      .leftMain{
        .showImg{
          .rotateImg()
        }
      }
    }
    .bottomMidle{
      width: 37%;
      height: 100%;
      .middleTitle{
        .title();
      }
      .middleMain{
        .showImg{
          .rotateImg()
        }
      }
    }
    .bottomRight{
      min-width: 350px;
      height: 100%;
      .summary{
        height: 50px;
        background-color: rgb(102,204,255);
        font-size: 14px;
        line-height: 50px;
        text-align: center;
        margin-bottom: 10px;
        span{
          font-size: 25px;
          color: rgb(255, 153, 0);
          font-weight: bolder;
        }
      }
    }
  }
}
</style>
