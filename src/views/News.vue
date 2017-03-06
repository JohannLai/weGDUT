<template>
 <div class="news">
    <div class = "news-header"> 
        <span> &lt </span>
        <span>学校新闻</span>
    </div>

    
    <div class="newses" v-for="news in newses" @click="detailNews(news.NewsRd)">
        <span class="title">{{news.Title}}</span>
        <hr>
        <p class="font-color-gray">单位：{{news.Unit}}</p>
        <p class="font-color-gray">分类：{{news.Colu}}</p>
        <p class="font-color-gray">时间：{{news.RelDate}}</p>
    </div>



    
 </div>

</template>

<script >
    import tab from '../components/Tab'
    import axios from 'axios'  
    import VueRouter from 'vue-router'

   
    export default {
        data() {
            return {
                newses : ''
            }
        },
        components: {
            tab
        },

        mounted : function(){
                self = this;
                axios.get('http://localhost:3000/gdutnews')    
                    .then(function (response) {      
                        console.log(response.data.news_ifw_Accs_GetList_list1)
                        var errorCode = response.data.error;
                        if(errorCode == 0){
                            self.newses = response.data.news_ifw_Accs_GetList_list1;
                        }
                        // self.$store.commit('addScore', {text ,goal,jidian})    
                        // self.$router.push('/allGoal')                       
                    })    
                    .catch(function (error) {         
                        console.log(error);    
                });      
       
        },
        methods:{
            detailNews: function (NewsRd){
                console.log(NewsRd)
                this.$router.push({ name: 'newsDetail', params: { 'NewsRd': NewsRd }})
            } 
        }
    }
</script>
<style scoped>

    body {
        background:#f2f2f2;
    }
    .library {
        position: relative;
        text-align: center;
    }
    .news-header{
        height: .9rem;
        background-color: #249F7B;
        line-height: .9rem;
        overflow:hidden;
        text-align: center;
        color: #FFF;
        font-size: .4rem;
    }

    .news-header :nth-child(1){
        float: left;
    }
  
    .newses {
        position: relative;
        margin-top:.2rem;
        padding: .3rem;
        text-align: left;
        background-color:#FFF;
    }
    .title {
        font-size: .12rem;
    }

    .font-color-gray{
        color: gray;
    }
</style>