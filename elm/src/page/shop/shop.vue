<template>
  <div>
    商铺详情
  </div>
</template>

<script>
import { shopFood } from '../../config/getData.js'
export default {
  name: 'shop',
  data () {
    return {
      shopFood: [],
      shopId: ''
    }
  },
  mounted () {
    this.shopId = this.$route.query.id
    this.getShopMenu()
  },
  methods: {
    getShopMenu () {
      shopFood(this.shopId).then(data => {
        console.log(56556)
        console.log(data)
      })
    }
  }
}
</script>

<style scoped>

</style>
