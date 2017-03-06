<template>
 <div class="news">
    <div class = "news-header"> 
        <span> &lt </span>
        <span>学校新闻</span>
        
    </div>

    <div class="newsDetail" v-html="news"></div>



 </div>

</template>

<script >
    import tab from '../components/Tab'
    import axios from 'axios'  
    import VueRouter from 'vue-router'
   
    export default {
        data() {
            return {
                news : ''
            }
        },
        components: {
            tab
        },



        mounted : function(){
                var NewsRd = this.$route.params.NewsRd;
                console.log(NewsRd)
                self = this;
                axios.get('http://localhost:3000/gdutnews/detail/?NewsRd='+NewsRd)    
                    .then(function (response) {      
                        self.news = response.data;                    
                    })    
                    .catch(function (error) {         
                        console.log(error);    
                });      
       
        },
        
       
      
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
  
    .newsDetail {
        font-size: .25rem;
        margin: .2rem;
    }
    .newsDetail p img {
        width: .3rem;
    }
    
</style>