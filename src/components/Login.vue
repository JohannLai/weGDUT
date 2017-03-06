<template>

  <div class="box">
    <div class="banner">
      <img src="../assets/gdutlogo.png" class="gdut-logo" />
      <img src="../assets/wechat.png" class="wegdut" />
    </div>
    <div class="container">
      <div class="username"><span>学号&nbsp|&nbsp</span><input type="input" placeholder="请输入学号" name="username" /></div>
      <div class="password"><span>密码&nbsp|&nbsp</span><input type="password" placeholder="初始密码为身份证后6位" name="password" /></div>
      <span class="tips">注：请输入有效的帐号，忘记密码请前往教务系统修改。</span>
      <button class="submit">确认绑定</button>
    </div>

</template>

<script>
    import axios from 'axios'  
import VueRouter from 'vue-router'
  
export default {     components: {      },
    dat () {
      return {
        username :'',
        password :'',
        xn :'',
        xq :'',
        showloginform :'display:block',
        showloading :'display:none'
      }     },
    
//   methods: {
    
//       getScore () {    
//            self=this     
//            self.showloginform='display:none'    
//            self.showloading='display:block'
    
//           axios.post('http://106.185.54.193:8000/snippets/', {    
//                 username:this.username,    
//                 password:this.password,    
//                 xn:'2014-2015',    
//                 xq:'1'    
//               })    
//               .then(function (response) {      
//                 var texts =  response.data.score    
//                 const jidian=response.data.jidian    
//                  for(var text in texts){    
//                   console.log(texts[text])    
//                   var goal = texts[text]    
//                   self.$store.commit('addScore', {text ,goal,jidian})    
//                   self.$router.push('/allGoal')    
//                 }    
//               })    
//               .catch(function (error) {    
//                 self.showloginform='display:block'    
//                 self.showloading='display:none'     
//                 console.log(error);    
//            });
     
// }    
// }  
}

</script>
<style>
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
  div,
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
    height: 5rem;
    width: 100%;
    text-align: center;
    background-color: #249F7B
  }
  
  .gdut-logo {
    width: 1.5rem;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  
  .wegdut {
    width: 3.5rem;
    position: relative;
    top: 3.7rem;
  }
  
  .container {
    margin: 0.6rem 0.2rem 0.1rem;
    text-align: center;
  }
  
  .username,
  .password {
    background: white;
    margin: 0.2rem;
    border-radius: 0.1rem;
    text-align: left;
  }
  
  .username span,
  .password span {
    font-size: 0.4rem;
    padding-left: .3rem;
  }
  
  input {
    width: 3.8rem;
    height: 1rem;
    padding-left: 0.2rem;
    border: none;
    border-radius: 0.1rem;
    font-size: 0.4rem;
  }
  
  .tips {
    color: gray;
  }
  
  .submit {
    width: 6rem;
    height: 1rem;
    margin-top: 0.5rem;
    font-size: 0.4rem;
    border-radius: 0.1rem;
    color: #FFF;
    background-color: #249F7B;
  }
</style>