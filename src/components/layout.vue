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
            <div class="footer-logo"></div>
            <p>游戏</p>
          </li>
        </router-link>
        <router-link :to="{path:'/gift'}">
          <li class="footer-link-3">
            <div class="footer-logo"></div>
            <p>礼包</p>
          </li>
        </router-link>

        <router-link :to="{path:'/person'}">
          <li class="footer-link-5">
            <div class="footer-logo"></div>
            <p>个人</p>
          </li>
        </router-link>
      </ul>
    </div>


  </div>
</template>

<script>
  import WeiXin from 'weixin-js-sdk'
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

    //获取SDK配置文件
    this.$http.get('http://h5.wan855.cn/api/h5/index/getwechatsdkconf').then(function (res) {
      //平台登录信息
      this.config = res.body
      console.log(res)
      if(config !==''){
        WeiXin.config(config)
      }
    }, function (err) {
      console.log(err)
    })
  },
  data(){
      return{
        linkcolor:true,
        user:{

        },
        config:''
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
/*移动端默认样式 IOS*/
input[type=button]{
  -webkit-appearance:none;
  outline:none
}

html,body{
  height: 100%;
}
  #guoqianchen{
    max-width: 85rem;
    margin: 0 auto;
    position: relative;
    height: 100%;

  }
  .footer{
    height:5.2rem;
    background-color: #fff;
    border-top: 0.1rem solid #ededed;
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
    color:#666666;
  }
  .footer ul li div{
    margin: 0 auto;
    margin-top: 0.7rem;
    width: 2rem;
    height:2rem;
    background-size: cover!important;
  }
  .footer ul li p{
    padding-top: 0.7rem;
    line-height: 1rem;
    font-size: 1.2rem;
  }
  .footer-link-1 .footer-logo{
    background: url("../assets/icon-game.png") 0 0 no-repeat;
  }
  .footer-link-2 .footer-logo{
    background: url("../assets/icon-event.png") 0 0 no-repeat;
  }
  .footer-link-3 .footer-logo{
    background: url("../assets/icon-gift.png") 0 0 no-repeat;
  }
  .footer-link-4 .footer-logo{
    background: url("../assets/icon-community.png") 0 0 no-repeat;
  }
  .footer-link-5 .footer-logo{
    background: url("../assets/icon-person.png") 0 0 no-repeat;
  }

  .router-link-exact-active li{
    color: #4385f5 !important;
  }
  .router-link-exact-active .footer-link-1 div {
    background: url("../assets/icon-game-blue.png") 0 0 no-repeat !important;
    background-size: cover !important;
  }
  .router-link-exact-active .footer-link-2 div {
    background: url("../assets/icon-event-blue.png") 0 0 no-repeat !important;
    background-size: cover !important;
  }
  .router-link-exact-active .footer-link-3 div {
    background: url("../assets/icon-gift-blue.png") 0 0 no-repeat !important;
    background-size: cover !important;
  }
  .router-link-exact-active .footer-link-4 div {
    background: url("../assets/icon-community-blue.png") 0 0 no-repeat !important;
    background-size: cover !important;
  }
  .router-link-exact-active .footer-link-5 div {
    background: url("../assets/icon-person-blue.png") 0 0 no-repeat !important;
    background-size: cover !important;
  }

  .bottom-question{
    height: 7.8rem;
  }
  /*.list-public-title{*/
    /*height: 4rem;*/
    /*position: relative;*/
  /*}*/
  /*.list-public-title p{*/
    /*position: absolute;*/
    /*height: 3rem;*/
    /*line-height: 3rem;*/
    /*font-size: 1.4rem;*/
    /*width: 9rem;*/
    /*text-align: center;*/
    /*font-weight: bolder;*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*border-bottom: 0.2rem solid #4385f5;*/
  /*}*/
</style>
