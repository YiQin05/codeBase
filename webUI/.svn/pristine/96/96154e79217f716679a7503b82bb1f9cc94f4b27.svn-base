<template>
    <div class="container">
        <div class="dataForm">
              <el-table
                :data="showList"
                style="width: 100%"
                size="small">
                <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="小区ID">
                          <span>{{ props.row.cellID }}</span>
                      </el-form-item>
                      <el-form-item label="小区名称">
                          <span>{{ props.row.cellName }}</span>
                      </el-form-item>
                      <el-form-item label="场景1">
                          <span>{{ props.row.scene0 }}</span>
                      </el-form-item>
                      <el-form-item label="场景2">
                          <span>{{ props.row.scene1 }}</span>
                      </el-form-item>
                      <el-form-item label="场景3">
                          <span>{{ props.row.scene2 }}</span>
                      </el-form-item>
                      <el-form-item label="场景4">
                          <span>{{ props.row.scene3 }}</span>
                      </el-form-item>
                      <el-form-item label="场景5">
                          <span>{{ props.row.scene4 }}</span>
                      </el-form-item>
                      <el-form-item label="物体1">
                          <span>{{ props.row.object0 }}</span>
                      </el-form-item>
                      <el-form-item label="物体2">
                          <span>{{ props.row.object1 }}</span>
                      </el-form-item>
                      <el-form-item label="物体3">
                          <span>{{ props.row.object2 }}</span>
                      </el-form-item>
                      <el-form-item label="物体4">
                          <span>{{ props.row.object3 }}</span>
                      </el-form-item>
                      <el-form-item label="物体5">
                          <span>{{ props.row.object4 }}</span>
                      </el-form-item>
                    </el-form>
                </template>
                </el-table-column>
                <el-table-column
                label="小区ID"
                prop="cellID">
                </el-table-column>
                <el-table-column
                label="小区名称"
                prop="cellName">
                </el-table-column>
                <el-table-column
                label="场景结果1"
                prop="scene0">
                </el-table-column>
                <el-table-column
                label="场景结果2"
                prop="scene1">
                </el-table-column>
                <el-table-column
                label="物体1"
                prop="object0">
                </el-table-column>
                <el-table-column
                label="物体2"
                prop="object1">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cellList: [],
      showList: [],
      cellID: '',
      cellName: '',
      user: ''
    }
  },
  created () {
    this.user = this.getCookie('userID')
    this.getIDs()
  },
  methods: {
    getIDs () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/cell')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              this.getRecognizeResult(i.bscID, i.cellID, i.cellName)
            }
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getRecognizeResult (bscID, cellID, cellName) {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/recognition/' + bscID + '/' + cellID)
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              if (i.isStitchingPic === 1) {
                var list1 = {
                  cellID: cellID,
                  cellName: cellName,
                  imgSceneArray: i.recognizeScenes,
                  imgObjArray: i.recognizeObjects
                }
                this.cellList.push(list1)
              }
            }
            this.setShowList()
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    setShowList () { // 这里开始改
      for (let i of this.cellList) {
        var newList = {
          cellID: i.cellID,
          cellName: i.cellName
        }
        for (let j = 0; j < 5; j++) {
          let name = 'scene' + j
          if (i.imgSceneArray[j]) {
            newList[name] = i.imgSceneArray[j].yidongSceneName + ' ' + parseInt(i.imgSceneArray[j].confidence * 100) + '%'
          } else {
            newList[name] = ''
          }
        }
        for (let k = 0; k < 5; k++) {
          let name = 'object' + k
          if (i.imgObjArray[k]) {
            newList[name] = i.imgObjArray[k].basicObjectName + ' ' + parseInt(i.imgObjArray[k].rate * 100) + '%'
          } else {
            newList[name] = ''
          }
        }
        this.showList.push(newList)
      }
    },
    downLoadImg (taskID) {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/downloadRawPics/' + taskID)
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
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
