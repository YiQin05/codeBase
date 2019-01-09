<template>
    <div class="container">
        <el-form ref="form1" :model="addUserList" :rules="rules" class="demo-form-inline demo-ruleForm aditUser inputControl" size="mini" label-width="90px">
            <!-- string类型 -->
            <el-form-item label="用户ID" prop="userID">
                <el-input v-model="addUserList.userID"></el-input>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="用户类型" prop="userType">
                <el-select v-model="addUserList.userType" placeholder="请选择用户类型">
                    <el-option label="发布人员" value="发布人员"></el-option>
                    <el-option label="拍摄人员" value="拍摄人员"></el-option>
                </el-select>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="addUserList.userName"></el-input>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="电话号码" prop="mobile">
                <el-input v-model="addUserList.mobile"></el-input>
            </el-form-item>
            <!-- double -->
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="addUserList.email"></el-input>
            </el-form-item>
            <el-form-item label="归属地" prop="location">
                <el-input v-model="addUserList.location"></el-input>
            </el-form-item>
            <div class="userButton">
              <el-button size="mini" type="info" class="submitBtn" @click="clear">重置</el-button>
              <el-button size="mini" type="primary"  @click="handleSubmit">提交</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      addUserList: {
        userID: '',
        userType: '',
        userName: '',
        mobile: '',
        email: '',
        location: ''
      },
      rules: {
        userID: [{ required: true, message: '不能为空！', trigger: 'blur' }],
        userType: [{ required: true, message: '不能为空！', trigger: 'blur' }],
        email: [{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]
      },
      logInUser: '',
      index: '', // 传递过的行 数字
      userFlag: false
    }
  },
  created () {
  },
  mounted () {
    // this.logInUser = this.getCookie('userID')
    // this.index = this.$route.params.index
    // this.addUserList = this.getStorage(this.index)
  },
  methods: {
    handleSubmit () {
      this.$refs.form1.validate(valid => {
        if (valid) {
          this.addUser()
        } else {
          return false
        }
      })
    },
    addUser () {
      var type
      switch (this.addUserList.userType) {
        case '管理员':
          type = 0
          break
        case '发布人员':
          type = 1
          break
        case '拍摄人员':
          type = 2
          break
        default:
          console.log('错误')
          break
      }
      let params = new URLSearchParams()
      let path = this.setAPIPath('user')
      params.append('userID', this.addUserList.userID)
      params.append('userType', type)
      params.append('userName', this.addUserList.userName)
      params.append('mobile', this.addUserList.mobile)
      params.append('email', this.addUserList.email)
      params.append('location', this.addUserList.location)
      this.$axios
        .post(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.openMsg('增加成功！', 'success', this)
            this.$emit('showFlag', this.userFlag)
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    clear () {
      for (var i in this.addUserList) {
        this.addUserList[i] = ''
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 10px;
}
.el-select{
    width: 100%
}
.aditUser {
  max-width: 287px;
  margin: 0 auto;
  margin-top: 10px;
}
.userButton {
  text-align: right;
  margin-right: 10px;
}
</style>
