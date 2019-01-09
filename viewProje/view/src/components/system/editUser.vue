<template>
    <div class="container thisContain">
        <h2 class="title">用户编辑</h2>
        <el-form ref="form1" :model="addUserList" :rules="rules" class="demo-form-inline demo-ruleForm aditUser" size="mini" label-width="90px">
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
        </el-form>
        <div class="bottomBtn">
            <el-button size="mini" type="primary" @click="handleSubmit">提交</el-button>
            <el-button size="mini" type="info" @click="stepBack">返回</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      addUserList: {},
      rules: {
        userID: [{ required: true, message: '不能为空！', trigger: 'blur' }]
      },
      logInUser: '',
      index: '' // 传递过的行 数字
    }
  },
  mounted () {
    this.logInUser = this.getCookie('userID')
    this.index = this.$route.params.index
    this.addUserList = this.getStorage(this.index)
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
        .put(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.openMsg('修改成功！', 'success', this)
            this.setStorage(this.index, this.addUserList)
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
        name: 'system',
        params: {
          userID: this.logInUser
        }
      })
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
  max-width: 400px;
  margin: 0 auto;
  margin-top: 10px;
}
.thisContain{
  margin-bottom: 20px;
}
</style>
