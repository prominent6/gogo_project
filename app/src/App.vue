<template>
  <div>
    <Header></Header>
    <!-- 书写路由组件出口的地方 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
//引入
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:'',
  //注册
  components:{
    Header,
    Footer
  }
}
</script>

<style>

</style>