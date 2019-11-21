import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Home from "./../views/home/Home";
import Index from "./../views/home/index/Index";

/**组件 */
import Wheel from "./../views/home/wheel/Wheel"
import Navigation from "./../views/home/wheel/navigation/Navigation"

export default new Router({
  mode:'history', // 刷新会跳转到首页
  routes:[
    {
      path:'/',
      redirect: 'home'
    },
    {
      path:'/home/',
      name: 'home',
      component:Home,
      redirect: '/home/index',
      children: [
        {
          path: 'index',
          name: '首页',
          component: Index,
          icon: 'el-icon-house'
        },
        {
          path: 'wheel/',
          name: '组件',
          component: Wheel,
          icon: 'el-icon-suitcase',
          children: [
            {
              path: 'navigation',
              name: 'Navigation 导航',
              component: Navigation
            }
          ]
        },
      ]
    },
  ]
})