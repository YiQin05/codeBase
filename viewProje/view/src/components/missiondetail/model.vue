<template>
    <div class="contain">
        <el-form :inline="true" ref="form1" :model="formInline" :rules="rules" class="demo-form-inline missionStyle demo-ruleForm" size="mini" label-width="120px" :disabled="flag">
            <el-form-item label="任务名称" prop="taskName">
                <el-input v-model="formInline.taskName"></el-input>
            </el-form-item>
            <el-form-item label="拍摄经度" prop="takePhotoLongitude">
                <el-input v-model="formInline.takePhotoLongitude"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" :rules="rules" :model="formInline" ref="form2" class="demo-form-inline missionStyle demo-ruleForm" size="mini" label-width="120px" :disabled="flag">
            <!-- double类型 -->
            <el-form-item label="拍摄维度" prop="takePhotoLatitude">
                <el-input v-model="formInline.takePhotoLatitude"></el-input>
            </el-form-item>
            <!-- double类型 -->
            <el-form-item label="海拔高度" prop="takePhotoAltitude">
                <el-input v-model="formInline.takePhotoAltitude"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" ref="form3" :model="formInline" :rules="rules" class="demo-form-inline missionStyle demo-ruleForm" size="mini" label-width="120px" :disabled="flag">
            <!-- float类型 -->
            <el-form-item label="拍摄下倾角" prop="takePhotoElevationAngle">
                <el-select v-model="formInline.takePhotoElevationAngle" placeholder="请选择活动区域">
                    <el-option label="45.5" value=45.5></el-option>
                    <el-option label="60.0" value=60.0></el-option>
                </el-select>
            </el-form-item>
            <!-- float类型 -->
            <el-form-item label="拍摄方向角起点" prop="takePhotoDirectAngleBegin">
                <el-input v-model="formInline.takePhotoDirectAngleBegin"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true"  :model="formInline" ref="form4" :rules="rules" class="demo-form-inline missionStyle demo-ruleForm" size="mini" label-width="120px" :disabled="flag">
            <!-- float类型 -->
            <el-form-item label="拍摄方向角终点" prop="takePhotoDirectAngleEnd">
                <el-input v-model="formInline.takePhotoDirectAngleEnd"></el-input>
            </el-form-item>
            <!-- float类型 -->
            <el-form-item label="拍摄偏移角" prop="takePhotoDirectAngleRotate">
                <el-select v-model.number="formInline.takePhotoDirectAngleRotate" placeholder="请选择旋转角度">
                    <el-option label="15.5" value=15.5></el-option>
                    <el-option label="20" value=20></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-form :inline="true" :model="formInline" ref="form5" :rules="rules" class="demo-form-inline missionStyle demo-ruleForm" size="mini" label-width="120px" :disabled="flag">
            <!-- int类型 -->
            <el-form-item label="拍摄图片数" prop="takePhotoNum">
                <el-input v-model="formInline.takePhotoNum" disabled="true"></el-input>
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
        </el-form>
        <el-form :inline="true" ref="form6" :model="formInline" :rules="rules" class="demo-form-inline secondForm missionStyle single demo-ruleForm" size="mini" label-width="120px" :disabled="flag">      
            <!-- 时间戳 -->
            <el-form-item label="完成日期" prop="taskPlanCompleteTime">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.taskPlanCompleteTime" v-if="!flag"></el-date-picker>
                <el-input v-model="formInline.taskPlanCompleteTime" v-if="flag"></el-input>
            </el-form-item>
        </el-form>
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
        taskPlanCompleteTime: ''
      },
      formList: ['form1', 'form2', 'form3', 'form4', 'form5', 'form6'], // 表单列表
      rules: {
        taskName: [
          { required: true, message: '不能为空！', trigger: 'blur' }
        ],
        bscID: [
          { required: true, message: '不能为空！', trigger: 'blur' }
        ],
        cellID: [
          { required: true, message: '不能为空！', trigger: 'blur' }
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
          { required: true, message: '不能为空！', trigger: 'blur' }
        ],
        takePhotoAltitude: [
          { required: true, message: '不能为空！', trigger: 'blur' }
        ],
        takePhotoElevationAngle: [
          { required: true, message: '不能为空！', trigger: 'blur' }
        ],
        taskConsumerID: [
          { required: true, message: '不能为空！', trigger: 'blur' }
        ],
        taskPlanCompleteTime: [
          { required: true, message: '不能为空！', trigger: 'blur' }
        ]
      },
      user: '',
      index: '',
      page: '',
      checkForm: [],
      flag: false, // 用于判断页面是任务编辑页面还是任务详情页面，任务详情页面不能对任务进行编辑
      unEdit: false, // 用于任务编辑页面的一些不能编辑项
      result: false, // 用于判断表格输入信息是否符合
      reciverList: [],
      cellList: [],
      bscList: []
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
    }
  },
  created () {
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
    getCell () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('cell')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              this.cellList.push(i)
            }
            this.getBsc()
          } else {
            console.log('错误码：' + response.data.code)
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
    },
    getReciver () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('getTakePhotoUser')
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
        this.formInline.takePhotoNum = 0
      } else {
        this.formInline.takePhotoNum = Math.ceil((this.formInline.takePhotoDirectAngleEnd - this.formInline.takePhotoDirectAngleBegin) / this.formInline.takePhotoDirectAngleRotate)
      }
    },
    getMissionEdit () {
      this.formInline = this.getStorage(this.index)
    },
    getMissionAbout () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('task/' + this.user)
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            response.data.data[this.index].taskPlanCompleteTime = this.dateFormat(response.data.data[this.index].taskPlanCompleteTime)
            this.formInline = response.data.data[this.index]
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    addMission () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('task')
      params.append('taskName', this.formInline.taskName) // string
      params.append('bscID', this.formInline.bscID) // string
      params.append('cellID', this.formInline.cellID) // string
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
            this.openMsg('提交成功！', 'success', this)
          } else {
            this.openMsg('失败，错误码：' + response.data.code, 'error', this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    triggerClick () {
      // 将增加任务页面表格默认都是没验证
      for (var i = 0; i < this.formList.length; i++) {
        this.checkForm[i] = true
      }
      for (i = 0; i < this.formList.length; i++) {
        this.checkRule(this.formList[i], i)
      }
      this.checkForm.forEach(element => {
        this.result = this.result || element
      })
      if (!this.result) {
        this.addMission()
      } else {
        for (var j = 0; j < this.formList.length; j++) {
          this.checkForm[j] = true
        }
      }
      this.result = false
    },
    checkRule (formName, i) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.checkForm[i] = false
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.contain {
  border: 1px solid #ebeef5;
  margin-top: 20px;
}
.single {
  margin-right: 317px;
}
/* .contain .el-form .newItem {
  position: relative;
  margin-right: 315px;
} */
</style>
<style>
.contain .el-date-editor {
  width: 180px;
}
.contain .el-select .el-input {
  width: 180px;
}
.el-input.is-disabled .el-input__inner{
  background-color: white
}
</style>
