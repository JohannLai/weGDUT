<template>

  <div class="box">
    <div class="banner">
      <img src="../assets/gdutlogo.png" class="person-logo" />
      <p>黎志航</p>
      <p>3114006472</p>

    </div>
    <div class="mine">
        <li class="score-icon icon"></li>
        <span>反馈</span>
        <span >></span>
    </div>
    <div class="mine">
        <li class="exam-icon icon"></li>
        <span>关于</span>
        <span >></span>
    </div>

</template>

<script>
    import axios from 'axios'  
import VueRouter from 'vue-router'
  
export default {     components: {      },
    data () {
      return {
       
      }     },
    

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
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
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
    height: 3.6rem;
    width: 100%;
    text-align: center;
    background-color: #249F7B
  }
  .banner P{
    position: relative;
    top:2.5rem;
    color: #FFF;
    font-size: .3rem;
  }
  .person-logo {
    width: 1.3rem;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  


  
   .mine {
        position: relative;
        margin-top:.2rem;
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
    .mine span:nth-child(2) {
        float: left;
        line-height: 1rem;
        font-size: 0.4rem;
    }

    .mine span:nth-child(3) {
        float: right;
        line-height: 1rem;
        color: gray;
        font-size: 0.6rem;
        margin-right: .3rem;
    }
  
</style>