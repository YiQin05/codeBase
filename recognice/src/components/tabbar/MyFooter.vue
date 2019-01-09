<template>
  <div class="footer">{{ footerRight }}</div>
</template>

<script>
export default {
  name: 'MyFooter',
  data () {
    return {
      footerRight: '© 2015-2018 珠海众石科技有限公司 粤ICP备18022937号-1'
    }
  }
}
</script>

<style scoped lang="less">
.footer{
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  background-color: #e6e6e6;
}
</style>
