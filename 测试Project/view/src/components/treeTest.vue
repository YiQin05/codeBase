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
      }
    }
  },
  methods: {
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
            
            data.is_show = true
          },
          // 鼠标离开
          'mouseleave': () => {
            data.is_show = false
          }
        }
      }, [
        h('span', {
          // 显示名称
          style: {
            // position: 'relative'
          }
        }, node.label),
        h('span', {
          style: {
            // display: data.is_show ? '' : 'none',
            // position: 'absolute',
            // top: '20px',
            // left: '20px',
            // backgroundColor: 'gray',
            // overflow: 'visible',
            zIndex: 999,
            float: 'left',
            width: '200px',
            overflow: 'visible',
            display: 'inline'
          }
        }, node.label
        // [
        //   // 添加
        //   h('el-button', {
        //     props: {
        //       type: 'text',
        //       size: 'small'
        //     },
        //     style: {
        //       marginLeft: '15px'
        //     },
        //     on: {
        //       click: () => {
        //         this.append(data)
        //       }
        //     }
        //   }, '添加'),
        //   h('el-button', {
        //     props: {
        //       type: 'text',
        //       size: 'small'
        //     },
        //     style: {

        //     },
        //     on: {
        //       click: () => {
        //         this.amend(data)
        //       }
        //     }
        //   }, '修改'),
        //   h('el-button', {
        //     props: {
        //       type: 'text',
        //       size: 'small'
        //     },
        //     style: {

        //     },
        //     on: {
        //       click: () => {
        //         this.remove(node, data)
        //       }
        //     }
        //   }, '删除')
        // ]
        )
      ])
    }
  }
}
</script>

<style lang="less" scoped>
.tree{
  overflow: hidden;
  width: 100px;
  height: 300px;
  overflow-y: scroll;
}
.hoverTest{
  float: left;
}
// .custom-tree-node .hoverShow{
//   display: none
// }
</style>
