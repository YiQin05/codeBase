<template>
    <div>
        <h2 class="title">小区编辑</h2>
        <el-form :inline="true" ref="form1" :model="editCell" :rules="rules" class="demo-form-inline demo-ruleForm" size="mini" label-width="120px">
            <!-- string类型 -->
            <el-form-item label="基站ID" prop="bscID">
                <el-input v-model="editCell.bscID"></el-input>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="小区ID" prop="cellID">
                <el-input v-model="editCell.cellID" ></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" :rules="rules" :model="editCell" ref="form2" class="demo-form-inline demo-ruleForm" size="mini" label-width="120px">
            <!-- string类型 -->
            <el-form-item label="小区名称" prop="cellName">
                <el-input v-model="editCell.cellName"></el-input>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="小区位置" prop="lac">
                <el-input v-model="editCell.lac"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true"  :model="editCell" ref="form3" :rules="rules" class="demo-form-inline demo-ruleForm" size="mini" label-width="120px">
            <!-- double -->
            <el-form-item label="经度" prop="longitude">
                <el-input v-model="editCell.longitude"></el-input>
            </el-form-item>
            <!-- double -->
            <el-form-item label="纬度" prop="latitude">
                <el-input v-model="editCell.latitude"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" ref="form4" :model="editCell" :rules="rules" class="demo-form-inline  demo-ruleForm" size="mini" label-width="120px">
            <!-- double -->
            <el-form-item label="海拔高度" prop="altitude">
                <el-input v-model="editCell.altitude"></el-input>
            </el-form-item>
            <!-- float类型 -->
            <el-form-item label="下倾角" prop="elevationAngle">
                <el-input v-model="editCell.elevationAngle"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" ref="form5" :model="editCell" :rules="rules" class="demo-form-inline  demo-ruleForm" size="mini" label-width="120px">
            <!-- float类型 -->
            <el-form-item label="方向角" prop="directAngle">
                <el-input v-model="editCell.directAngle"></el-input>
            </el-form-item>
            <!-- float类型 -->
            <el-form-item label="覆盖方向角起点" prop="coverAngleBegin">
                <el-input v-model="editCell.coverAngleBegin"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" ref="form6" :model="editCell" :rules="rules" class="demo-form-inline  demo-ruleForm" size="mini" label-width="120px">
            <!-- float类型 -->
            <el-form-item label="覆盖方向角终点" prop="coverAngleEnd">
                <el-input v-model="editCell.coverAngleEnd"></el-input>
            </el-form-item>
            <!-- int -->
            <el-form-item label="覆盖距离" prop="coverDistance">
                <el-input v-model="editCell.coverDistance"></el-input>
            </el-form-item>
        </el-form>
        <el-button size="mini" type="primary" class="bottomBtn" @click="handleClick">提交</el-button>
        <el-button size="mini" type="info" class="bottomBtn" @click="stepBack">返回</el-button>
    </div>
</template>

<script>
export default {
  data () {
    var numberOnly = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('不能为空！'))
      } else if (isNaN(this.editCell[rule.fullField])) {
        callback(new Error('只能填数字！'))
      } else if (parseFloat(this.editCell[rule.fullField]) < 0) {
        callback(new Error('不能小于0！'))
      } else {
        this.editCell[rule.fullField] = parseFloat(
          this.editCell[rule.fullField]
        )
        callback()
      }
    }
    return {
      editCell: {},
      checkForm: [],
      result: false, // 用于判断表格输入信息是否符合
      rules: {
        bscID: [{ required: true, message: '不能为空！', trigger: 'blur' }],
        cellID: [{ required: true, message: '不能为空！', trigger: 'blur' }],
        cellName: [{ required: true, message: '不能为空！', trigger: 'blur' }],
        lac: [{ required: true, message: '不能为空！', trigger: 'blur' }],
        longitude: [{ validator: numberOnly, trigger: 'blur' }],
        latitude: [{ validator: numberOnly, trigger: 'blur' }],
        altitude: [{ validator: numberOnly, trigger: 'blur' }],
        elevationAngle: [{ validator: numberOnly, trigger: 'blur' }],
        directAngle: [{ validator: numberOnly, trigger: 'blur' }],
        coverAngleBegin: [{ validator: numberOnly, trigger: 'blur' }],
        coverAngleEnd: [{ validator: numberOnly, trigger: 'blur' }],
        coverDistance: [{ validator: numberOnly, trigger: 'blur' }]
      },
      formList: ['form1', 'form2', 'form3', 'form4', 'form5', 'form6'], // 表单列表
      user: '',
      index: ''
    }
  },
  mounted () {
    this.user = this.getCookie('userID')
    this.index = this.$route.params.index
    this.editCell = this.getStorage(this.index)
    console.log('回答UK拉数据对')
    console.log(this.editCell)
  },
  methods: {
    handleClick () {
      // 将增加任务页面表格默认都是没验证
      for (var i = 0; i < this.formList.length; i++) {
        this.checkForm[i] = true
      }
      // 对每个表格进行规制检验
      for (i = 0; i < this.formList.length; i++) {
        this.checkRule(this.formList[i], i)
      }
      this.checkForm.forEach(element => {
        this.result = this.result || element
      })
      if (!this.result) {
        this.checkChange()
      } else {
        for (var j = 0; j < this.formList.length; j++) {
          this.checkForm[j] = true
        }
      }
      this.result = false
    },
    checkRule (formName, i) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.checkForm[i] = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    checkChange () {
      var storageForm = this.getStorage(this.index)
      var changeFlag = false // 用于检测是否有修改
      for (var obj in this.editCell) {
        for (var obj1 in storageForm) {
          if (obj === obj1 && storageForm[obj1] !== this.editCell[obj]) {
            changeFlag = true
            this.cellSubmit()
            break
          }
        }
      }
      if (!changeFlag) {
        alert('请修改后再提交！')
      }
    },
    cellSubmit () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('cell')
      // let path = 'http://172.16.0.83:5000/cell'
      params.append('bscID', this.editCell.bscID)
      params.append('cellID', this.editCell.cellID)
      params.append('cellName', this.editCell.cellName)
      params.append('lac', this.editCell.lac)
      params.append('longitude', parseFloat(this.editCell.longitude))
      params.append('latitude', parseFloat(this.editCell.latitude))
      params.append('altitude', parseFloat(this.editCell.altitude))
      params.append('elevationAngle', parseFloat(this.editCell.elevationAngle))
      params.append('directAngle', parseFloat(this.editCell.directAngle))
      params.append(
        'coverAngleBegin',
        parseFloat(this.editCell.coverAngleBegin)
      )
      params.append('coverAngleEnd', parseFloat(this.editCell.coverAngleEnd))
      params.append('coverDistance', parseInt(this.editCell.coverDistance))
      this.$axios
        .put(path, params)
        .then(response => {
          console.log(response)
          if (response.data.code === 0) {
            this.openMsg('提交成功！', 'success', this)
            console.log(response)
          } else {
            this.openMsg('失败，错误码：' + response.data.code, 'error', this)
          }
        })
        .catch(error => {
          console.log('错误！')
          console.log(error)
        })
    },
    stepBack () {
      this.delStorage(this.index)
      this.$router.push({
        name: 'system',
        params: {
          userID: this.user
        }
      })
    }
  }
}
</script>
<style>
.title {
  margin-top: 10px;
  margin-bottom: 20px;
}
.bottomBtn {
  margin-bottom: 10px;
}
</style>

<style scoped>
</style>
