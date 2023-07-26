<template>
 <!-- 热门内容板块 -->
<div class="hot">
                <!-- 热门内容标题 -->
                <a href="#" class="title">热门动态<img src="./images/沟通_chat-4-line.png" alt=""></a>
                <a href="#" class="more">更多内容</a>
                <!-- 热门内容的具体文章 -->
                <div class="article">
                    <div class="photo"><img src="./images/hot1.png" alt=""></div>
                    <div class="content">
                        <a href="#" class="h1">2021 新年日程计划</a>
                        <a href="#" class="h2">2021新年计划，牛年大吉！…</a>
                        <div class="user"><img src="./images/like.png" alt="">89 <img src="./images/view.png" class="special">311</div>
                    </div>
                </div>
                <div class="article">
                    <div class="photo"><img src="./images/hot2.png" alt=""></div>
                    <div class="content">
                        <a href="#" class="h1">步行街的平安夜</a>
                        <a href="#" class="h2">临近圣诞节，步行街洋溢着节…</a>
                        <div class="user"><img src="./images/like.png" alt="">89 <img src="./images/view.png" class="special">311</div>
                    </div>
                </div>
                <div class="article">
                    <div class="photo"><img src="./images/hot3.png" alt=""></div>
                    <div class="content">
                        <a href="#" class="h1">人间淳安 | 隐匿在城市间</a>
                        <a href="#" class="h2">2021新年计划，牛年大吉！…</a>
                        <div class="user"><img src="./images/like.png" alt="">89 <img src="./images/view.png" class="special">311</div>
                    </div>
                </div>
                <div class="article">
                    <div class="photo"><img src="./images/hot4.png" alt=""></div>
                    <div class="content">
                        <a href="#" class="h1">两个月108公里，路在何方</a>
                        <a href="#" class="h2">2021新年计划，牛年大吉！…</a>
                        <div class="user"><img src="./images/like.png" alt="">89 <img src="./images/view.png" class="special">311</div>
                    </div>
                </div>
                <div class="article">
                    <div class="photo"><img src="./images/hot5.png" alt=""></div>
                    <div class="content">
                        <a href="#" class="h1">两个月108公里，路在何方</a>
                        <a href="#" class="h2">2021新年计划，牛年大吉！…</a>
                        <div class="user"><img src="./images/like.png" alt="">89 <img src="./images/view.png" class="special">311</div>
                    </div>
                </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.main .left .hot {
    width: 385px;
    height: 625px;
}

.main .left a {
    display: block;
    float: left;
}

.main .left .hot .title {
    width: 138px;
    height: 40px;
    font-size: 24px;
    color: rgb(74, 145, 255);
}

.main .left .hot .title img {
    margin-left: 7px;
}

.main .left .hot .more {
    margin-top: 12px;
    margin-left: 169px;
    width: 68px;
    height: 27px;
    font-size: 16px;
    color: rgb(128, 128, 128);
}

.main .left .hot div {
    float: left;
}

.main .left .hot {
    width: 385px;
    height: 112px;
}

.main .left .hot .article .photo {
    width: 103.61px;
    height: 88px;
    background-size: cover;
    margin: 12px 0px 12px 14.13px;
}

.main .left .hot .article {
    box-shadow: 0 0 0.5px rgba(0, 0, 0, .4);
}

.main .left .hot .article .content {
    float: left;
    width: 233px;
    height: 88px;
    margin-left: 19px;
    margin-top: 12px;
}

.main .left .hot .article .content a {
    display: block;
    width: 233px;
    height: 20px;
}

.main .left .hot .article .content .h1 {
    font-size: 17px;
    line-height: 26px;
    font-weight: 500;
    color: rgb(3, 3, 3);
}

.main .left .hot .article .content .h2 {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #9a9a9a;
}

.main .left .hot .article .content .user {
    height: 20px;
    width: 233px;
    margin-top: 20px;
    text-align: right;
    font-size: 14px;
    color: #9a9a9a;
}

.main .left .hot .article .content .user img {
    margin-right: 11px;
}

.main .left .hot .article .content .user .special {
    margin-left: 37px;
}

</style>