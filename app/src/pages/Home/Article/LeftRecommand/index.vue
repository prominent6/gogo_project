<template>
<div>
     <!-- 攻略推荐板块 -->
            <div class="strategy">
                <!-- 攻略推荐标题 -->
                <a href="#" class="title">攻略推荐</a>
                <a href="#" class="more">更多</a>
                <div class="photo"><img src="./images/recommand1.png" alt=""></div>
                <div class="content">
                    <a href="#" class="h1 h11">环球游世界</a>
                    <a href="#" class="h1 h12">纵为盛夏意，山藏色，行于乐</a>
                    <a href="#" class="h2">我们去的 墨脱 下着雨，湿答答的天气让人一点都不能感受到这是在 西藏 。刚刚还在嘎隆拉雪山脚下喝了一杯咖啡......</a>
                </div>
            </div>
             <!-- 旅游专栏板块 -->
            <div class="travel">
                <!-- 旅游专栏标题 -->
                <a href="#" class="title">旅游专栏</a>
                <a href="#" class="more">专栏首页</a>
                <div class="photo"><img src="./images/recommand2.png" alt=""></div>
                <div class="content">
                    <a href="#" class="h1 h11">环球游世界</a>
                    <a href="#" class="h1 h12">纵为盛夏意，山藏色，行于乐</a>
                    <a href="#" class="h2">我们去的 墨脱 下着雨，湿答答的天气让人一点都不能感受到这是在 西藏 。刚刚还在嘎隆拉雪山脚下喝了一杯咖啡......</a>
                </div>
            </div>
            <!-- 最新资讯板块 -->
            <div class="news">
                <!-- 最新资讯标题 -->
                <a href="#" class="title">攻略推荐</a>
                <a href="#" class="more">更多咨询</a>
                <div class="photo"><img src="./images/recommand3.png" alt=""></div>
                <div class="content">
                    <a href="#" class="h1 h11">人间淳安</a>
                    <a href="#" class="h1 h12">隐匿在城市间隐秘的角落</a>
                    <div class="data">7月11日</div>
                    <a href="#" class="c">打牌</a>
                    <div class="data">7月12日</div>
                    <a href="#" class="c">打牌</a>
                    <div class="data">7月13日</div>
                    <a href="#" class="c">打牌</a>
                    <div class="data">7月16日</div>
                    <a href="#" class="c">胡适之啊胡适之！你怎么能如此堕落！</a>
                </div>
            </div>
</div>
           
</template>

<script>
export default {

}
</script>

<style>
.main .left .strategy {
    float: left;
    margin-top: 10px;
    width: 376px;
    height: 280px;
}

.main .left .strategy .title {
    margin-top: 12px;
    width: 164px;
    height: 40px;
    color: rgb(0, 0, 0);
    font-size: 26px;
}

.main .left .strategy .more {
    margin-left: 166px;
    margin-top: 27px;
    width: 46px;
    height: 23px;
    color: rgb(128, 128, 128);
    font-size: 16px;
}

.main .left .strategy .photo {
    float: left;
    margin-top: 5px;
    width: 375px;
    height: 149px;
    background-size: cover;
}

.main .left .strategy .h1 {
    margin-top: 6px;
    height: 25px;
    color: rgb(0, 0, 0);
    font-size: 16px;
}

.main .left .strategy .h11 {
    border-right: 1.5px solid black;
    width: 82px;
}

.main .left .strategy .h12 {
    margin-left: 1px;
    width: 290px;
}

.main .left .strategy .h2 {
    margin-top: 4px;
    width: 374px;
    height: 38px;
    color: rgba(56, 56, 56);
    font-size: 12px;
}

.main .left .travel {
    float: left;
    margin-top: 10px;
    width: 376px;
    height: 280px;
}

.main .left .travel .title {
    margin-top: 12px;
    width: 164px;
    height: 40px;
    color: rgb(0, 0, 0);
    font-size: 26px;
}

.main .left .travel .more {
    margin-left: 144px;
    margin-top: 27px;
    width: 68px;
    height: 23px;
    color: rgb(128, 128, 128);
    font-size: 16px;
}

.main .left .travel .photo {
    float: left;
    margin-top: 5px;
    width: 375px;
    height: 149px;
    background-size: cover;
}

.main .left .travel .h1 {
    margin-top: 6px;
    height: 25px;
    color: rgb(0, 0, 0);
    font-size: 16px;
}

.main .left .travel .h11 {
    border-right: 1.5px solid black;
    width: 82px;
}

.main .left .travel .h12 {
    margin-left: 1px;
    width: 290px;
}

.main .left .travel .h2 {
    margin-top: 4px;
    width: 374px;
    height: 38px;
    color: rgba(56, 56, 56);
    font-size: 12px;
}

.main .left .news {
    float: left;
    margin-top: 10px;
    width: 376px;
    height: 280px;
}

.main .left .news .title {
    margin-top: 12px;
    width: 164px;
    height: 40px;
    color: rgb(0, 0, 0);
    font-size: 26px;
}

.main .left .news .more {
    margin-left: 144px;
    margin-top: 27px;
    width: 68px;
    height: 23px;
    color: rgb(128, 128, 128);
    font-size: 16px;
}

.main .left .news .photo {
    float: left;
    margin-top: 5px;
    width: 375px;
    height: 149px;
    background-size: cover;
}

.main .left .news .h1 {
    margin-top: 6px;
    height: 25px;
    color: rgb(0, 0, 0);
    font-size: 16px;
}

.main .left .news .h11 {
    border-right: 1.5px solid black;
    width: 69px;
}

.main .left .news .h12 {
    margin-left: 1px;
    width: 290px;
}

.main .left .news .h2 {
    margin-top: 4px;
    width: 374px;
    height: 38px;
    color: rgba(56, 56, 56);
    font-size: 12px;
}

.main .left .news .data {
    float: left;
    margin-top: 5px;
    width: 75px;
    height: 25px;
    line-height: 25px;
    color: rgb(94, 105, 120);
    font-size: 13px;
    text-indent: 1em;
}

.main .left .news .c {
    width: 235px;
    height: 25px;
    margin-top: 5px;
    line-height: 25px;
    color: rgb(56, 56, 56);
    font-size: 12px;
}

</style>