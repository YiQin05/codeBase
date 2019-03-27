<template>
  <div class="tree">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
      <span class="span-ellipsis" slot-scope="{ node }">
        <span :title="node.label">{{ node.label }}</span>
      </span>
    </el-tree>
    <span class="textNode" :title="note">{{ note }}</span>
    <div class="icoFontlist" title="2336666" >这里是全部的信息没有省略号，接下来演示如何处理超长文本显示省略号</div>
  </div>
</template>

<script>
export default {
  name: 'cellTree',
  data () {
    return {
      note: '测试测试测试测试测试测试测试',
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
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
    }
  }
}
</script>

<style scoped>
.tree {
  width: 100px;
}
.span-ellipsis {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.textNode{
  width: 100px;
  white-space: nowrap;
  border: 1px solid #999;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.icoFontlist:hover
{
    width: 225px;
    font-size: 12px;
    border: 0px solid #ddd;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:blue;
    text-decoration:underline;
    cursor:pointer;
}
.icoFontlist{
    width: 225px;
    font-size: 12px;
    border: 0px solid #ddd;
    color:#5f5f5f;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
