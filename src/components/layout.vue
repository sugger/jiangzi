<template>
  <div id="guoqianchen">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <div class="bottom-question">

    </div>
    <div class="footer">
      <ul>
        <router-link :to="{path:'/'}">
          <li class="footer-link-1">
            <div class="footer-logo-1"></div>
            <p>游戏</p>
          </li>
        </router-link>
        <router-link :to="{path:'/gift'}">
          <li class="footer-link-2">
            <div class="footer-logo-2"></div>
            <p>礼包</p>
          </li>
        </router-link>

          <!--<li class="footer-link-3">-->
            <!--<div class="footer-logo-3" onclick="javascript:window.location.href='http://www.guoqianchen.com'"></div>-->
            <!--<p>商城</p>-->
          <!--</li>-->

        <router-link :to="{path:'/person'}">
          <li class="footer-link-4">
            <div class="footer-logo-4"></div>
            <p>个人</p>
          </li>
        </router-link>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/h5/user/getUserinfo').then(function(res) {
      //平台登录信息
      if (res.body.user === null){
          //第三方登录信息
        if (res.body.oauth === null){
          console.log('跳转到授权接口')
          window.location.href = 'http://h5.wan855.cn/api/h5/user/oauthlogin/oauthtype/wechat'
          console.log('授权接口跳转完成')
        }else{
          this.$router.push({path:'/register'})
        }
      }else{
          this.user = res.body.user
      }
    },function (err) {
      console.log(err)
    })



  },
  data(){
      return{
        linkcolor:true,
        user:{

        }
      }
  },
  methods:{

  }
}
</script>

<style>
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;

    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background-color: #fff;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    /*font-size: 14px;*/
    color: #272727;
  }
/************
* 页面样式
************/
/* ============
    基本默认值
 ============ */
html{
  font-size: 62.5%;
  color: #222;
}
::selection{
  background-color: #b3d4fc;
  text-shadow: none;
}
ul{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
/* ============
    工具样式
 ============ */

.center-block{
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.pull-right{
  float: right !important;
}
.pull-left{
  float: left !important;
}
.text-right{
  text-align: right !important;
}
.text-left{
  text-align: left !important;
}
.text-center{
  text-align: center !important;
}
.hide{
  display: none !important;
}
.show{
  display: block !important;
}
.invisible{
  visibility: hidden;
}
.text-hide{
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
/*清除浮动*/
.clearfix:before,
.clearfix:after{
  content: " ";
  display: table;
}
.clearfix:after{
  clear: both;
}
  #guoqianchen{
    max-width: 85rem;
    margin: 0 auto;
    position: relative;
  }
  .footer{
    height:4.6rem;
    background-color: #f1f0f6;
    max-width: 85rem;
    position: fixed;
    bottom: 0;
  }
  .footer{
    text-align: center;
    width: 100%;
  }
  .footer ul li{
    display: inline-block;
    width: 20%;
    font-size: 1.4rem;
    height: 7rem;
    line-height: 2rem;
    color:#333;
  }
  .footer ul li div{
    margin: 0 auto;
    margin-top: 0.9rem;
    width: 2rem;
    height:2rem;
    background-size: cover;
  }
  .footer ul li p{
    line-height: 1.4rem;
    font-size: 0.4rem;
  }
  .footer-logo-1{
    background: url("../assets/layout1.png") 0 0 no-repeat;
  }
  .footer-logo-2{
    background: url("../assets/layout2.png") 0 0 no-repeat;
  }
  .footer-logo-3{
    background: url("../assets/layout3.png") 0 0 no-repeat;
  }
  .footer-logo-4{
    background: url("../assets/layout4.png") 0 0 no-repeat;
  }


  .router-link-exact-active li{
    color: #ff7800 !important;
  }
  .router-link-exact-active .footer-link-1 div {
    background: url("../assets/layout-active1.png") 0 0 no-repeat !important;
    background-size: cover !important;
  }
  .router-link-exact-active .footer-link-2 div {
    background: url("../assets/layout-active2.png") 0 0 no-repeat !important;
    background-size: cover !important;
  }
  .router-link-exact-active .footer-link-4 div {
    background: url("../assets/layout-active4.png") 0 0 no-repeat !important;
    background-size: cover !important;
  }
  .bottom-question{
    height: 7.8rem;
  }

</style>
