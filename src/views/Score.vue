<template>

  <div class="box">
    <div class="banner">
      <p class="gpa-title">平均绩点</p>
      <p class="gpa-score">4.09</p>  
    </div>
    <div class="score-tips">
       <p>已经开启推送</p>
    </div>

    <div class="all-score">
      <!--成绩列表-->
      <div class="per-score">
        <span class="sub"><strong>大学物理</strong></span><span class="sub-gpa">2.0</span><br><br>
        <span class="sub-socre">成绩：90分</span>
        <span class="one-key">一键评教</span>
      </div><hr>

      <div class="per-score">
        <span class="sub"><strong>网络操作系统</strong></span><span class="sub-gpa">2.0</span><br><br>
        <span class="sub-socre">成绩：82分</span>
        <span class="one-key-gray">一键评教</span>
      </div><hr>

      <div class="per-score">
        <span class="sub"><strong>计算机科学概论</strong></span><span class="sub-gpa">2.0</span><br><br>
        <span class="sub-socre">成绩：95分</span>
        <span class="one-key">一键评教</span>
      </div><hr>

      
    </div>



    <div class="score-bar">
          <span><strong>大学成绩分布图</strong></span><br>
          <canvas id="circle" width="400" height="300">您的浏览器暂不支持Canvas</canvas> 
          <span class="legend">标注：
            <li> <60 </li>
            <li> 60~70 </li>
            <li> 70~80 </li>
            <li> 80~90 </li>
            <li> 90~100 </li>
          </span>
    </div>
</div>
</template>
<script type="text/javascript"> 
  
  


    import axios from 'axios'  
import VueRouter from 'vue-router'
  
export default {     
  components: {

  },
  data () {
      return {
       
      }     
      
      },
  mounted : function(){
    var data = [5,35,10,30,20];   
    var color = ["#27255F","#2F368F","#3666B0","#2CA8E0","#77D1F6"];   
    var canvas = document.getElementById("circle");  
    var ctx = canvas.getContext("2d");  
    var startPoint=0;
    for(var i=0;i<data.length;i++){   
        ctx.fillStyle = color[i];   
        ctx.beginPath();   
        ctx.moveTo(200,150);   
        ctx.arc(200,150,150,startPoint,startPoint+Math.PI*2*(data[i]/100),false);   
        ctx.fill();   
        startPoint+=Math.PI*2*(data[i]/100);   
    }   
  }
}

</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  *,
  *:before,
  *:after {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  html,
  body,
  span,
  img,
  ins,
  kbd,
  {
    border: 0 none;
    font-size: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    /* 在X5新内核Blink中，在排版页面的时候，会主动对字体进行放大，会检测页面中的主字体，当某一块字体在我们的判定规则中，认为字号较小，并且是页面中的主要字体，就会采取主动放大的操作。然而这不是我们想要的，可以采取给最大高度解决 */
    max-height: 100000px;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }
  
  em,
  strong {
    font-style: normal;
  }
  
  ul,
  ol,
  li {
    list-style: none;
  }
  
  body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
    line-height: 1.5;
    color: #333;
    background-color: #f2f2f2;
    font-size: 0.24rem;
  }
  
  a {
    text-decoration: none;
  }
  
  .box {
    position: relative;
    max-width: 70rem;
    margin: 0 auto;
  }
  
  .banner {
    position: relative;
    height: 3rem;
    width: 100%;
    text-align: center;
    background-color: #249F7B
  }

  .gpa-title{
    position: relative;
    top:.8rem;
    color: #FFF;
    font-size: .34rem;
  }

  .gpa-score{
    position: relative;
    top:.4rem;
    margin-top:.2rem;
    color: #FFF;
    font-size: .9rem;
  }

  .score-tips{
    position: relative;
    height: .6rem;
    text-align: center;
    max-width: 2rem;
    left: 0;
    right: 0;
    margin: .3rem auto;
    border-radius: .2rem;
    background: hsla(0, 0%, 20%, 0.4);
  }
   
  .score-tips p {
    line-height: .6rem;
    font-size: .2rem;
    color: #FFF;
  }
   .mine {
        position: relative;
        margin-top:.2rem;
        height: 1rem;
        width: 100%;
        vertical-align:middle;;
        background-color: #FFF;
    }

    .all-score {
       position: relative;
       margin: .5rem;
    }

    .per-score {
      margin-bottom: .5rem;
    }
    .sub {
      float: left;
      font-size: .3rem;
    }
    .sub-socre{
      float: left;
      margin-top: -.1rem;
      font-size: .3rem;
    }
    .sub-gpa{
      float: left;
      width: .5rem;
      height: .35rem;
      margin-left: .2rem;
      text-align: center;
      border-radius: .15rem;
      color: #FFF;
      background-color: #249F7B;
    }
    .one-key{
      float: right;
      margin-top: -.1rem;
      font-size: .25rem;
      height: .4rem;
      width: 1.5rem;
      line-height: .4rem;
      margin-left: .2rem;
      text-align: center;
      border-radius: .15rem;
      color: #FFF;
      background-color: #249F7B;
    }
    .one-key-gray{
      float: right;
      margin-top: -.1rem;
      font-size: .25rem;
      height: .4rem;
      width: 1.5rem;
      line-height: .4rem;
      margin-left: .2rem;
      text-align: center;
      border-radius: .15rem;
      color: #FFF;
      background-color: hsla(0, 0%, 20%, 0.4);
    }

    .score-bar {
      width: 4rem;
      margin: 0 auto;
      padding-top: .3rem;
      text-align: center;
    }
    .score-bar span {
      font-size: .3rem;
    }
    .score-bar canvas {
      margin-top: .4rem;
    }

    .legend li{
      width: 1rem;
      margin: .2rem auto;
      border-radius: .1rem;
      color: #FFF;
    }

    .legend :nth-child(1){
       background-color: #77D1F6;
    }
    .legend :nth-child(2){
       background-color: #77D1F3;
    }
   .legend :nth-child(3){
       background-color: #2CA8E0;
    }
   .legend :nth-child(4){
       background-color: #3666B0;
    } 

</style>