<template>
  <div>
    <div class="container layout">
      <div class="banner"><img src="../../assets/u152.jpg" alt="img"></div>
      <div class="middle">
        资源总数：
        <div class="iconPlane">任务总数<span>{{ taskTotal }}</span>项</div>
        <div class="iconPlane">已完任务<span>{{ taskFinished }}</span>项</div>
        <div class="iconPlane">拍摄数据<span>{{ picTotal }}</span>项</div>
        <div class="iconPlane">小区数<span>{{ cellTotal }}</span>个</div>
        <div class="iconPlane">场景识别<span>{{ sceneRegconitionTotal }}</span>个</div>
      </div>
      <div class="bottom">
        <div class="left">
          <left/>
        </div>
        <div class="right">
          <right/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import left from './left.vue'
import right from './right.vue'
import MyHeader from '@/components/tabbar/Header'
import MyFooter from '@/components/tabbar/footer'
export default {
  data () {
    return {
      taskTotal: '', //  任务总数
      taskFinished: '', // 已完成任务
      picTotal: '', // 拍摄数据
      cellTotal: '', //  小区数
      sceneRegconitionTotal: ''
    }
  },
  components: {
    left,
    right,
    MyHeader,
    MyFooter
  },
  created () {
    this.getSumarryData()
  },
  methods: {
    getSumarryData () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('sourceSummary')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            var resData = response.data.data
            this.taskTotal = resData.taskTotal
            this.taskFinished = resData.picTotal
            this.sceneRegconitionTotal = resData.sceneRegconitionTotal
            this.taskFinished = resData.taskFinished
            this.cellTotal = resData.cellTotal
            this.picTotal = resData.picTotal
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
  .container{
    max-width: 1200px;
    margin: 0 auto;
  }
  .banner img{
    width: 100%;
    height: 376px;
  }
  .middle,.bottom{
    display: flex;
    flex-direction: row;
  }
  .middle{
    border: 1px solid #ebeef5;
    border-left: 20px solid rgb(0, 153, 255);
    height: 90px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    padding-left: 20px;
    font-size: 20px;
    font-weight: bolder;
  }
  .middle>div{
    font-weight: normal;
    border: 1px solid #ebeef5;
    border-radius: 8px;
    font-size: 16px;
    width: 150px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  }
  .middle>div span{
    font-size: 25px;
    color: rgb(255, 153, 0);
    font-weight: bolder;
  }
  .bottom .left,.right{
    width: 50%;
  }
  .layout{
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
  }
</style>
