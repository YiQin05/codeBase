<template>
    <div>
        <el-table
            :data="userList"
            style="width: 100%"
            size="small">
            <el-table-column
            label="用户ID"
            width="110"
            prop="userID">
            </el-table-column>
            <el-table-column
            label="用户类型"
            width="110"
            prop="userType">
            </el-table-column>
            <el-table-column
            label="用户名称"
            width="110"
            prop="userName">
            </el-table-column>
            <el-table-column
            label="手机号码"
            width="150"
            prop="mobile">
            </el-table-column>
            <el-table-column
            label="邮箱"
            width="190"
            prop="email">
            </el-table-column>
            <el-table-column
            label="定位"
            width="150"
            prop="location">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-dialog title="用户编辑" :visible.sync="visible">
          <div class="thisContain">
            <el-form ref="form" :model="addUserList" :rules="rules" class="demo-form-inline demo-ruleForm aditUser" size="mini" label-width="90px">
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
                <el-button size="mini" type="primary" @click="checkRule">提交</el-button>
                <el-button size="mini" type="info" @click="clear">清空</el-button>
            </div>
          </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      userList: [],
      user: '',
      visible: false,
      currentList: {},
      addUserList: {
        userID: '',
        userName: '',
        userType: '',
        mobile: '',
        location: '',
        email: ''
      },
      rules: {
        userID: [{ required: true, message: '不能为空！', trigger: 'blur' }]
      }
    }
  },
  mounted () {
    this.getUserList()
    this.user = this.getCookie('userID')
  },
  methods: {
    checkRule () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmit()
        } else {
          return false
        }
      })
    },
    handleSubmit () {
      var type
      var flag = true
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
      for (var i in this.currentList) {
        if (this.currentList[i] !== this.addUserList[i]) {
          flag = false
        }
      }
      if (flag) {
        this.openMsg('请修改后再提交', 'error', this)
      } else {
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
              this.visible = false
              this.getUserList()
            } else {
              this.openMsg('失败，错误码：' + response.data.code, 'error', this)
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    handleEdit (index, row) {
      console.log(row)
      for (var i in row) {
        this.addUserList[i] = row[i]
        this.currentList[i] = row[i]
      }
      this.visible = true
    },
    clear () {
      for (var i in this.addUserList) {
        this.addUserList[i] = ''
      }
    },
    handleDelete (index, row) {
      let params = new URLSearchParams()
      let path = this.setAPIPath('user/' + row.userID)
      this.$axios
        .delete(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.openMsg('修改成功！', 'success', this)
            this.userList.length = 0
            this.getUserList()
          } else {
            this.openMsg('失败，错误码：' + response.data.code, 'error', this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getUserList () {
      this.userList.length = 0
      let params = new URLSearchParams()
      let path = this.setAPIPath('user')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              switch (i.userType) {
                case 0:
                  i.userType = '管理员'
                  break
                case 1:
                  i.userType = '发布人员'
                  break
                case 2:
                  i.userType = '拍摄人员'
                  break
                default:
                  alert('错误！')
                  break
              }
              this.userList.push(i)
            }
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
.thisContain {
  max-width: 287px;
  margin: 0 auto
}
.bottomBtn{
  text-align: right
}
</style>
