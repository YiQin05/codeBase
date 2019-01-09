<template>
    <div>
        <el-table
        :data="cellList"
        style="width: 100%" class="cell">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="基站ID">
                            <span>{{ props.row.bscID }}</span>
                        </el-form-item>
                        <el-form-item label="小区ID">
                            <span>{{ props.row.cellID }}</span>
                        </el-form-item>
                        <el-form-item label="小区名称">
                            <span>{{ props.row.cellName }}</span>
                        </el-form-item>
                        <el-form-item label="小区位置">
                            <span>{{ props.row.lac }}</span>
                        </el-form-item>
                        <el-form-item label="经度">
                            <span>{{ props.row.longitude }}</span>
                        </el-form-item>
                        <el-form-item label="纬度">
                            <span>{{ props.row.latitude }}</span>
                        </el-form-item>
                        <el-form-item label="海拔高度">
                            <span>{{ props.row.altitude }}</span>
                        </el-form-item>
                        <el-form-item label="下倾角">
                            <span>{{ props.row.elevationAngle }}</span>
                        </el-form-item>
                        <el-form-item label="方向角">
                            <span>{{ props.row.directAngle }}</span>
                        </el-form-item>
                        <el-form-item label="覆盖方向角起点">
                            <span>{{ props.row.coverAngleBegin }}</span>
                        </el-form-item>
                        <el-form-item label="覆盖方向角终点">
                            <span>{{ props.row.coverAngleEnd }}</span>
                        </el-form-item>
                        <el-form-item label="覆盖距离">
                            <span>{{ props.row.coverDistance }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
            label="基站ID"
            width="70"
            prop="bscID">
            </el-table-column>
            <el-table-column
            label="小区ID"
            width="70"
            prop="cellID">
            </el-table-column>
            <el-table-column
            label="小区名称"
            width="80"
            prop="cellName">
            </el-table-column>
            <el-table-column
            label="小区位置"
            width="80"
            prop="lac">
            </el-table-column>
            <el-table-column
            label="经度"
            width="70"
            prop="longitude">
            </el-table-column>
            <el-table-column
            label="纬度"
            width="70"
            prop="latitude">
            </el-table-column>
            <el-table-column
            label="海拔高度"
            width="80"
            prop="altitude">
            </el-table-column>
            <el-table-column
            label="下倾角"
            width="70"
            prop="elevationAngle">
            </el-table-column>
            <el-table-column
            label="方向角"
            width="70"
            prop="directAngle">
            </el-table-column>
            <el-table-column
            label="覆盖方向角起点"
            width="130"
            prop="coverAngleBegin">
            </el-table-column>
            <el-table-column
            label="覆盖方向角终点"
            width="130"
            prop="coverAngleEnd">
            </el-table-column>
            <el-table-column
            label="覆盖距离"
            width="80"
            prop="coverDistance">
            </el-table-column>
            <el-table-column label="操作"
            width="150">
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
      cellList: [],
      userID: ''
    }
  },
  mounted () {
    this.userID = this.getCookie('userID')
    this.toCellList()
  },
  methods: {
    toCellList () {
      alert('哈哈哈')
      let params = new URLSearchParams()
      let path = this.setAPIPath('cell')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              this.cellList.push(i)
              this.openMsg('失败，错误码：' + response.data.code, 'error', this)
            }
          } else {
            this.openMsg('失败，错误码：' + response.data.code, 'error', this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleEdit (index, row) {
      this.setStorage(index, row)
      this.$router.push({
        name: 'cellEdit',
        params: {
          userID: this.userID,
          index: index
        }
      })
    },
    handleDelete (index, row) {
      let params = new URLSearchParams()
      let path = this.setAPIPath('cell/' + row.bscID + '/' + row.cellID)
      this.$axios
        .delete(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.openMsg('删除成功！', 'success', this)
            this.cellList.length = 0
            this.toCellList()
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

<style >
.el-tabs--border-card > .el-tabs__content {
  padding: 0px;
}
</style>
