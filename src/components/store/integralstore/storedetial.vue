<template>
  <div class="storedetial">
    <div class="detial clearfix">
      <img :src="goods.product_img" alt="" class="detial-img">
      <div class="detial-box">
        <p class="detial-title">{{ goods.product_name }}</p>
        <p class="detial-integral">所需积分: <span>{{ goods.integral_exchange }}</span></p>
        <p class="detial-number">剩余个数: <span>{{ goods.product_num }}</span></p>
        <router-link :to="'/store/store/storedetial/get/'+goods.id">
          <!--<input type="button" value="兑换" class="btn detial-enough" v-if="integralEnough()" >-->
          <input type="button" value="兑换" class="btn detial-enough" v-if="integralEnough()">
        </router-link>

        <input type="button" value="积分不足" class="btn detial-not-enough" v-if="!integralEnough()" disabled>
      </div>
    </div>
    <div class="title">
      <p>领取方式</p>
    </div>
    <div class="describe">
      兑换成功后,请联系客服人员&nbsp;&nbsp;第二天客服人员会统一安排发放&nbsp;客服QQ：2143548021
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.getData()
  },
  data () {
    return {
      goods:'',
      user:''
    }
  },
  methods:{
      integralEnough(){
          let userScore = this.user.score
          let goodIntegral = this.goods.integral_exchange
//          console.log(typeof userScore)
//          console.log(typeof goodIntegral)
          if(userScore >= goodIntegral){
              return true
          }else{
              return false
          }
      },
      getData(){
        this.$axios.get('/api/h5/Goods/detail?goods_id='+this.$route.params.iid)
          .then(res => {
            this.goods = res.data.product_info
          })
          .catch(function(error){
            console.log(error)
          })
        this.$axios.get('/api/h5/user/getUserinfo')
          .then(res => {
            this.user = res.data.user
          })
          .catch(function(error){
            console.log(error)
          })
      }
  },
  watch:{
      "$route":"getData"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .detial{
    height: 12rem;
    background-color: #fff;
    position: relative;
    margin-top: 1rem;
  }
  .detial-img{
    position: absolute;
    height: 10rem;
    width: 50%;
    border-radius: .6rem;
    overflow: hidden;
    top:50%;
    margin-top: -5rem;
    left: 1rem;
  }
  .detial-box{
    position: absolute;
    left: calc(2.5rem + 50%);
    top: 1rem;
  }


.detial-not-enough,.detial-enough{
  margin-top: 0.4rem;
  line-height: 2.8rem;
  height: 2.8rem;
  width: 10rem;
  border-radius: .6rem;
  font-size: 1.6rem;
  color: #fff;
}
  .detial-not-enough{
    background-color: #999;
  }
  .detial-enough{
    background-color: #4385f5;
  }
  .detial-title{
    line-height: 3rem;
    height: 3rem;
    color: #333;
    font-size: 1.6rem;
  }
  .detial-number,.detial-integral{
    color: #999;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1.2rem;
  }
  .detial-integral span{
    padding-left: .5rem;
    color: #4385f5;
  }
  .detial-number span{
    padding-left: .5rem;
  }
  .title,.describe{
    height: 3.6rem;
    line-height: 3.6rem;
    margin-top: 1rem;
    background-color: #fff;
    position: relative;
    font-size: 1.2rem;
    color: #333;
  }
  .title p{
    font-size: 1.8rem;
    line-height: 3.6rem;
    height: 3.4rem;
    position: absolute;
    left: 1rem;
    border-bottom: .2rem solid #4385f5;
  }
  .describe{
    height: auto;
    padding: 0 1rem;
  }
</style>
