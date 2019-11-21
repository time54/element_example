<template>
  <div class="nav-menu">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu 
      router
      :default-active="$route.path"
      class="menu-vertical" 
      @open="handleOpen"  
      @close="handleClose" 
      :collapse="isCollapse" 
      >
      <div class="head">
        <!-- <img src="./images/logo.svg" alt="投顾管理后台"> -->
        <img src="./images/water.png" alt="投顾管理后台"> 
      </div>
      <template v-for="(item,idx) in currentRouter" >
        <el-submenu index="item.path" :key="idx" v-if="item.children">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item-group v-for="(son) in item.children" :key="son.path">
            <el-menu-item :index="item.path + son.path" >{{son.name}}</el-menu-item>
          </el-menu-item-group>
          <!-- <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu> -->
        </el-submenu>
        <el-menu-item :index="'/home/' + item.path" :key="idx" v-else>
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    data() {
      return {
        isCollapse: false, // 是否水平折叠收起菜单
        currentRouter: ''  // 当前路由对象
      }
    },
    methods: {
      handleOpen(key, keyPath) { // 展开
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {// 收起
        console.log(key, keyPath);
      }
    },
    created() {
      console.log(this.$router);
      let routes = JSON.parse(JSON.stringify(this.$router.options.routes[1].children));
      this.currentRouter = routes;
    }
  }

</script>

<style  lang="scss" scoped>

  .nav-menu{
    height: 100%;
    .head{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: .3125rem /* 60/192 */;
      }
    }
    .el-menu{
      width: 1.0417rem /* 200/192 */;
      border: none !important;
    }
  }

</style>