<template>
  <div class="home-page">
    <NavMenu />
    <router-view class="main-container"/>
  </div>
</template>

<script>

import NavMenu from './../../components/nav-menu/NavMenu'

export default {
  name: 'home',
  components: {
    NavMenu
  },
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.home-page{
  display: flex;
  overflow: hidden;
}
.main-container{
  width: 100%;
  box-sizing: border-box;
  background:#eff0f2;
}

</style>