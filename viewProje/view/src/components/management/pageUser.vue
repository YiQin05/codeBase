<template>
    <div>
        <el-table
            :data="userList"
            style="width: 100%">
            <el-table-column
            label="用户ID(userID)"
            width="130"
            prop="userID">
            </el-table-column>
            <el-table-column
            label="用户类型(userType)"
            width="130"
            prop="userType">
            </el-table-column>
            <el-table-column
            label="用户名称(userName)"
            width="130"
            prop="userName">
            </el-table-column>
            <el-table-column
            label="手机号码(mobile)"
            width="130"
            prop="mobile">
            </el-table-column>
            <el-table-column
            label="邮箱(email)"
            width="130"
            prop="email">
            </el-table-column>
            <el-table-column
            label="定位(location)"
            width="130"
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
    </div>
</template>

<script>
export default {
  data () {
    return {
      userList: [],
      user: ''
    }
  },
  mounted () {
    this.getUserList()
    this.user = this.getCookie('userID')
  },
  methods: {
    handleEdit (index, row) {
      this.setStorage(index, row)
      this.$router.push({
        name: 'editUser',
        params: {
          userID: this.user,
          index: index
        }
      })
    },
    handleDelete (index, row) {
      let params = new URLSearchParams()
      let path = this.setAPIPath('user/' + row.userID)
      this.$axios
        .delete(path, params)
        .then(response => {
          if (response.data.code === 0) {
            alert('修改成功！')
            this.userList.length = 0
            this.getUserList()
          } else {
            alert('错误码：' + response.data.code)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getUserList () {
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
                  alert('error!')
                  break
              }
              this.userList.push(i)
            }
          } else {
            alert('错误码：' + response.data.code)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
