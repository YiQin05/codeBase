<template>
  <div class='contain'>
    <img src="../../assets/logo.png" alt="img">
    <div class='note'>404 notFound</div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped>
.contain {
  height: 500px;
  line-height: 500px;
}
img{
  width: 180px;
}
.note{
  width: 100%;
  text-align: center;
  position: absolute;
  top: 200px;
}
</style>
