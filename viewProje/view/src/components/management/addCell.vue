<template>
    <div>
        <el-form :inline="true" ref="form1" :model="addCellList" :rules="rules" class="demo-form-inline demo-ruleForm" size="mini" label-width="120px">
            <!-- string类型 -->
            <el-form-item label="基站ID" prop="bscID">
                <el-input v-model="addCellList.bscID"></el-input>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="小区编号" prop="cellID">
                <el-input v-model="addCellList.cellID" ></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" :rules="rules" :model="addCellList" ref="form2" class="demo-form-inline demo-ruleForm" size="mini" label-width="120px">
            <!-- string类型 -->
            <el-form-item label="小区名称" prop="cellName">
                <el-input v-model="addCellList.cellName"></el-input>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="小区位置" prop="lac">
                <el-input v-model="addCellList.lac"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true"  :model="addCellList" ref="form3" :rules="rules" class="demo-form-inline demo-ruleForm" size="mini" label-width="120px">
            <!-- double -->
            <el-form-item label="经度" prop="longitude">
                <el-input v-model="addCellList.longitude"></el-input>
            </el-form-item>
            <!-- double -->
            <el-form-item label="纬度" prop="latitude">
                <el-input v-model="addCellList.latitude"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" ref="form4" :model="addCellList" :rules="rules" class="demo-form-inline  demo-ruleForm" size="mini" label-width="120px">
            <!-- double -->
            <el-form-item label="海拔高度" prop="altitude">
                <el-input v-model="addCellList.altitude"></el-input>
            </el-form-item>
            <!-- float类型 -->
            <el-form-item label="下倾角" prop="elevationAngle">
                <el-input v-model="addCellList.elevationAngle"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" ref="form5" :model="addCellList" :rules="rules" class="demo-form-inline  demo-ruleForm" size="mini" label-width="120px">
            <!-- float类型 -->
            <el-form-item label="方向角" prop="directAngle">
                <el-input v-model="addCellList.directAngle"></el-input>
            </el-form-item>
            <!-- float类型 -->
            <el-form-item label="覆盖方向角起点" prop="coverAngleBegin">
                <el-input v-model="addCellList.coverAngleBegin"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" ref="form6" :model="addCellList" :rules="rules" class="demo-form-inline  demo-ruleForm" size="mini" label-width="120px">
            <!-- float类型 -->
            <el-form-item label="覆盖方向角终点" prop="coverAngleEnd">
                <el-input v-model="addCellList.coverAngleEnd"></el-input>
            </el-form-item>
            <!-- int -->
            <el-form-item label="覆盖距离" prop="coverDistance">
                <el-input v-model="addCellList.coverDistance"></el-input>
            </el-form-item>
        </el-form>
        <el-button size="mini" type="primary" class="bottomBtn" @click="handleClick">提交</el-button>
    </div>
</template>

<script>
export default {
  data () {
    var numberOnly = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('不能为空！'))
      } else if (isNaN(this.addCellList[rule.fullField])) {
        callback(new Error('只能填数字！'))
      } else if (parseFloat(this.addCellList[rule.fullField]) < 0) {
        callback(new Error('不能小于0！'))
      } else {
        this.addCellList[rule.fullField] = parseFloat(
          this.addCellList[rule.fullField]
        )
        callback()
      }
    }
    return {
      addCellList: [
        {
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
        }
      ],
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
      user: ''
    }
  },
  mounted () {
    this.user = this.getCookie('userID')
  },
  methods: {
    handleClick () {
      // 将增加任务页面表格默认都是没验证
      for (var i = 0; i < this.formList.length; i++) {
        this.checkForm[i] = true
      }
      // 检查每个form的验证是否符合
      for (i = 0; i < this.formList.length; i++) {
        this.checkRule(this.formList[i], i)
      }
      this.checkForm.forEach(element => {
        this.result = this.result || element
      })
      if (!this.result) {
        this.cellSubmit()
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
          return false
        }
      })
    },
    cellSubmit () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('cell')
      params.append('bscID', this.addCellList.bscID)
      params.append('cellID', this.addCellList.cellID)
      params.append('cellName', this.addCellList.cellName)
      params.append('lac', this.addCellList.lac)
      params.append('longitude', parseFloat(this.addCellList.longitude))
      params.append('latitude', parseFloat(this.addCellList.latitude))
      params.append('altitude', parseFloat(this.addCellList.altitude))
      params.append('elevationAngle', parseFloat(this.addCellList.elevationAngle))
      params.append('directAngle', parseFloat(this.addCellList.directAngle))
      params.append(
        'coverAngleBegin',
        parseFloat(this.addCellList.coverAngleBegin)
      )
      params.append('coverAngleEnd', parseFloat(this.addCellList.coverAngleEnd))
      params.append('coverDistance', parseInt(this.addCellList.coverDistance))
      this.$axios
        .put(path, params)
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
    stepBack () {
      this.delStorage(this.index)
      this.$router.push({
        name: 'management',
        params: {
          userID: this.user
        }
      })
    }
  }
}
</script>
<style>
.bottomBtn {
  margin-bottom: 10px;
}
</style>
