<template>
  <div>
    <div class="topArea">
      选择小区：
      <!-- selectedCellID -->
      <el-select v-model="selectedCell.cellID" placeholder="请选择小区" size="mini">
        <el-option
          v-for="item in cellArray"
          :key="item.cellID"
          :label="item.cellName"
          :value="item.cellID">
        </el-option>
      </el-select>
      <el-button type="primary" @click="getBscID" size="mini">规划查询</el-button>
    </div>
    <div class="cellTab">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          property="bscName"
          label="基站名称"
          width="120">
        </el-table-column>
        <el-table-column
          property="bscID"
          label="基站ID"
          width="120">
        </el-table-column>
        <el-table-column
          property="cellName"
          label="小区名称">
        </el-table-column>
        <el-table-column
          property="cellID"
          label="小区ID">
        </el-table-column>
        <el-table-column
          property="longitude"
          label="经度">
        </el-table-column>
        <el-table-column
          property="latitude"
          label="纬度">
        </el-table-column>
        <el-table-column
          property="directAngle"
          label="方向角">
        </el-table-column>
        <el-table-column
          property="elevationAngle"
          label="下倾角">
        </el-table-column>
        <el-table-column
          property="similar"
          label="相似度">
        </el-table-column>
      </el-table>
    </div>
    <div class="showCell">
      <comparisonCell ref="comparisonCell" v-show="showData" :showPass="showPass"/>
    </div>
  </div>
</template>

<script>
import comparisonCell from '../comparisonCell/comparisonCell'
import { getTopCell } from '../../config/getData.js'
export default {
  name: 'cellProgramme',
  data () {
    return {
      selectedCell: {
        cellID: '',
        bscID: ''
      },
      showPass: false,
      showData: false,
      cellArray: [],
      tableData: [],
      yanshouCell: {
        cellID: '',
        bscID: ''
      },
      currentRow: null
    }
  },
  mounted () {
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
              this.cellArray.push(i)
            }
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleCurrentChange (val) {
      this.currentRow = val
      this.yanshouCell.bscID = val.bscID
      this.yanshouCell.cellID = val.cellID
      this.showComparisonData()
    },
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
      this.yanshouCell.bscID = row.bscID
      this.yanshouCell.cellID = row.cellID
    },
    getBscID () {
      for (let i of this.cellArray) {
        if (i.cellID === this.selectedCell.cellID) {
          this.selectedCell.bscID = i.bscID
          break
        }
      }
      this.getSimilarCell()
    },
    getSimilarCell () {
      this.tableData.splice(0, this.tableData.length)
      this.showData = false
      getTopCell(this.selectedCell.bscID, this.selectedCell.cellID).then(data => {
        if (data.code === 0) {
          if (data.data.compareCells.length !== 0) {
            for (let i of data.data.compareCells) {
              i.similar = parseInt(i.similar * 100) + '%'
              let celldetail = this.addDetail(i)
              this.tableData.push(celldetail)
            }
            this.setCurrent(this.tableData[0])
            this.showComparisonData()
          } else {
            this.errorMsg(62, this)
          }
        } else {
          this.errorMsg(data.code, this)
        }
      })
    },
    addDetail (cell) {
      let detailArray = ['longitude', 'latitude', 'directAngle', 'elevationAngle']
      for (let i of this.cellArray) {
        if (i.cellID === cell.cellID) {
          for (let j of detailArray) {
            let name = j
            cell[name] = i[name]
          }
        }
      }
      return cell
    },
    showComparisonData () {
      this.$refs.comparisonCell.getResult(this.selectedCell.bscID, this.selectedCell.cellID, this.yanshouCell.bscID, this.yanshouCell.cellID)
      this.showData = true
    }
  },
  components: {
    comparisonCell
  }
}
</script>

<style scoped>
.topArea{
  height: 50px;
  border: 1px solid #e4e4e4;
  line-height: 50px;
  background-color: rgb(242, 242, 242);
  margin-bottom: 10px;
}
.cellTab {
  border: 1px solid #e4e4e4;
  margin-bottom: 20px;
}
</style>
<style>
/* .topArea .el-input__inner{
  background-color: rgb(242, 242, 242);
} */
</style>
