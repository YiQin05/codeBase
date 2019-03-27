<template>
  <div class="mainContain">
    <div :class="{left_sidebar: true, cut_Width: widthControl, add_width: !widthControl}">
      <sideBar ref="sideBar"/>
    </div>
    <div class="right_contain">
      <nav class="top_nav">
        <!-- <span class="glyphicon glyphicon-align-justify "></span> -->
        <a class="glyphicon glyphicon-menu-hamburger icon_button" @click="changeMenu"></a>
        <qriously :value="webUrl" :size="QRsize" :backgroundAlpha="backgroundAlpha"/>
        顶部导航
      </nav>
      <div class="tab_contain">
        <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane
            :key="item.name"
            v-for="(item) in editableTabs"
            :label="item.title"
            :name="item.name">
            <component v-bind:is="item.component"></component>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import login from '../login/login'
import HelloWorld from '../../components/HelloWorld'
import sideBar from '../../components/sideBar'
export default {
  name: 'mainContain',
  data () {
    return {
      editableTabsValue: '1',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        component: login
      }],
      tabIndex: 1,
      activeName: '1',
      widthControl: false,
      // 二维码网址
      webUrl: 'https://www.baidu.com/',
      // 二维码尺寸
      QRsize: 80,
      // 背景透明度，默认透明 0
      backgroundAlpha: 1
    }
  },
  methods: {
    handleTabsEdit (targetName, action) { // 触发tab页面时调用，增加或移除tab页面
      if (action === 'add') {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          component: HelloWorld
        })
        this.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        let tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    },
    changeMenu () { // 改变左边侧边栏的菜单
      this.$refs.sideBar.menuFlag = !this.$refs.sideBar.menuFlag
      this.widthControl = !this.widthControl
    }
  },
  components: {
    sideBar
  }
}
</script>

<style lang="scss" scoped>
@import '../../comment/css/_all-skins.css';
.mainContain{
  display: flex;
  .left_sidebar{
    width: 285px;
    overflow: visible;
    z-index: 999;
  }
  .cut_Width{
    width: 50px;
    transition:width .2s ease-in 0.01s;
  }
  .add_width{
    width: 285px;
    transition:width .2s ease-in 0.01s;
  }
  .right_contain{
    width: 100%;
    .top_nav{
      height: 100px;
      background-color: #337ab7;
      a.icon_button{
        font-size: 20px;
        color: #fff;
        padding: 20px;
        &:hover {
          color: #f6f6f6;
          text-decoration: none;
          background-color: rgba(54, 127, 169, 0.9)
        }
      }
    }
    .tab_contain{

    }
  }
}
</style>
