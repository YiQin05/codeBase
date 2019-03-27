<template>
    <div class="contain mission inputControl">
        <el-form :inline="true" ref="form1" :model="formInline" :rules="rules"  size="mini" label-width="120px" class="formStyle" >
            <!-- int类型 -->
            <el-form-item label="小区" prop="bscIDCellId">
              <el-cascader v-model="formInline.bscIDCellId" placeholder="请选择小区"
                :options="options"
                change-on-select
                @change="change">
              </el-cascader>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="任务名称" prop="taskName">
                <el-input v-model="formInline.taskName"></el-input>
            </el-form-item>
             <!-- double类型 -->
            <el-form-item label="拍摄经度" prop="takePhotoLongitude">
                <el-input v-model="formInline.takePhotoLongitude" placeholder="单位：度"></el-input>
            </el-form-item>
             <!-- double类型 -->
            <el-form-item label="拍摄纬度" prop="takePhotoLatitude">
                <el-input v-model="formInline.takePhotoLatitude" placeholder="单位：度"></el-input>
            </el-form-item>
             <!-- double类型 -->
            <el-form-item label="海拔高度" prop="takePhotoAltitude">
              <el-input v-model="formInline.takePhotoAltitude" placeholder="单位：米"></el-input>
            </el-form-item>
            <!-- float类型 -->
            <el-form-item label="拍摄下倾角" prop="takePhotoElevationAngle">
              <el-input v-model="formInline.takePhotoElevationAngle" placeholder="单位：度"></el-input>
            </el-form-item>
            <!-- float类型 -->
            <el-form-item label="方向角" prop="directAngle">
              <el-input v-model="formInline.directAngle" placeholder="单位：度" disabled></el-input>
                <!-- <el-select v-model.number="formInline.takePhotoDirectAngleRotate" placeholder="请选择旋转角度">
                    <el-option label="15.5" value=15.5></el-option>
                    <el-option label="20" value=20></el-option>
                </el-select> -->
            </el-form-item>
            <!-- float类型 -->
            <el-form-item label="拍摄方向角起点" prop="takePhotoDirectAngleBegin">
                <el-input v-model="formInline.takePhotoDirectAngleBegin" placeholder="单位：度"></el-input>
            </el-form-item>
            <!-- float类型 -->
            <el-form-item label="拍摄方向角终点" prop="takePhotoDirectAngleEnd">
                <el-input v-model="formInline.takePhotoDirectAngleEnd" placeholder="单位：度"></el-input>
            </el-form-item>
          <!-- float类型 -->
            <el-form-item label="拍摄偏移角" prop="takePhotoDirectAngleRotate">
              <el-input v-model="formInline.takePhotoDirectAngleRotate" placeholder="单位：度"></el-input>
                <!-- <el-select v-model.number="formInline.takePhotoDirectAngleRotate" placeholder="请选择旋转角度">
                    <el-option label="15.5" value=15.5></el-option>
                    <el-option label="20" value=20></el-option>
                </el-select> -->
            </el-form-item>
             <!-- int类型 -->
            <el-form-item label="拍摄图片数" prop="takePhotoNum">
                <el-input v-model="formInline.takePhotoNum" disabled></el-input>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="接收人" prop="taskConsumerID">
                <el-select v-model="formInline.taskConsumerID" placeholder="请选择">
                  <el-option
                    v-for="item in reciverList"
                    :key="item.userID"
                    :label="item.userID"
                    :value="item.userID">
                  </el-option>
                </el-select>
            </el-form-item>
            <!-- 时间戳 -->
          <el-form-item label="计划完成日期" prop="taskPlanCompleteTime" >
              <el-date-picker type="date" placeholder="选择日期" v-model="formInline.taskPlanCompleteTime" v-if="!flag"></el-date-picker>
              <el-input v-model="formInline.taskPlanCompleteTime" v-if="flag"></el-input>
          </el-form-item>
        </el-form>
        <div class="enquierBut">
          <el-button @click="clear" size="small" >重置</el-button>
          <el-button size="mini" type="primary" @click="triggerClick">提交</el-button>
        </div>
          <div v-if="isOpenMap" style="border:solid lightblue 1px;height:100%;marginTop:10px">
            <el-amap vid="amapCameraMission" :events="mapEvents" :center="center" :zoom="zoom">
                <el-amap-marker :position="positionMission"></el-amap-marker>
            </el-amap>
          </div>
    </div>
</template>

<script>
export default {
  inject: ['reload'],
  data () {
    var numberOnly = (rule, value, callback) => {
      if (isNaN(this.formInline[rule.fullField])) {
        callback(new Error('只能填数字！'))
      } else if (parseFloat(this.formInline[rule.fullField]) < 0) {
        callback(new Error('不能小于0！'))
      } else {
        this.formInline[rule.fullField] = parseFloat(this.formInline[rule.fullField])
        callback()
      }
    }
    var checkDirectAngleEnd = (rule, value, callback) => {
      if (isNaN(this.formInline[rule.fullField])) {
        callback(new Error('只能填数字！'))
      } else if (parseFloat(this.formInline[rule.fullField]) <= parseFloat(this.formInline.takePhotoDirectAngleBegin)) {
        callback(new Error('要比方向角起点大！'))
      } else if (parseFloat(this.formInline[rule.fullField]) < 0) {
        callback(new Error('不能小于0！'))
      } else {
        this.formInline[rule.fullField] = parseFloat(this.formInline[rule.fullField])
        callback()
      }
    }
    var checkBscIDCellID = (rule, value, callback) => {
      if (this.formInline.bscIDCellId.length < 2) {
        callback(new Error('请选择具体小区！'))
      } else {
        callback()
      }
    }
    return {
      formInline: {
        taskName: '',
        bscID: '',
        cellID: '',
        takePhotoLongitude: '',
        takePhotoLatitude: '',
        takePhotoAltitude: '',
        takePhotoElevationAngle: '',
        takePhotoDirectAngleBegin: '',
        takePhotoDirectAngleEnd: '',
        takePhotoDirectAngleRotate: '',
        takePhotoNum: '',
        taskProducerID: '',
        taskProduceTime: '',
        taskConsumerID: '',
        taskPlanCompleteTime: '',
        directAngle: '',
        bscIDCellId: []
      },
      options: [],
      // formList: ['form1', 'form2', 'form3', 'form4', 'form5', 'form6', 'form7'], // 表单列表
      rules: {
        taskName: [
          { required: true, message: '不能为空！', trigger: 'blur' }
        ],
        bscIDCellId: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: checkBscIDCellID, trigger: 'blur' }
        ],
        takePhotoLongitude: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: numberOnly, trigger: 'blur' }
        ],
        takePhotoLatitude: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: numberOnly, trigger: 'blur' }
        ],
        takePhotoDirectAngleBegin: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: numberOnly, trigger: 'blur' }
        ],
        takePhotoDirectAngleEnd: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: checkDirectAngleEnd, trigger: 'blur' }
        ],
        takePhotoDirectAngleRotate: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: numberOnly, trigger: 'blur' }
        ],
        takePhotoAltitude: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: numberOnly, trigger: 'blur' }
        ],
        takePhotoElevationAngle: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: numberOnly, trigger: 'blur' }
        ],
        taskConsumerID: [
          { required: true, message: '不能为空！', trigger: 'blur' }
        ],
        taskPlanCompleteTime: [
          { required: true, message: '不能为空！', trigger: 'blur' }
        ]
      },
      zoom: 16,
      positionMission: [113.58811, 22.23263], // [113.564221, 22.370364]
      center: [], // 地图图标居中
      user: '',
      index: '',
      page: '',
      checkForm: [],
      flag: false, // 用于判断页面是任务编辑页面还是任务详情页面，任务详情页面不能对任务进行编辑
      unEdit: false, // 用于任务编辑页面的一些不能编辑项
      result: false, // 用于判断表格输入信息是否符合
      reciverList: [],
      cellList: [],
      bscList: [],
      missionList: [], // 储存所有的任务
      isOpenMap: true,
      mapEvents: {
        'click': (e) => {
          // 第一个参数是latitude，第二个是longitude
          let change = this.gcjToWgsExactly(e.lnglat.lat, e.lnglat.lng)
          let longitude = change.lon
          let latitude = change.lat
          this.formInline.takePhotoLongitude = Math.ceil(longitude * 100000) / 100000
          this.formInline.takePhotoLatitude = Math.ceil(latitude * 100000) / 100000
          this.positionMission = [e.lnglat.lng, e.lnglat.lat]
        }
      }
    }
  },
  watch: {
    AngleEnd (newVal, oldVal) {
      this.countPhotoNum()
    },
    AngleBegin (newVal, oldVal) {
      this.countPhotoNum()
    },
    AngleRotate (newVal, oldVal) {
      this.countPhotoNum()
    },
    takePhotoLongitude (newVal, oldVal) {
      if (newVal) {
        let change = this.wgsToGcj(this.takePhotoLatitude, newVal)
        let longitude = change.lon
        let latitude = change.lat
        this.positionMission = [longitude, latitude]
      }
    },
    takePhotoLatitude (newVal, oldVal) {
      if (newVal) {
        // 第一个参数是latitude，第二个是longitude
        let change = this.wgsToGcj(newVal, this.takePhotoLongitude)
        let longitude = change.lon
        let latitude = change.lat
        this.positionMission = [longitude, latitude]
      }
    }
  },
  computed: {
    AngleEnd () {
      return this.formInline.takePhotoDirectAngleEnd
    },
    AngleBegin () {
      return this.formInline.takePhotoDirectAngleBegin
    },
    AngleRotate () {
      return this.formInline.takePhotoDirectAngleRotate
    },
    takePhotoLongitude () {
      return this.formInline.takePhotoLongitude
    },
    takePhotoLatitude () {
      return this.formInline.takePhotoLatitude
    }
  },
  created () {
    this.center = this.positionMission
    this.user = this.getCookie('userID')
    this.index = this.$route.params.index
    this.page = this.$route.params.page
    if (this.page === 'missionDetail') {
      this.flag = true
      this.getMissionAbout()
    } else if (this.page === 'missionEdit') {
      this.unEdit = true
      this.getMissionEdit()
    }
    this.getReciver()
    this.getCell()
  },
  methods: {
    clear () {
      for (var i in this.formInline) {
        if (i !== 'bscIDCellId') {
          this.formInline[i] = ''
        } else {
          this.formInline[i] = []
        }
      }
    },
    change (obj) {
      if (obj[1]) {
        this.formInline.takePhotoLongitude = obj[1].longitude
        this.formInline.takePhotoLatitude = obj[1].latitude
        this.formInline.takePhotoAltitude = obj[1].altitude
        this.formInline.takePhotoElevationAngle = obj[1].elevationAngle
        this.formInline.directAngle = obj[1].directAngle
        this.formInline.taskName = obj[1].cellName
        this.formInline.takePhotoDirectAngleRotate = 20
        let angle = obj[1].directAngle
        if (angle - 60 < 0) {
          this.formInline.takePhotoDirectAngleBegin = 360 + (angle - 60)
        } else {
          this.formInline.takePhotoDirectAngleBegin = angle - 60
        }
        this.formInline.takePhotoDirectAngleEnd = obj[1].directAngle + 60
        this.countPhotoNum()
        this.formInline.taskConsumerID = this.reciverList[0].userID
        this.formInline.taskPlanCompleteTime = new Date()
      } else {
        this.formInline.takePhotoLongitude = ''
        this.formInline.takePhotoLatitude = ''
        this.formInline.takePhotoAltitude = ''
        this.formInline.takePhotoElevationAngle = ''
      }
    },
    getBscTree () { // 开始渲染基站层的树
      for (var i = 0, len = this.bscList.length; i < len; i++) {
        var obj = {}
        obj.label = this.bscList[i].bscName
        obj.value = this.bscList[i].bscID
        obj.children = this.getCellTree(this.bscList[i].bscID)
        this.options.push(obj)
      }
    },
    getCellTree (bscID) { // 渲染小区层的树
      var list = []
      for (var i = 0, len = this.cellList.length; i < len; i++) {
        var obj = {
          label: '',
          value: [],
          cell: {}
        }
        if (this.cellList[i].bscID === bscID) {
          obj.label = this.cellList[i].cellName
          // obj.cell = this.cellList[i]
          obj.value = this.cellList[i]
          list.push(obj)
        }
      }
      return list
    },
    getCell () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/cell')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              i.haveMission = false
              this.cellList.push(i)
            }
            this.getMission()
            this.getBsc()
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getBsc () { // 设置bscList里的数据
      var flag
      for (var i = 0, len = this.cellList.length; i < len; i++) {
        flag = false
        for (var j = 0, len1 = this.bscList.length; j < len1; j++) {
          if (this.cellList[i].bscID === this.bscList[j].bscID) {
            flag = true
          }
        }
        if (!flag) {
          var obj = {
            bscID: this.cellList[i].bscID,
            bscName: this.cellList[i].bscName
          }
          this.bscList.push(obj)
        }
      }
      this.getBscTree()
    },
    getReciver () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/getTakePhotoUser')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              this.reciverList.push(i)
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    countPhotoNum () {
      if (this.formInline.takePhotoDirectAngleEnd < this.formInline.takePhotoDirectAngleBegin) {
        this.formInline.takePhotoNum = Math.ceil((360 + (this.formInline.takePhotoDirectAngleEnd - this.formInline.takePhotoDirectAngleBegin)) / this.formInline.takePhotoDirectAngleRotate) + 1
      } else if (this.formInline.takePhotoDirectAngleEnd === 360) {
        this.formInline.takePhotoNum = Math.ceil((this.formInline.takePhotoDirectAngleEnd - this.formInline.takePhotoDirectAngleBegin) / this.formInline.takePhotoDirectAngleRotate)
      } else {
        this.formInline.takePhotoNum = Math.ceil((this.formInline.takePhotoDirectAngleEnd - this.formInline.takePhotoDirectAngleBegin) / this.formInline.takePhotoDirectAngleRotate) + 1
      }
    },
    getMissionEdit () {
      this.formInline = this.getStorage(this.index)
    },
    getMissionAbout () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/task/' + this.user)
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            response.data.data[this.index].taskPlanCompleteTime = this.dateFormat(response.data.data[this.index].taskPlanCompleteTime, 1)
            this.formInline = response.data.data[this.index]
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    addMission () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/task')
      params.append('taskName', this.formInline.taskName) // string
      params.append('bscID', this.formInline.bscIDCellId[1].bscID) // string
      params.append('cellID', this.formInline.bscIDCellId[1].cellID) // string
      params.append('takePhotoLongitude', parseFloat(this.formInline.takePhotoLongitude)) // double
      params.append('takePhotoLatitude', parseFloat(this.formInline.takePhotoLatitude)) // double
      params.append('takePhotoAltitude', parseFloat(this.formInline.takePhotoAltitude)) // double
      params.append(
        'takePhotoElevationAngle',
        parseFloat(this.formInline.takePhotoElevationAngle) // float
      )
      params.append(
        'takePhotoDirectAngleBegin',
        parseFloat(this.formInline.takePhotoDirectAngleBegin) // float
      )
      params.append(
        'takePhotoDirectAngleEnd',
        parseFloat(this.formInline.takePhotoDirectAngleEnd) // float
      )
      params.append(
        'takePhotoDirectAngleRotate',
        parseFloat(this.formInline.takePhotoDirectAngleRotate) // float
      )
      params.append('takePhotoNum', parseInt(this.formInline.takePhotoNum)) // int
      params.append('taskProducerID', this.getCookie('userID')) // string
      params.append('taskProduceTime', parseInt(new Date().getTime() / 1000)) // int
      params.append('taskConsumerID', this.formInline.taskConsumerID) // string
      params.append('taskPlanCompleteTime', parseInt(this.formInline.taskPlanCompleteTime.getTime() / 1000)) // 时间戳
      this.$axios
        .post(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.openMsg('增加成功！', 'success', this)
            this.$emit('toTab')
            for (var i in this.formInline) {
              if (i !== 'bscIDCellId') {
                this.formInline[i] = ''
              } else {
                this.formInline[i] = []
              }
            }
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    triggerClick () {
      // 将增加任务页面表格默认都是没验证
      this.$refs.form1.validate((valid) => {
        if (valid) {
          this.addMission()
        } else {
          return false
        }
      })
      // for (var i = 0; i < this.formList.length; i++) {
      //   this.checkForm[i] = true
      // }
      // for (i = 0; i < this.formList.length; i++) {
      //   this.checkRule(this.formList[i], i)
      // }
      // this.checkForm.forEach(element => {
      //   this.result = this.result || element
      // })
      // if (!this.result) {
      //   this.addMission()
      // } else {
      //   for (var j = 0; j < this.formList.length; j++) {
      //     this.checkForm[j] = true
      //   }
      // }
      // this.result = false
    },
    // checkRule (formName, i) {
    // },
    checkCellListMission () {
      for (var i of this.cellList) {
        for (var j of this.missionList) {
          if (i.bscID === j.bscID && i.cellID === j.cellID) {
            i.haveMission = true
          }
        }
      }
    },
    getMission () {
      this.missionList.length = 0
      let params = new URLSearchParams()
      let path = this.setAPIPath('/task/' + this.user)
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.missionList = response.data.data
          }
          this.checkCellListMission()
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.formStyle {
 display: flex;
 flex-direction:row;
 flex-wrap:wrap;
 justify-content:space-between;
 padding:0 40px;
}
.contain {
  /* border: 1px solid #ebeef5; */
  margin-top: 20px;
}
.single {
  margin-right: 325px;
}
/* .contain .el-form .newItem {
  position: relative;
  margin-right: 315px;
} */
.enquierBut{
  text-align: right;
  padding: 0 53px;
}
@media screen and (max-width: 731px)  {
  .enquierBut{
    text-align: center;
  }
}
</style>
<style>
.inputControl .el-input__inner {
  width: 180px;
}
.mission .el-vue-amap-container .amap-container{
  min-height: 600px
}
.contain .el-date-editor {
  width: 180px;
}
.contain .el-input__inner{
  width: 180px;
}
.contain .el-select .el-input {
  width: 180px;
}
.el-input.is-disabled .el-input__inner{
  background-color: white
}
@media screen and (min-width: 643px)  {
  .finishTime{
    margin-left: -316px;
  }
}

</style>
