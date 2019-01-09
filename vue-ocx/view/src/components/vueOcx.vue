<template>
  <div>
    <h1> {{ title }}</h1>
    <iframe width="800" height="800" frameBorder="no" name="ocx" src="../../../static/test.html"></iframe>
  </div>
</template>

<script>
export default {
  neme: 'vueOcx',
  data () {
    return {
      title: '这是大家爱看近些年Ocx'
    }
  }
}
</script>

<style scoped>

</style>
