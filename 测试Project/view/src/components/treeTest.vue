<template>
  <div>
    <div class="tree">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" :render-content="renderContent"></el-tree>
    </div>
    <div class="hoverTest">
      <el-tooltip content="Top center" placement="top">
        <el-button>Dark</el-button>
      </el-tooltip>
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button>Light</el-button>
      </el-tooltip>
    </div>
    <div id="father">
      {{showTag}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'treeTest',
  data () {
    return {
      data: [{
        label: '一级小区区区区区区区区区区区区区区区区区区区区区区',
        is_show: false,
        children: [{
          label: '二级 1-1区区区区区区区区区区区区区区区区区区区区区区',
          is_show: false,
          children: [{
            label: '三级 1-1-1区区区区区区区区区区区区区区区区区区区区区区',
            is_show: false
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      showTag: ''
    }
  },
  methods: {
    showMsg (y) {
      console.log(y)
      let height = y + 'px'
      document.getElementById('father').style.top = height
    },
    handleNodeClick (data) {
      console.log(data)
    },
    append (data) {
      console.log(data)
    },
    amend (data) {
      console.log(data)
    },
    remove (data) {
      console.log(data)
    },
    renderContent (h, {
      node,
      data,
      store
    }) {
      return h('span', {
        style: {
        },
        // 这里添加hover事件
        on: {
          'mouseenter': (el) => {
            console.log('鼠标景来')
            console.log(data)
            console.log(this)
            this.showMsg(el.y)
            this.showTag = data.label
            data.is_show = true
          },
          // 鼠标离开
          'mouseleave': () => {
            this.showTag = ''
            console.log('鼠标离开')
            data.is_show = false
          }
        }
      }, [
        h('span', {
          // 显示名称
          style: {
          }
        }, node.label)
      ])
    }
  }
}
</script>

<style lang="less" scoped>
.tree{
  // overflow: hidden;
  width: 100px;
  height: 300px;
  overflow-y: scroll;
}
.hoverTest{
  float: left;
}
#father{
  position: absolute;
  left: 0px;
}
// .son{
//   white-space: nowrap
// }
// .custom-tree-node .hoverShow{
//   display: none
// }
</style>
