<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { cityGuess } from '../config/getData.js'
export default {
  name: 'fetch',
  data () {
    return {
      msg: 'fetch测试',
      guessCity: {}
    }
  },
  mounted () {
    cityGuess().then(res => {
      console.log(res)
      this.guessCity = res
    })
    console.log(4651)
    console.log(this.guessCity)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
