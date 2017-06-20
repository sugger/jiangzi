<template>
  <div class="person">
    <person-header></person-header>
    <div class="person-button-box">
      <ul>

            <li class="personimg1" onclick="javascript:window.location.href='http://www.guoqianchen.com'"><p>社区</p></li>

          <!--<router-link to="/person/qiandao">-->
            <!--<li class="personimg2"><p>签到</p></li>-->
          <!--</router-link>-->
          <router-link to="/person/myinfo">
            <li class="personimg3"><p>个人资料</p></li>
          </router-link>
      </ul>
    </div>
    <div class="person-list">
      <ul>
        <li>我的积分 <b>10</b></li>
        <router-link to="/person/addtel" tag="li">绑定手机 <span></span></router-link>
        <!--<router-link to="/person/realname" tag="li">实名认证 <span></span></router-link>-->
        <!--<router-link to="/person/updatepsd" tag="li"></router-link>-->
        <!--<router-link to="/person/gradeinfo" tag="li">等级说明 <span></span></router-link>-->
      </ul>
    </div>
    <!--<div class="person-logout clearfix">-->
      <!--<div>-->
        <!--<a href="">退出登录</a>-->
      <!--</div>-->
    <!--</div>-->



    <div class="follow-alert" :class="style" @click="close">
      <div class="follow-window">
        <div class="follow-heading"></div>
        <p class="follow-text">防止账号丢失</p>
        <p class="follow-text">设置后可用手机号登录</p>
        <router-link :to="{path:'/person/addtel'}">
          <a href="javascript:;" class="follow-bind">立即绑定</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import personHeader from './base/person/person-header'
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/index.php?m=User&a=getUserinfo').then(function (res) {
      //平台登录信息
      this.user = res.body.user
      if (this.user.mobile === ""){
          this.style['follow-style'] = true
      }
    }, function (err) {
      console.log(err)
    })
  },
  data () {
    return {
      style:{
        'follow-style':false
      },
      user:''
    }
  },
  components:{
      personHeader
  },
  methods:{
    follow(){
      this.style['follow-style'] = true
    },
    close(){
      this.style['follow-style'] = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>

  .person-button-box{
    height: 13rem;
    background-color: #f1f0f6;
  }
  .person-button-box ul{
    text-align: center;
  }
  .person-button-box ul li{
    display: inline-block;
    height: 7rem;
    width: 5.5rem;
    position: relative;
    margin: 2rem 1.5rem;
  }
  .person-button-box ul li p{
    text-align: center;
    color: #333;
    font-size: 1.2rem;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .person-button-box ul li:last-of-type div{
    width:76px;
  }
  .person-button-box ul li.personimg1{
    background: url("../assets/person-logo1.png") top center no-repeat;
    background-size: 5rem;
  }
  .person-button-box ul li.personimg2{
    background: url("../assets/person-logo2.png") top center no-repeat;
    background-size: 5rem;
  }
  .person-button-box ul li.personimg3{
    background: url("../assets/person-logo3.png") top center no-repeat;
    background-size: 5rem;
  }
  .person-button-box:before{
    content: '';
    height: 2rem;
    display: block;
    background-color: #fff;
  }
  .person-list{
    margin-top: 2rem;
  }
  .person-list ul li{
    line-height: 4rem;
    font-size: 1.6rem;
    padding-left: 2rem;
    border-bottom: 1px solid #d4d4d4;
    position: relative;
    text-indent: 30px;
  }
  .person-list ul li:first-of-type{
    background: url("../assets/person-list-logo.png") 13px 7px no-repeat;
    border-top: 1px solid #d4d4d4;
  }
  .person-list ul li:nth-of-type(2){
    background: url("../assets/person-list-logo.png") 13px -63px  no-repeat;

  }
  .person-list ul li:nth-of-type(3){
    background: url("../assets/person-list-logo.png") 13px -133px no-repeat;
  }
  .person-list ul li:last-of-type{
    background: url("../assets/person-list-logo.png") 13px -202px no-repeat;
  }
  .person-list ul li b{
    font-weight: normal;
    position: absolute;
    display: block;
    float: right;
    top:50%;
    height: 2rem;
    right: 2rem;
    line-height: 2rem;
    margin-top: -1rem;
  }
  .person-list ul li span{
    font-weight: normal;
    position: absolute;
    display: block;
    float: right;
    top:50%;
    right: 2rem;
    line-height: 2rem;
    margin-top: -8px;
    width: 16px;
    height:16px;
    background: url("../assets/person-link-logo.png") center no-repeat;
    background-size: 10px 10px;
  }
  .person-logout{
    height:14rem;
    background-color: #f1f0f6;
  }
  .person-logout div{
    line-height: 4rem;
    background-color: #fff;
    margin-top: 4rem;
    text-align: center;
  }
  .person-logout div a{
    display: inline-block;
    font-size: 1.8rem;
  }






  .per-tit{
    line-height: 4rem;
    text-align: center;
    color: #fff;
    background-color: #ff4d46;
    font-size: 1.6rem;
  }
  .per-content > p{
    line-height: 5.4rem;
    color: #ff4d46;
    text-align: center;
    font-size: 1.4rem;
  }
  .per-content-box{
    border: 0.1rem solid #cdcbcb;
    width: 90%;
    line-height: 4rem;
    margin: 0 auto;
    text-indent: 2rem;
    font-size: 1.2rem;
  }
  .per-content-box:first-of-type{
    margin-bottom: 2rem;

  }
  .per-content-box:last-of-type{
    margin-bottom: 4rem;
  }
  .per-content-box span{
    color: #676767;
  }
  .per-content-box input{
    width: 40%;
    height: 2.8rem;
    border:0.1rem solid #fff;
    border-left: 0.1rem solid #b2b2b2;
    outline: none;
    text-indent: 2rem;
    font-size: 1.2rem;
  }
  .per-content-box span.yzm{
    float: right;
    display: block;
    font-size: 0.8rem;
    line-height: 2rem;
    text-align: center;
    width: 6rem;
    text-indent: 0;
    margin-top: 1rem;
    background-color: #ff4d46;
    color: #fff;
    margin-right: 1rem;
  }
  .per-content-box-tit{
    float: left;
    display: block;
    width: 25%;
  }
  .per-content-submit-btn{
    display: block;
    width:90%;
    line-height: 5rem;
    color: #fff;
    background-color: #ff4d46;
    margin: 0 auto;
    text-align: center;
    font-size: 2.2rem;
  }
  .follow-alert{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height:200%;
    z-index: 999;
    background-color: rgba(0,0,0,.6);
    display: none;
  }
  .follow-style{
    display: block;
  }
  .follow-window{
    width:25rem;
    height: 25rem;
    position: absolute;
    top: 10%;
    left:50%;
    margin-left: -12.5rem;
    z-index:999;
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: #f0f0f6;
    animation: focus .5s ;
    opacity: 1;
  }
  .follow-heading{
    height:50%;
    /*background: #0aa2ff url('../../assets/logo.png') no-repeat center center;*/
    background-size:contain;
    /*background-color: #0aa2ff;*/
  }
  .follow-text{
    text-align: center;
    line-height: 2rem;
    height: 2rem;
    padding: 0.5rem 0 ;
  }
  .follow-bind{
    display: block;
    height: 3rem;
    line-height: 3rem;
    width: 14rem;
    text-align: center;
    margin: 2rem auto;
    border-radius: 3rem;
    background-color: #FD482C;
    color: #fff;
    font-size: 1.4rem;
  }
  @keyframes focus
  {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 10%;
      opacity: 1;
    }
  }
  .user-name span{
    float: right;
    transform: translateY(1rem);
  }

</style>
