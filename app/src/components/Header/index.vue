<template>
  <!-- 顶部导航栏 -->
    <div class="top w">
        <!-- logo -->
        <router-link to="/home" class="logo"></router-link>
        <!-- 导航 -->
        <div class="nav">
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">目的地</a></li>
                <li><a href="#">旅游攻略</a></li>
                <li><a href="#">机票</a></li>
            z    <li><a href="#">去旅游</a></li>
                <li><a href="#">订酒店</a></li>
                <li><a href="#">社区</a> </li>
            </ul>
            <ul class="fr"> 
                <li><router-link to="/login" href="#">登录</router-link> </li>
                <li><router-link to="/register" href="#">注册</router-link> </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.w {
    width: 1440px;
    margin: auto;
}
.fl{
    float: left;
}
.fr{
    float: right;
}
.top{
    height: 58px;
}
.top .logo {
    position: relative;
    float: left;
    left: 0px;
    top: 12px;
    width: 155px;
    height: 34px;
    background-image: url(https://img.js.design/assets/img/62e12b3db5848cc4d9bfa8ab.png);
    background-size: cover;
    border: 1px solid rgba(204, 204, 204, 1);
}

.top ul li {
    float: left;
    height: 58px;
    width: 100px;
    margin-left: 17px;
    text-align: center;
}

.top ul li a {
    display: block;
    line-height: 58px;
    color: black;
    font-size: 16px;
    letter-spacing: 2px;
}

.top ul li a:hover {
    color: #0a90d8;
}
</style>