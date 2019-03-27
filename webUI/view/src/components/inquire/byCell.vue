<template>
    <div class="byCellSerch">
        <div class="treeClass">
          <el-tree
            :data="cellTree"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            @check-change="getCheckedNodes"
            :props="defaultProps">
            <span class="span-ellipsis" slot-scope="{ node }">
              <span :title="node.label">{{ node.label }}</span>
            </span>
          </el-tree>
        </div>
        <!-- <div class="buttons">
        <el-button @click="getCheckedNodes" size="mini" type="primary">获取照片</el-button>
        <el-button @click="resetChecked" size="mini">重置选择</el-button>
        </div> -->
        <div class="cellResult">
          <el-table
            :data="pictureList"
            style="width: 100%"
            size="small">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="照片ID">
                      <span>{{ props.row.fileID }}</span>
                  </el-form-item>
                  <el-form-item label="照片角度标号">
                      <span>{{ props.row.angleIdx }}</span>
                  </el-form-item>
                  <!-- <el-form-item label="任务ID">
                      <span>{{ props.row.taskID }}</span>
                  </el-form-item>
                  <el-form-item label="经度">
                      <span>{{ props.row.picLongitude }}</span>
                  </el-form-item>
                  <el-form-item label="纬度">
                      <span>{{ props.row.picLatitude }}</span>
                  </el-form-item> -->
                  <el-form-item label="海拔高度">
                      <span>{{ props.row.picAltitude }}</span>
                  </el-form-item>
                  <el-form-item label="下倾角">
                      <span>{{ props.row.picElevationAngle }}</span>
                  </el-form-item>
                  <!-- <el-form-item label="方向角">
                      <span>{{ props.row.picDirectAngle }}</span>
                  </el-form-item> -->
                  <!-- <el-form-item label="拍摄时间">
                      <span>{{ props.row.picTime }}</span>
                  </el-form-item> -->
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
            label="拍摄时间"
            prop="picTime">
            </el-table-column>
            <el-table-column
            label="任务ID"
            prop="taskID">
            </el-table-column>
            <el-table-column
            label="经度"
            prop="picLongitude">
            </el-table-column>
            <el-table-column
            label="纬度"
            prop="picLatitude">
            </el-table-column>
            <el-table-column
            label="方向角"
            prop="picDirectAngle">
            </el-table-column>
          </el-table>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      pictureList: [],
      selectCell: {
        bscID: '',
        cellID: ''
      },
      bscList: [],
      cellList: [],
      time: '',
      cellTree: [
        {
          id: 1,
          label: '珠海移动',
          children: []
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created () {
    this.getCell()
  },
  methods: {
    getCell () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/cell')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              this.cellList.push(i)
            }
            this.getBsc()
            this.getBscTree()
          } else {
            this.errorMsg(response.data.code, this)
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
    getBscTree () { // 开始渲染基站层的树
      this.id = this.cellTree[0].id
      for (var i = 0, len = this.bscList.length; i < len; i++) {
        var obj = {}
        obj.id = ++this.id
        obj.label = this.bscList[i].bscName
        obj.children = this.getCellTree(this.bscList[i].bscID)
        this.cellTree[0].children.push(obj)
      }
    },
    getCellTree (bscID) { // 渲染小区层的树
      var list = []
      for (var i = 0, len = this.cellList.length; i < len; i++) {
        var obj = {
          id: 0,
          label: '',
          children: [],
          cell: {}
        }
        if (this.cellList[i].bscID === bscID) {
          obj.id = ++this.id
          obj.label = this.cellList[i].cellName
          obj.cell = this.cellList[i]
          list.push(obj)
        }
      }
      return list
    },
    getCheckedNodes () {
      var obj = this.$refs.tree.getCheckedNodes()
      var bscIDCellID = ''
      for (let i of obj) {
        if (i.hasOwnProperty('cell')) {
          bscIDCellID += i.cell.bscID + ',' + i.cell.cellID + ';'
        }
      }
      this.getPicByCell(bscIDCellID)
    },
    getPicByCell (bscIDCellID) {
      let path = this.setAPIPath('/picSearchByCell')
      this.$axios
        .get(path, {
          params: {'bscCellIDs': bscIDCellID}
        })
        .then(response => {
          if (response.data.code === 0) {
            this.pictureList = response.data.data
          } else {
            this.errorMsg(response.data.code, this)
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
.treeClass{
  width: 17%;
  min-height: 652px;
  border: 1px solid #ebeef5;
  font-size: 14px;
  overflow-y: scroll;
  max-height: 600px;
}
.buttons{
  position: absolute;
  top: 15px;
  left: 240px;
}
.byCellSerch{
  display: flex;
  justify-content: space-between;
}
.cellResult{
  width: 80%
}
.span-ellipsis {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
</style>

<style>
.cellResult .demo-table-expand label {
  width: 110px
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
