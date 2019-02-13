<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form :model="addCellList" :inline="true" style="text-align:left">
      <el-form-item label="基站ID" prop="bscID">
          <el-input v-model="addCellList.bscID"></el-input>
      </el-form-item>
      <el-form-item label="小区ID" prop="cellID">
          <el-input v-model="addCellList.cellID" ></el-input>
      </el-form-item>
      <el-form-item label="基站ID" prop="bscID">
          <el-input v-model="addCellList.bscID"></el-input>
      </el-form-item>
      <el-form-item label="小区ID" prop="cellID">
          <el-input v-model="addCellList.cellID" ></el-input>
      </el-form-item>
      <el-form-item label="基站ID" prop="bscID">
          <el-input v-model="addCellList.bscID"></el-input>
      </el-form-item>
      <el-form-item label="小区ID" prop="cellID">
          <el-input v-model="addCellList.cellID" ></el-input>
      </el-form-item>
      <el-form-item label="基站ID" prop="bscID">
          <el-input v-model="addCellList.bscID"></el-input>
      </el-form-item>
      <el-form-item label="小区ID" prop="cellID">
          <el-input v-model="addCellList.cellID" ></el-input>
      </el-form-item>
      <el-form-item label="小区ID" prop="cellID">
          <el-input v-model="addCellList.cellID" ></el-input>
      </el-form-item>
      <el-form-item label="基站ID" prop="bscID">
          <el-input v-model="addCellList.bscID"></el-input>
      </el-form-item>
      <el-form-item label="小区ID" prop="cellID">
          <el-input v-model="addCellList.cellID" ></el-input>
      </el-form-item>
    </el-form>
    <h1>{{ count }}</h1>
    <h1>{{ count1 }}</h1>
    <h1>{{ localCount }}</h1>
    <el-button @click="click(1)" type="success">点击增加</el-button>
    <el-button @click="click(2)" type="danger">点击减少</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      addCellList: {
        bscID: '1555',
        cellId: '1235'
      }
    }
  },
  mounted () {
    this.showMethod()
  },
  //   computed: {
  //     count () {
  //         return this.$store.state.count
  //     }
  //   }
  // computed: mapState({
  // count: state => state.count,
  // count1: state => state.count1,
  // localCount (state) {
  //     return state.count + state.count1
  // }
  // })
  // computed: mapState([
  //     'count',
  //     'count1'
  // ])
  computed: {
    // ...mapState([
    //     'count',
    //     'count1',
    // ])
    ...mapState({
      count: state => state.count,
      count1: state => state.count1,
      localCount (state) {
        return state.count + state.count1
      }
    }),
    ...mapGetters([
        'getCount',
        'getFilter'
    ])
  },
  methods: {
    showMethod () {
      console.log(this.getFilter)
    },
    click (type) {
        if (type === 1) {
            this.$store.commit('INCREMENT', {
                clickTime: 10
            })
        } else {
            this.$store.commit({
                type: 'DECREMENT',
                clickTime: 10
            })
        }
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body{
  font-size: 20px;
}
h2{
  font-size: 1rem;
}
</style>
