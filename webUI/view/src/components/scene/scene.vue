<template>
    <div class="container">
      <div class="TopTitle">场景识别</div>
      <div class="mapTop">
        <div class="celltree">
          <cellTree @selectCell="selectCell"/>
        </div>
        <div class="map">
          <div v-if="isOpenMap" style="border:solid lightblue 1px;height:100%;min-height:568px ">
            <el-amap vid="amapCamera" :events="mapEvents" :center="center">
                <el-amap-marker :position="position" ></el-amap-marker>
            </el-amap>
          </div>
        </div>
        <div class="detailMsg">
          <el-table
            :data="showList"
            :header-row-style="headerStyle"
            :cell-style="cellCss"
            style="width: 100%"
            size="mini">
            <el-table-column
              prop="name"
              label="项目"
              width="90">
            </el-table-column>
            <el-table-column
              prop="value"
              label="值"
              width="90">
            </el-table-column>
          </el-table>
          <el-table
            :data="sceneList"
            :header-row-style="headerStyle"
            :cell-style="cellCss"
            style="width: 100%"
            size="mini">
            <el-table-column
              prop="name"
              label="场景识别"
              width="90">
            </el-table-column>
            <el-table-column
              prop="value"
              label="置信度"
              width="90">
            </el-table-column>
          </el-table>
          <el-table
            :data="projList"
            :header-row-style="headerStyle"
            :cell-style="cellCss"
            style="width: 100%"
            size="mini">
            <el-table-column
              prop="name"
              label="物体识别"
              width="90">
            </el-table-column>
            <el-table-column
              prop="value"
              label="所占比例"
              width="90">
            </el-table-column>
          </el-table>
          <!-- <el-table
            :data="distentList"
            :header-row-style="headerStyle"
            style="width: 100%"
            size="mini">
            <el-table-column
              prop="name"
              label="测距"
              width="90">
            </el-table-column>
            <el-table-column
              prop="value"
              label="距离"
              width="90">
            </el-table-column>
          </el-table> -->
        </div>
      </div>
      <div class="mapMiddle" v-show="this.showImgList.length == 0? false:true">
        <div class="icon left" @click="trigerLeftClick"><i class="el-icon-arrow-left"></i></div>
        <ul>
          <!-- <img v-else src="./../../assets/error.jpeg"/>v-if="i.stitchingStatus !== 2" :src="i.fileUrl" -->
          <li v-for='(i, index) in showImgList' :key="i.id" v-on:click="trigerClick(index)" :class="{ active:index === current}">
            <img v-if="i.stitchingStatus !== 2" :src="i.fileUrl" /><img v-else src="./../../assets/error.jpeg"/>
          </li>
        </ul>
        <div class="clear"></div>
        <div class="icon right" @click="trigerRightClick"><i class="el-icon-arrow-right"></i></div>
      </div>
      <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
      <div class="mapBottom" v-show="this.showImgList.length == 0? false:true">
        <div class="bottomLeft">
          <img :src="currenImg.fileUrl" alt="图片拼接失败！" v-show="stitchingStatus !== 2" @click="clickImg($event)">
          <div class="error" v-show="stitchingStatus === 2" style="height:580px;">
            <h2>图片拼接失败！</h2>
            <!-- <img src="./../../assets/error.jpeg" alt="图片拼接失败！" @click="clickImg($event)"> -->
          </div>
        </div>
        <div class="bottomRight">
          <div class="tittle">识别结果</div>
          <div>
            <h3 class="scene" v-show="stitchingStatus !== 2">场景</h3>
            <ul class="msg">
              <li v-for='i in sceneList' v-if="i.name === '是否合成图'? false:true" :key="i.name">{{ i.name }}</li>
            </ul>
            <ul class="present">
              <li v-for='i in sceneList' :key="i.name" v-if="typeof(i.present) === 'string'? false:true"><el-progress :percentage="i.present" color="#67C23A" :stroke-width="15"></el-progress></li>
            </ul>
            <div class="clear"></div>
          </div>
          <div>
            <h3 class="object" v-show="stitchingStatus !== 2">物体</h3>
            <ul class="msg">
              <li v-for='i in projList' :key="i.name">{{ i.name }}</li>
            </ul>
            <ul class="present">
              <li v-for='i in projList' :key="i.name"><el-progress :percentage="i.present" color="#67C23A" :stroke-width="15"></el-progress></li>
            </ul>
            <div class="clear"></div>
          </div>
          <div>
            <h3 class="object" v-show="stitchingStatus !== 2">物体测距</h3>
            <div v-for="i in distentList" :key="i.name">
              <h4>{{ i.name }}</h4>
              <ul class="msg">
                <li v-for='j in i.section' :key="j.distent">{{ j.distent }}</li>
              </ul>
              <ul class="present">
                <li v-for='j in i.section' :key="j.distent"><el-progress :percentage="j.value" color="#67C23A" :stroke-width="15"></el-progress></li>
              </ul>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import cellTree from '../scene/cellTree.vue'
import BigImg from './bigImg.vue'
export default {
  data () {
    return {
      ruleForm: {
        longitude: 0,
        latitude: 0
      },
      showFlag: true,
      stitchingStatus: -1, // 拼接图状态 负数时没意义
      showImg: false,
      imgSrc: '',
      isOpenMap: true,
      position: [113.58811, 22.23263],
      center: [], // 地图图标居中
      cellObj: {}, // 小区对象
      cellCss: {
        'padding-bottom': '0px',
        'padding-top': '0px'
      },
      headerStyle: {
        'background-color': '#007AFF',
        'color': 'white'
      },
      mapEvents: {
        'click': (e) => {
          // 第一个参数是latitude，第二个是longitude
          let change = this.gcjToWgsExactly(e.lnglat.lat, e.lnglat.lng)
          let longitude = change.lon
          let latitude = change.lat
          this.ruleForm.longitude = Math.ceil(longitude * 100000) / 100000
          this.ruleForm.latitude = Math.ceil(latitude * 100000) / 100000
          this.position = [e.lnglat.lng, e.lnglat.lat]
        }
      },
      user: '',
      showList: [], // 用于表格信息的显示
      sceneList: [{
        name: '学校',
        value: '',
        present: 0
      },
      {
        name: '停车场',
        value: '',
        present: 0
      }],
      projList: [{
        name: '建筑',
        value: '',
        present: 0
      },
      {
        name: '人行道',
        value: '',
        present: 0
      }],
      distentList: [{
        name: '',
        section: []
      }], // 用于第四个距离的表格
      showImgList: [], // 用于储存显示的图片
      showImgNum: 5, // 显示多少张图片
      clickRightTime: 1, // 用于判断将哪些图片放进showImgList
      recognizeResult: [], // 请求回来的识别结果
      bscID: '',
      cellID: '',
      current: 0,
      imgStar: 0,
      currenImg: {}, // 当前选中图片的详细信息
      missionList: {
        bscID: '',
        cellID: '',
        cellName: '',
        lac: '',
        longitude: '',
        latitude: '',
        altitude: '',
        elevationAngle: '',
        directAngle: '',
        coverAngleBegin: '',
        coverAngleEnd: '',
        coverDistance: ''
      },
      imgList: []
    }
  },
  components: {
    cellTree,
    BigImg
  },
  created () {
    this.center = this.position
    this.user = this.getCookie('userID')
    this.setShowList()
  },
  methods: {
    clickImg (e) {
      this.showImg = true
      // 获取当前图片地址
      this.imgSrc = e.currentTarget.src
    },
    viewImg () {
      this.showImg = false
    },
    // 设置地图位置
    selectCell (obj) {
      this.imgStar = 0
      this.cellObj = obj
      // 第一个参数是latitude，第二个是longitude
      let change = this.wgsToGcj(obj.latitude, obj.longitude)
      let longitude = change.lon
      let latitude = change.lat
      this.position = [longitude, latitude]
      this.center = this.position
      this.bscID = obj.bscID
      this.cellID = obj.cellID
      this.missionList = obj
      // this.getTaskID(this.cellID)
      this.getResult()
      this.setShowList()
    },
    // 根据cellID获取taskID
    getTaskID (cellID) {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/task/' + this.user)
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (var i in response.data.data) {
              if (response.data.data[i].cellID === cellID) {
                this.getImg(response.data.data[i].taskID)
              }
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 根据任务ID取回照片
    getImg (taskID) {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/getRawPicList/' + taskID)
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 从服务器取回识别结果
    getResult () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/recognition/' + this.bscID + '/' + this.cellID)
      this.showImgList.length = 0
      let compoundImg = {}
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.imgList.length = 0
            for (var k of response.data.data) {
              if (k.isStitchingPic !== 1) {
                this.imgList.push(k)
              } else {
                compoundImg = k
              }
            }
            this.imgList.push(compoundImg)
            for (let i of this.imgList) {
              // i.fileUrl = 'http://172.16.10.26:5000' + i.fileUrl
              i.fileUrl = this.setAPIPath(i.fileUrl)
            }
            this.setShowImgList(0, this.showImgNum) // 初始化显示的图片
            this.clickRightTime = 1
            this.currenImg = this.showImgList[0]
            this.current = 0
            this.sceneList.length = 0
            this.projList.length = 0
            this.distentList.length = 0
            // 判断是否是合成图
            if (this.currenImg.isStitchingPic === 1) {
              var list = {
                name: '是否合成图',
                present: '是',
                value: '是'
              }
              this.sceneList.push(list)
            } else {
              var list1 = {
                name: '是否合成图',
                present: '否',
                value: '否'
              }
              this.sceneList.push(list1)
            }
            for (let i of this.currenImg.recognizeScenes) {
              this.setSceneList(i.yidongSceneName, i.confidence, i.isStitchingPic)
            }
            for (let i of this.currenImg.recognizeObjects) {
              this.setProjList(i.basicObjectName, i.rate)
            }
            for (let i of this.currenImg.obscureObjects) {
              this.setDistentList(i.obscureObjectName, i.depthRatePairs)
            }
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    setShowList () { // 设置显示表格内的信息
      this.showList = []
      for (var key in this.missionList) {
        var val = this.missionList[key]
        switch (key) {
          case 'altitude':
            key = '海拔高度'
            break
          case 'bscID':
            key = '基站ID'
            break
          case 'bscName':
            key = '基站名称'
            break
          case 'cellID':
            key = '小区ID'
            break
          case 'cellName':
            key = '小区名'
            break
          // case 'coverAngleBegin':
          //   key = '方向角起点'
          //   break
          // case 'coverAngleEnd':
          //   key = '方向角终点'
          //   break
          case 'coverDistance':
            key = '覆盖距离'
            break
          case 'directAngle':
            key = '方向角'
            break
          case 'elevationAngle':
            key = '下倾角'
            break
          case 'lac':
            key = '小区lac'
            break
          case 'latitude':
            key = '纬度'
            break
          case 'longitude':
            key = '经度'
            break
        }
        if (key !== 'coverAngleBegin' && key !== 'coverAngleEnd') {
          var list = {
            name: key,
            value: val
          }
          this.showList.push(list)
        }
      }
    },
    // 设置图片轮显部分
    trigerClick (index) {
      this.current = index
      this.currenImg = this.showImgList[index]
      this.sceneList.length = 0
      this.projList.length = 0
      this.distentList.length = 0
      this.stitchingStatus = this.currenImg.stitchingStatus
      // 判断是否是合成图
      if (this.currenImg.isStitchingPic === 1) {
        var list = {
          name: '是否合成图',
          present: '是',
          value: '是'
        }
        this.sceneList.push(list)
      } else {
        var list1 = {
          name: '是否合成图',
          present: '否',
          value: '否'
        }
        this.sceneList.push(list1)
      }
      for (let i of this.currenImg.recognizeScenes) {
        this.setSceneList(i.yidongSceneName, i.confidence)
      }
      for (let i of this.currenImg.recognizeObjects) {
        this.setProjList(i.basicObjectName, i.rate)
      }
      for (let i of this.currenImg.obscureObjects) {
        this.setDistentList(i.obscureObjectName, i.depthRatePairs)
      }
    },
    setSceneList (name, value) {
      var present = parseInt(value * 100)
      var list = {
        name: name,
        value: Math.round(value * 10000) / 10000,
        present: present
      }
      this.sceneList.push(list)
    },
    setProjList (name, value) {
      var present = parseInt(value * 100)
      var list = {
        name: name,
        value: Math.round(value * 10000) / 10000,
        present: present
      }
      this.projList.push(list)
    },
    setDistentList (name, array) {
      var newName = name
      var sectionList = []
      for (let i of array) {
        var present = parseInt((i.rate) * 100)
        var distent = ''
        switch (i.depthRegionIdx) {
          case 0:
            distent = '0-50m:'
            break
          case 1:
            distent = '50-100m:'
            break
          case 2:
            distent = '100-300m:'
            break
          case 3:
            distent = '大于300m:'
            break
        }
        var list = {
          value: present,
          distent: distent
        }
        sectionList.push(list)
      }
      var newList = {
        name: newName,
        section: sectionList
      }
      this.distentList.push(newList)
    },
    trigerRightClick () {
      if (this.imgStar < this.imgList.length - 1) {
        this.imgStar++
        var end = this.imgStar + this.showImgNum
        this.setShowImgList(this.imgStar, end)
      } else {
        this.openMsg('已无更多图片!', '', this)
      }
      // var star = (this.showImgNum) * (this.clickRightTime)
      // if (this.imgList.length >= star) {
      //   var end = star + this.showImgNum
      //   this.clickRightTime++
      //   this.setShowImgList(star, end)
      // } else {
      //   this.openMsg('已无更多图片!', '', this)
      // }
    },
    trigerLeftClick () {
      if (this.imgStar > 0) {
        this.imgStar--
        var end = this.imgStar + this.showImgNum
        this.setShowImgList(this.imgStar, end)
      } else {
        this.openMsg('已无更多图片!', '', this)
      }
      // if (this.clickRightTime > 1) {
      //   var star = (this.showImgNum) * (this.clickRightTime - 1) - this.showImgNum
      //   var end = star + this.showImgNum
      //   this.clickRightTime--
      //   this.setShowImgList(star, end)
      // } else {
      //   // star = 0
      //   // end = this.showImgNum
      //   // this.setShowImgList(star, end)
      //   this.openMsg('已无更多图片!', '', this)
      // }
    },
    setShowImgList (star, end) {
      this.current = -1
      this.showImgList.length = 0
      if (end < this.imgList.length) {
        // for(var i=0,len = this.imgList.length; i<len ; i++){

        // }
        for (var i = star; i < end; i++) {
          this.showImgList.push(this.imgList[i])
        }
      } else {
        for (var j = star, len = this.imgList.length; j < len; j++) {
          this.showImgList.push(this.imgList[j])
        }
      }
    }

  }
}
</script>
<style scoped>
.container{
  position: relative;
  min-height: 783px;
}
.mapTop{
  display: flex;
  justify-content: space-between
}
.celltree{
  /* border: 1px solid #ebeef5;
  flex-grow: 0.3;
  margin-right: 10px;
  flex-basis: 130px;
  max-height: 600px;
  min-width: 230px;
  overflow-y: scroll; */
}
.map{
   border: 1px solid #ebeef5;
   flex-grow: 3;
   flex-basis: 500px;
}
.detailMsg{
   border: 1px solid #ebeef5;
   flex-grow: 0.1;
   margin-left: 10px;
   flex-basis: 180px;
}
.detailMsg .el-table{
  padding-left: 0px;
  padding-right: 0px;
}
.mapMiddle{
  position: relative;
}
.mapMiddle ul{
  margin-left: 80px;
  margin-right: 80px;
  max-width: 1040px;
  max-height: 104px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
}
.mapMiddle ul li{
  list-style: none;
  float: left;
  margin-left: 20px;
  height: 104px;
  box-sizing: border-box;
}
.mapMiddle ul li:hover{
  border: 2px solid rgb(0, 153, 255)
}
.active{
  border: 2px solid rgb(0, 153, 255)
}
.mapMiddle ul li img{
  /* width: 150px; */
  /* width: 231px; */
  height: 100px;
}
.icon:hover{
  background-color: #e6e6e6;
  color: white;
}
.icon{
  width: 50px;
  height: 100px;
  color: #ccc;
  font-size: 40px;
  line-height: 100px;
  position: absolute
}
.left{
  left: 10px;
}
.right{
  right: 10px;
  top: 0px
}
.clear{
  clear: both;
}
.mapBottom{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 20px;
}
.bottomLeft,.bottomRight{
  border: 1px solid #ebeef5;
  width: 49%
}
.bottomLeft img{
  width: 100%;
}
.bottomRight {
  position: relative
}
.scene{
  position: relative;
  top: -10px;
}
.object{
  margin-top: 10px;
  margin-bottom: 10px;
}
.bottomRight .tittle{
  top: 0px;
  left: 0px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: paleturquoise;
}
.msg,.present{
  list-style: none;
}
.msg li{
  font-size: 15px;
}
.msg li,.present li{
  margin-bottom: 10px
}
.present li{
  height: 21px;
  line-height: 21px;
}
.bottomRight .msg{
  float: left;
  width: 20%;
}
.bottomRight .present{
  float: right;
  width: 80%;
}
</style>
<style>
.detailMsg .el-table th{
  background-color: #007AFF
}
.detailMsg .el-table__row td{
  border-left: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5
}
</style>
