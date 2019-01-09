<template >
    <div class="container">
        <h5>
          <span>{{ Cname }}</span>
          <span>{{ right }}</span>
          <span>{{ record }}</span>
        </h5>
    </div>
</template>
<script>
export default {
  name: 'footer',
  data () {
    return {
      Cname: '珠海世纪鼎利科技股份有限公司',
      right: '版权所有©2016',
      record: '粤ICP备11031566号-1'
    }
  }
}
</script>
<style scoped>
.container{
        max-width: 1200px;
        margin: 0 auto;
        background-color: rgb(132, 134, 132);
        height: 32px;
        line-height: 32px;
    }
h5{
     color: white;
}
</style>
