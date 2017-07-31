<template>
  <div class="storeget">
    <div class="detial clearfix">
      <img :src="goods.product_img" alt="" class="detial-img">
      <div class="detial-box">
        <p class="detial-title">{{ goods.product_name }}</p>
        <p class="store-get-select">
          积分:<span>{{ goods.integral_exchange }}</span>
          <selectNum :goodsintegral="goods.integral_exchange"
                     :userintegral="user.score" @my-event="getMyEvent"></selectNum>
        </p>
      </div>
    </div>
    <div class="storeget-integral">
      <p class="my-integral">我的积分 :<span>{{ user.score }}</span></p>
      <p class="goods-integral">礼品合计积分 :<span>{{ totalIntegral }}</span></p>
    </div>
    <div class="storeget-integral clearfix">
      <input type="button" value="结算" @click="checkout()" class="btn checkout">
    </div>
  </div>
</template>

<script>
  import selectNum from "./selectnum.vue"
  import { Toast,MessageBox } from 'mint-ui';
  import qs from 'qs';
  export default {
    created(){
      this.getData()
      console.log(this.goods.integral_exchange * this.goodsNum)
      console.log(this.goods.integral_exchange)
    },
    data () {
      return {
        goods:'',
        user:'',
        goodsNum:0
      }
    },
    computed:{
      totalIntegral(){
        return this.goods.integral_exchange * this.goodsNum
      }
    },
    methods:{
      integralEnough(){
        if(this.user.score >= this.goods.product_num){
          return true
        }else{
          return false
        }
      },
      getData(){
        this.$axios.get('/api/h5/Goods/detail?goods_id='+this.$route.params.getid)
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
      },
      getMyEvent(goodsNum){
          this.goodsNum = goodsNum
      },
      checkout(){
          let _this = this
        /*this.$axios.get('/api/h5/Goods/exchange?goods_id=' +
              this.goods.id + '&goods_num=' + this.goodsNum + '&expend_integral=' + this.goods.integral_exchange * this.goodsNum

        )*/
          let data = {
            goods_id : this.goods.id,
            goods_num : this.goodsNum,
            expend_integral : this.goods.integral_exchange * this.goodsNum
          }
          this.$axios.post('/api/h5/Goods/exchange',qs.stringify(data))
          .then(res => {
            Toast({
              message: '兑换成功',
              position: 'middle',
              duration: 1000
            })
              _this.$router.push({path:'/store/store'})

          })
          .catch(function(error){
            console.log(error)
          })



      }

    },
    watch:{
      "$route":"getData"
    },
    components:{
      selectNum,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .storeget{
    position: relative;
  }
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
    height: 10rem;
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
  .store-get-select{
    height: 2rem;
    line-height: 2rem;
    position: absolute;
    bottom: 0;
    color: #4385f5;
    font-size: 1.4rem;
  }
  .storeget-integral{
    height: 4rem;
    line-height: 4rem;
    background-color: #fff;
    margin-top: 1rem;
    position: relative;
  }
  .storeget-integral p{
    position: absolute;
    line-height: 4rem;
  }
  .my-integral{
    left:1rem;
  }
  .goods-integral{
    right: 1rem;
  }
  .checkout{
    display: block;
    height: 2.2rem;
    line-height: 2.2rem;
    border: 0.1rem solid #4385f5;
    color: #4385f5;
    width: 5rem;
    position: absolute;
    top: 50%;
    margin-top:-1.1rem;
    right: 2rem;
    border-radius: 0.4rem;
  }
  .mint-msgbox-message{
    line-height: 5rem;
  }

</style>

