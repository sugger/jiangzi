<template>
  <div class="person">
    <person-header></person-header>
    <div class="person-function">
  <!--    <li class="person-function-gap person-score">
        <span class="person-function-tit">我的积分</span>
        <span class="person-function-score">121</span>
      </li>-->
      <!--<router-link to="/person/qiaodao" tag="li" class="person-qiandao person-function-gap">
        <span class="person-function-tit">签到</span>
      </router-link>-->
      <router-link to="/person/realname" tag="li" class="person-function-gap person-realname">
        <span class="person-function-tit">实名认证</span>
      </router-link>
  <!--    <router-link to="/person/addtel" tag="li" class="person-addtel">
        <span class="person-function-tit">绑定手机</span>
      </router-link>-->
    <!--  <router-link to="/person/gradeinfo" tag="li" class="person-function-gap person-gradeinfo">
        <span class="person-function-tit">用户条例</span>
      </router-link>
      <router-link to="/person/" tag="li" class="person-function-gap person-online">
        <span class="person-function-tit">在线客服</span>
      </router-link>-->
    </div>
    <a href="javascript:;" class="person-exit">退出</a>


    <!--手机绑定弹出层 S-->
    <div class="follow-alert" :class="style" @click="close">
      <div class="follow-window">
        <!--<div class="follow-heading"></div>-->
        <p class="follow-text follow-text-header">防止账号丢失</p>
        <p class="follow-text">设置后可用手机号登录</p>
        <router-link :to="{path:'/person/addtel'}">
          <a href="javascript:;" class="follow-bind">立即绑定</a>
        </router-link>
      </div>
    </div>
    <!--手机绑定弹出层 E-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import personHeader from './person/person-header'
export default {
  created(){
    this.$http.get('/api/h5/user/getUserinfo').then(function (res) {
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
  .person{
    height: calc(100% - 5.2rem);
    background-color: #ececec;
  }
  .person-function li{
    height: 5rem;
    line-height: 5rem;
    text-indent: 6rem;
    background-size: 3.5rem,1rem;
    font-size: 1.6rem;
    color: #444;
    background-color: #fff;
    border-bottom: 0.1rem solid #ececec;
  }
  .person-function-score{
    float: right;
    padding-right: 1.6rem;
    font-weight: normal;
    color: #999;
  }
  .person-function-gap{
    margin-top: 1rem;
  }
  .person-score{
    background: url("../assets/score.png")  1.6rem center no-repeat
  }
  .person-qiandao{
    background: url("../assets/qiandao.png")  1.6rem center no-repeat,
    url("../assets/person-function-right.png")  right 1.6rem center no-repeat;
  }
  .person-realname{
    background: url("../assets/realname.png")  1.6rem center no-repeat,
    url("../assets/person-function-right.png")  right 1.6rem center no-repeat;
  }
  .person-addtel{
    background: url("../assets/addtel.png")  1.6rem center no-repeat,
    url("../assets/person-function-right.png")  right 1.6rem center no-repeat;
  }
  .person-gradeinfo{
    background: url("../assets/userinfo.png")  1.6rem center no-repeat,
    url("../assets/person-function-right.png")  right 1.6rem center no-repeat;
  }
  .person-online{
    background: url("../assets/online.png")  1.6rem center no-repeat,
    url("../assets/person-function-right.png")  right 1.6rem center no-repeat;
  }
  .person-exit{
    display: block;
    width: 80%;
    margin:2rem auto 0;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 2rem;
    background-color: #4385f5;
    border-radius: 2rem;
    color: #fff;
  }

  .follow-alert{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    z-index: 999;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    display: none;
  }
  .follow-style{
    display: block;
  }
  .follow-window{
    width:25rem;
    height: 15rem;
    position: absolute;
    top: 50%;
    left:50%;
    margin-left: -12.5rem;
    margin-top: -7.5rem;
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
    font-size: 1.4rem;
  }
  .follow-text-header{
    line-height: 2.5rem;
    height: 2.5rem;
    font-size: 1.8rem;
    margin-top: 1rem;
  }
  .follow-bind{
    display: block;
    height: 3rem;
    line-height: 3rem;
    width: 14rem;
    text-align: center;
    margin: 2rem auto 0;
    border-radius: 3rem;
    background-color: #FD482C;
    color: #fff;
    font-size: 1.4rem;
  }
  @keyframes focus
  {
    from {
      top: 40%;
      opacity: 0;
    }
    to {
      top: 50%;
      opacity: 1;
    }
  }


</style>
