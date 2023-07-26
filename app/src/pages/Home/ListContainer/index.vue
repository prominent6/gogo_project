<template>
   <!-- 搜索栏 -->
    <div class="search w">
        <div class="word">你知道的和不知道的—巴厘岛 （科莫多岛+巴厘岛9日自由行）</div>
        <div class="col">
            <!-- 导航点 -->
            <div class="pointers">
                <div class="circle active"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <!-- 搜索框 -->
            <div class="search_ipt">
                <input type="text">
                <a href="#"></a>
            </div>
        </div>
        <!-- 导航按钮 -->
        <a class="button_prev fl"><i class="iconfont icon-fanhuijiantou"></i></a>
        <a class="button_next fr"><i class="iconfont icon-xiangyoujiantou"></i></a>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.search {
    height: 452px;
    background-image: url('./images/lunbo1.png');
    mix-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
}

.search .word {
    display: inline-block;
    margin-left: 65px;
    margin-top: 30px;
    width: 698px;
    height: 105px;
    font-size: 36px;
    color: rgba(255, 255, 255, 1);
}

.search .col {
    position: relative;
    left: 396px;
    top: 189px;
    width: 544px;
    height: 101px;
    border-radius: 15px;
    background-color: rgba(229, 229, 229, 0.29);
}

.search .col .circle {
    float: left;
    margin: 10px 0 0 73px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: #ffffff66;
    background-clip: content-box;
    /* 将背景颜色设置到内容区，边框和内边距不再有背景颜色 */
    border: 2px solid transparent;
    background-color: rgba(204, 204, 204, .5);
}
.active {
    background-color: #ffffff !important;
    border: 2px solid rgba(255, 255, 255, .3) !important;
}

.search .search_ipt input {
    box-sizing: border-box;
    position: relative;
    background-color: rgba(255, 255, 255, 0.3);
    left: 49px;
    top: 20px;
    width: 395px;
    height: 35px;
    border-radius: 20px;
    border: 1px solid transparent;
    text-indent: 2em;
}

.search .search_ipt input:focus {
    outline: none;
    border: 2px solid #0a90d8;
    text-indent: 2em;
}

.search .search_ipt a {
    display: block;
    position: relative;
    left: 463px;
    top: -29px;
    width: 55px;
    height: 56px;
    background-color: rgba(41, 87, 227, 1);
    background-image: url(./images/search.png);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 35%;
}
.button_prev,
.button_next{
    border: none;
    background-color: transparent;
}
.button_prev i,
.button_next i{
    color: black;
    font-weight: bold;
    font-size: 25px;
}
.button_prev i:hover,
.button_next i:hover{
    cursor: pointer;
}
</style>