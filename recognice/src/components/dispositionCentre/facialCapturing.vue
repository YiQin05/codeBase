<template>
  <div>
    <h3>人脸采集模式：</h3>
    <div class="thisContain">
      <div class="topTitle">请选择分组：
        <el-select v-model="value" placeholder="请选择" size='small'>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="mainContain">
        <div class="title">基本信息</div>
        <div class="except">
          <div class="left">
            <el-form ref="form" :model="personData" label-width="80px" size="mini">
              <el-form-item label="人员编号">
                <el-input v-model="personData.number"></el-input>
              </el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="personData.name"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="personData.sex" size="medium">
                  <el-radio border label="男"></el-radio>
                  <el-radio border label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="证件类型">
                <el-select v-model="personData.IDType" placeholder="请选择证件类型">
                  <el-option label="类型一" value="shanghai"></el-option>
                  <el-option label="类型二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="证件号码">
                <el-input v-model="personData.IDNum"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="right">
            <div class="imgType">照片：
              <el-radio-group v-model="pitType" size="medium">
                <el-radio border label="本地上传"></el-radio>
                <el-radio border label="USB相机采集"></el-radio>
                <el-radio border label="人证采集"></el-radio>
                <el-radio border label="当前照片"></el-radio>
              </el-radio-group>
            </div>
            <div class="film">
              <camera-shoot/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cameraShoot from '@/components/dispositionCentre/cameraShoot'
export default {
  name: 'facialCapturing',
  data () {
    return {
      value: '默认分组',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      personData: {
        number: '',
        name: '',
        sex: '',
        IDType: '',
        IDNum: ''
      },
      pitType: ''
    }
  },
  components: {
    cameraShoot
  }
}
</script>
<style lang="less" scoped>
.thisContain {
  padding: 0 20px;
  .mainContain {
    margin-top: 20px;
    border-top: 2px solid #e6e6e6;
    width: 100%;
    position: relative;
    padding-top: 20px;
    .title {
      font-size: 16px;
      width: 80px;
      opacity: 1;
      font-weight: bolder;
      position: absolute;
      top: -13px;
      background-color: white
    }
    .except{
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      .left{
        width: 40%;
        font-weight: bold;
      }
      // .right{
      // }
    }
  }
}
</style>
<style lang="less">
.left{
  .el-form{
    .el-form-item{
      .el-form-item__label{
        color: black;
      }
    }
  }
}
</style>
