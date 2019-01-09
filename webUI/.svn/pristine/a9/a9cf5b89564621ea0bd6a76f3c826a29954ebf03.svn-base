<template>
    <div>
        <el-form ref="form1" :model="addUserList" :rules="rules" class="demo-form-inline demo-ruleForm addUser" size="mini" label-width="120px">
            <!-- string类型 -->
            <el-form-item label="用户ID" prop="userID">
                <el-input v-model="addUserList.userID"></el-input>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="用户类型" prop="userType">
                <el-select v-model="addUserList.userType" placeholder="请选择活动区域">
                    <el-option label="管理员" value="管理员"></el-option>
                    <el-option label="发布人员" value="发布人员"></el-option>
                    <el-option label="拍摄人员" value="拍摄人员"></el-option>
                </el-select>
            </el-form-item>
            <!-- string类型 -->
            <el-form-item label="用户名" prop="UserName">
                <el-input v-model="addUserList.UserName"></el-input>
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
        </el-form>
        <div class="bottomBtn">
            <el-button size="mini" type="primary" @click="handleSubmit">提交</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      addUserList: [
        {
          userID: '',
          userType: '',
          UserName: '',
          mobile: '',
          email: '',
          location: ''
        }
      ],
      rules: {
        userID: [{ required: true, message: '不能为空！', trigger: 'blur' }]
      },
      logInUser: ''
    }
  },
  mounted () {
    this.logInUser = this.getCookie('userID')
  },
  methods: {
    handleSubmit () {
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
          } else {
            this.openMsg('失败，错误码：' + response.data.code, 'error', this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.el-select{
    width: 100%
}
.addUser {
  margin-top: 10px;
  max-width: 400px;
  margin-left: 15%;
}
</style>
