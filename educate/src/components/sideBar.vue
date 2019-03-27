<template>
  <div>
    <div class="main-sidebar">
      <div class="first_sideBar" v-show="menuFlag">
        <div class="logo">
          图片
        </div>
        <form action="#" method="get" class="sidebar-form">
          <div class="input-group">
            <input type="text" class="form-control" id="exampleInputAmount" placeholder="Search">
            <span class="input-group-btn">
              <a class="btn btn-flat"><i class="fa fa-search"></i></a>
            </span>
          </div>
        </form>
        <ul class="sidebar-menu list-unstyled tree_ul" id="parent" aria-multiselectable="true">
          <li data-toggle="collapse" :data-target="'#'+item.dataId" :id="item.titleId" @click="openItem(item.titleId)" aria-expanded="false" :aria-controls="item.dataId" data-parent="#parent" v-for="item of sideBar" :key="item" class="panel-collapse sidebar">
            <a class="menuItem">
              <i class="fa fa-desktop"></i>
              <span>{{item.li}}</span>
              <i class="fa fa-angle-left pull-right"></i>
            </a>
            <ul class="collapse list-unstyled treeview-menu" :id="item.dataId" :aria-labelledby="item.dataId">
              <li v-for="i of item.children" :key="i" @click.stop>
                <a class="menuItem">
                  <i class="fa fa-sitemap"></i>
                  <span>{{i}}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="second_sidebar" v-show="!menuFlag">
        <h1>服务</h1>
        <ul class="sidebar-menu list-unstyled">
          <li class="sidebar title_icon"
            v-for="item of sideBar"
            :key="item.dataId"
            @mouseenter.stop="item.showFlag = true"
            @mouseleave.stop="item.showFlag = false">
            <a class="menuItem">
              <i class="fa fa-desktop"></i>
            </a>
            <div class="menu_block" v-show="item.showFlag">
              <ul class="list-unstyled sidebar-menu">
                <li class="sidebar active">
                  <a class="menuItem" style="border-left-color: #1e282c">
                    <span>{{item.li}}</span>
                  </a>
                </li>
              </ul>
              <ul class="list-unstyled treeview-menu">
                <li v-for="i of item.children" :key="i" @click.stop>
                  <a class="menuItem">
                    <i class="fa fa-sitemap"></i>
                    <span>{{i}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'sideBar',
  data () {
    return {
      sideBar: [{
        showFlag: false,
        li: '外面的1',
        titleId: 'title1',
        dataId: 'dataItem1',
        children: {
          li1: '里面的11',
          li2: '里面的12'
        }
      }, {
        showFlag: false,
        li: '外面的2',
        titleId: 'title2',
        dataId: 'dataItem2',
        children: {
          li1: '里面的21',
          li2: '里面的22'
        }
      }],
      menuFlag: true
    }
  },
  methods: {
    openItem (id) {
      $('#' + id).addClass('active').siblings('.active').removeClass('active')
      $('#' + id).on('show.bs.collapse', function () {
        $('#' + id).children('.menuItem').children('.fa-angle-left').removeClass('fa-angle-left').addClass('fa-angle-down')
      })
      $('#' + id).on('hide.bs.collapse', function () {
        $('#' + id).children('.menuItem').children('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-left')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/* @import '../comment/css/index.css'; */
// menuItem菜单item公共样式
.menuItem{
  padding: 10px 15px;
  width: 100%;
  position: relative;
  display: block;
  white-space: nowrap;
  overflow: hidden;
}

// 树ul的样式
.tree_ul{
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  li{
    ul{
      li{
        a{
          margin-left: 10%;
        }
      }
    }
  }
}
// 主容器样式
.main-sidebar{
  width: 100%;
  .first_sideBar{
    .logo{
      height: 100px;
    }
  }
  .second_sidebar{
    text-align: left;
    .sidebar-menu{
      .title_icon{
        position: relative;
        .menu_block{
          width: 200px;
          position: absolute;
          background-color: rgb(44, 59, 65);
          top: 0px;
          right: -200px;
        }
      }
    }
  }
}
</style>
