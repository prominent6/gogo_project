<template>
<div>
<ListContainer />
<Nav />
<Article />
</div>
  
</template>

<script>
//引入其余的组件
import ListContainer from '@/pages/Home/ListContainer';
import Nav from '@/pages/Home/Nav'
import Article from '@/pages/Home/Article'
export default {
    name:'',
    components:{
        ListContainer,
        Nav,
        Article
    }
}
</script>

<style>

</style>