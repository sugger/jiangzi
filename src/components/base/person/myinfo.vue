<template>
  <div class="myinfo">
    <personHeader></personHeader>
    <ul>
      <li class="gap">我的账号 <span>{{ user.id }}</span></li>
      <li>游戏昵称 <span>{{ user.user_nicename }}</span></li>
      <li class="gap">充值历史 <span class="link"></span></li>
      <li v-if="user.realName === true">实名认证 <span>实名认证已通过</span></li>
      <li v-if="user.realName === false">实名认证 <span>未认证</span></li>
      <li>我的手机号 <span>{{ user.mobile }}</span></li>
      <li class="gap">性别 <span>{{ user.sex }}</span></li>
      <li>所在地区 <span>{{ user.location }}</span></li>
    </ul>
  </div>
</template>

<script>
  import personHeader from './person-header.vue'
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/index.php?m=User&a=getUserinfo').then(function(res) {
      //平台登录信息
      this.user = res.body.user
    },function (err) {
      console.log(err)
    })
  },
  data () {
    return {
      user:{}
    }
  },
  components:{
      personHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myinfo ul li{
  line-height: 4rem;
  background-color: #f1f0f6;
  border-bottom: 0.1rem solid #d4d4d4;
  font-size: 1.4rem;
  text-indent: 2.5rem;
  position: relative;
}
.myinfo ul li.gap{
  margin-top: 2rem;
}
.myinfo ul li span{
  float: right;
  padding-right: 3rem;
  color: #7e7e7e;
}
.myinfo ul li span.link{
  font-weight: normal;
  position: absolute;
  display: block;
  float: right;
  top:50%;
  right: 1rem;
  line-height: 2rem;
  margin-top: -8px;
  width: 16px;
  height:16px;
  background: url("../../../assets/person-link-logo.png") center no-repeat;
  background-size: 10px 10px;

}
</style>
