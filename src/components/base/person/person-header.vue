<template>
  <div class="person-header">
    <div class="img-border">
      <img :src="user.avatar" alt="">
    </div>
    <div class="person-header-content clearfix">
      <p class="person-link">
        <a href="">用户指引</a>
        <a href="">纠纷处理方式</a>
        <a href="">用户协议</a>
      </p>
      <h3 class="person-name">{{ user.user_nicename }}</h3>
      <p class="person-grade">等级: <span>{{ user.user_status }}</span> / <span>50</span></p>
      <p class="person-id">ID: {{ user.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/index.php?m=User&a=getUserinfo').then(function (res) {
      //平台登录信息
      this.user = res.body.user
    }, function (err) {
      console.log(err)
    })
  },
  data () {
    return {
      user: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .person-header{
    height:9rem;
    background: url("../../../assets/person-nav.jpg");
    background-size: cover;
  }
  .person-header .img-border{
    border-radius: 50%;
    height: 4.2rem;
    width: 4.2rem;
    margin-top:2rem;
    margin-left: 5%;
    box-shadow: 0 0.3rem 0.5rem 0.1rem #333;
    float: left;
  }
  .person-header .img-border img{
    display: block;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin: 0.2rem auto;
  }
  .person-header-content{
    float: right;
    width: 80%;
  }
  .person-header-content .person-name{
    line-height: 2.5rem;
    color: #fff;
    font-size: 2rem;
    margin-top: 2rem;
    text-indent: 1rem;
  }
  .person-header-content .person-grade{
    width: 8rem;
    line-height: 1.6rem;
    color: #fff;
    text-align: center;
    background-color: #ff4d46;
    border-radius: 1rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
  .person-header-content .person-grade span{
    padding: 0 0.3rem;
  }
  .person-header-content .person-link{
    float: right;
    line-height: 2rem;
  }
  .person-header-content .person-link a{
    margin-right: 0.5rem;
    color:#fff;
  }
  .person-header-content .person-id{
    float: right;
    padding-right: 1rem;
    line-height: 2rem;
    font-size: 1.2rem;
    color:#fff;
  }
</style>
