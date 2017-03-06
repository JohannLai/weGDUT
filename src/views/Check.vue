<template>
 <div class="check">
    <div class="score" v-on:click="route('score')">
        <li class="score-icon icon" ></li>
        <span>成绩查询</span>
        <span >></span>
    </div>
    <div class="score" v-on:click="route('time')">
        <li class="exam-icon icon" ></li>
        <span>考试时间</span>
        <span >></span>
    </div>
    <div class="score" v-on:click="route('library')">
        <li class="lib-icon icon"></li>
        <span>图书查询</span>
        <span >></span>
    </div>

    <div class="score" v-on:click="route('news')">
        <li class="lib-icon icon"></li>
        <span>校内通知</span>
        <span >></span>
    </div>
    <tab message="search-active" ></tab>
 </div>

</template>

<script >
    import tab from '../components/Tab'
  
    export default {
        data() {
            return {
      
            }
        },
        components: {
            tab
        },
        methods:{
            route (name) {
              console.log(name)
               switch(name){
                 case 'score':
                  this.$router.push({ name: 'score'})
                  break;
                 case 'time':
                  this.$router.push({ name: 'time'})
                  break;
                case 'library':
                  this.$router.push({ name: 'library'})
                  break;
                case 'news':
                  this.$router.push({ name: 'news'})
                  break;
               }
            },
        }
    }
</script>
<style scoped>

    body {
        background:#f2f2f2;
    }
  
    .score {
        position: relative;
        margin-top:.4rem;
        height: 1rem;
        width: 100%;
        vertical-align:middle;;
        background-color: #FFF;
    }

    

    .icon {
        float: left;
        display: block;
        margin-top:.18rem;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
        height: .64rem;
        width: .7rem;
        background-size:1.6rem;
        
    }

    .score-icon {
        background: url(../assets/sprite.png) 8px -345px no-repeat;
    }
    .exam-icon {
        background: url(../assets/sprite.png) -62px -343px no-repeat;
    }
    .lib-icon {
        background: url(../assets/sprite.png) 8px -407px no-repeat;
    }
    .score span:nth-child(2) {
        float: left;
        line-height: 1rem;
        font-size: 0.4rem;
    }

    .score span:nth-child(3) {
        float: right;
        line-height: 1rem;
        color: gray;
        font-size: 0.6rem;
        margin-right: .3rem;
    }
</style>