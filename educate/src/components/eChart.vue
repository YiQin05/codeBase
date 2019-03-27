<template>
  <div>
    <div id="main" class="chart" style="width: 600px;height:400px;"></div>

    <div id="circle" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
// 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts'

// // 引入柱状图
// import 'echarts/lib/chart/bar'
// import $ from 'jquery'
export default {
  name: 'eChart',
  data () {
    return {
      myChart: '',
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
      circle: {
        // 全局的
        backgroundColor: '#2c343c',
        textStyle: { // 设置全局字体颜色
          color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
          lineStyle: { // 设置全局的引导线颜色
            color: 'rgba(255, 255, 255, 0.3)'
          }
        },
        visualMap: { // 设置阴影层次感
          // 不显示 visualMap 组件，只用于明暗度的映射
          show: false,
          // 映射的最小值为 80
          min: 80,
          // 映射的最大值为 600
          max: 600,
          inRange: {
            // 明暗度的范围是 0 到 1
            colorLightness: [0, 1]
          }
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          roseType: 'radius',
          data: [
            {
              value: 235,
              name: '视频广告',
              label: {
                textStyle: { // 设置局部的字体颜色
                  color: 'rgba(0, 160, 160, 0.3)'
                }
              },
              labelLine: {
                lineStyle: { // 设置局部的引导线颜色
                  color: 'rgba(63, 100, 255, 1)'
                }
              }
            },
            {value: 274, name: '联盟广告'},
            {value: 310, name: '邮件营销'},
            {value: 335, name: '直接访问'},
            {value: 400, name: '搜索引擎'}
          ],
          itemStyle: {
            // // 阴影的大小
            // shadowBlur: 200,
            // // 阴影水平方向上的偏移
            // shadowOffsetX: 0,
            // // 阴影垂直方向上的偏移
            // shadowOffsetY: 0,
            // // 阴影颜色
            // shadowColor: 'rgba(0, 0, 0, 0.5)'
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            emphasis: {
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      }
    }
  },
  created () {
  },
  mounted () {
    echarts.init(document.getElementById('main')).setOption(this.option)
    echarts.init(document.getElementById('circle')).setOption(this.circle)
  }
}
</script>

<style scoped>

</style>
