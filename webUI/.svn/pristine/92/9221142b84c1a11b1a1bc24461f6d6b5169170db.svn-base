<template>
    <div>
        <el-table
            :data="executorList"
            style="width: 100%">
            <el-table-column
            label="用户ID(userID)"
            width="140"
            prop="userID">
            </el-table-column>
            <el-table-column
            label="用户类型(userType)"
            width="160"
            prop="userType">
            </el-table-column>
            <el-table-column
            label="用户名称(userName)"
            width="160"
            prop="userName">
            </el-table-column>
            <el-table-column
            label="手机号码(mobile)"
            width="160"
            prop="mobile">
            </el-table-column>
            <el-table-column
            label="邮箱(email)"
            width="160"
            prop="email">
            </el-table-column>
            <el-table-column
            label="定位(location)"
            width="130"
            prop="location">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      executorList: []
    }
  },
  mounted () {
    this.getExecutor()
  },
  methods: {
    getExecutor () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('consumerUser')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              this.executorList.push(i)
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
