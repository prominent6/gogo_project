<template>
<!-- 中部导航栏 -->
    <div class="nav w">
        <a href="#" class="first">
            <div class="word">
                <div class="title">当地游</div>
                <div class="explain">最地道的玩法体验</div>
            </div>
            <div class="photo"><img src="./images/nav1.png" alt=""></div>
        </a>
        <a href="#" class="other">
            <div class="word">
                <div class="title">自由行</div>
                <div class="explain">最地道的玩法体验</div>
            </div>
            <div class="photo"><img src="./images/nav2.png" alt=""></div>
        </a>
        <a href="#" class="other">
            <div class="word">
                <div class="title">跟团游</div>
                <div class="explain">最地道的玩法体验</div>
            </div>
            <div class="photo"><img src="./images/nav3.png" alt=""></div>
        </a>
        <a href="#" class="other">
            <div class="word">
                <div class="title">机票</div>
                <div class="explain">最地道的玩法体验</div>
            </div>
            <div class="photo"><img src="./images/nav4.png" alt=""></div>
        </a>
        <a href="#" class="other">
            <div class="word">
                <div class="title">订酒店</div>
                <div class="explain">最地道的玩法体验</div>
            </div>
            <div class="photo"><img src="./images/nav5.png" alt=""></div>
        </a>
        <a href="#" class="other">
            <div class="word">
                <div class="title">签证</div>
                <div class="explain">最地道的玩法体验</div>
            </div>
            <div class="photo"><img src="./images/nav6.png" alt=""></div>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.nav {
    margin-top: 20px;
    height: 65px;
}

.nav div {
    float: left;
}

.nav a {
    display: block;
    float: left;
    color: black;
}
.nav .first {
    width: 210px;
    height: 65px;
    border: 1px solid #c0daf7;
    border-radius: 5px;
    margin-left: 65px;
}

.nav .other {
    width: 210px;
    height: 65px;
    border: 1px solid #c0daf7;
    border-radius: 5px;
    margin-left: 10px;
}

.nav .word {
    height: 53px;
    width: 100px;
    margin-left: 10px;
    margin-top: 5px;
}

.nav .photo {
    height: 70px;
    width: 70px;
    margin-left: 20px;
    margin-top: -12px;
}

.nav .word .title {
    font-weight: 700;
    font-size: 24px;
}

.nav .word .explain {
    margin-top: 5px;
    font-size: 12px;
}
</style>