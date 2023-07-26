<template>
<div class="main w">
    <!-- 左边的板块 -->
     <div class="left">
        <LeftHot/>
        <LeftRecommand/>
    </div>
    <Right />
</div>
</template>

<script>
import LeftHot from './LeftHot'
import LeftRecommand from './LeftRecommand'
import Right from './Right'

export default {
name:'',
    components:{
        LeftHot,
        LeftRecommand,
        Right
    }
}
</script>

<style>
.main {
    height: 1574px;
    margin-top: 20px;
}

.main .left {
    margin-left: 65px;
    float: left;
    width: 385px;
    height: 625px;
}
</style>