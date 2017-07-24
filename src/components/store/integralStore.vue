<template>
  <div class="integral-store">
    <!--广播部分 S-->
    <Boardcast></Boardcast>
    <!--广播部分 E-->
    <h1 class="commodity-title">兑换商品</h1>
    <!--商品列表 S-->
    <div class="commodity-list">
      <ul>
        <router-link tag="li" v-for="item in commodity" :to="{path:'/store/store/storedetial/'+item.id}">
          <img :src="item.product_img" alt="">
          <p class="commodity-list-tit">{{ item.product_name }}</p>
          <p class="commodity-list-integral">{{ item.product_descript }}</p>
        </router-link>
      </ul>
    </div>
    <!--商品列表 E-->
  </div>
</template>

<script>
import Boardcast from "./integralstore/boardcast.vue"

  export default {
      created(){
        this.$axios.get('http://h5.wan855.cn/api/h5/Goods/info')
          .then(res => {
            this.commodity = res.data
            console.log(this.commodity)
          })
          .catch(function(error){
              console.log(error)
          })
      },
    data(){
        return{
          commodity:[]
        }
    },
    components:{
      Boardcast
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .commodity-title{
    height: 5rem;
    line-height: 5rem;
    font-size: 1.8rem;
    font-weight:bold;
    text-align: center;
    background-color: #fff;
    color: #333;
  }
  /*积分列表*/
.commodity-list ul li{
  width: calc((100% - 0.5rem)/2);
  height: 9rem;
  background-color: #fff;
  margin-top: 0.5rem;
  float: left;

}
.commodity-list ul li:nth-of-type(even){
  margin-left: 0.5rem;
}
  .commodity-list ul li img{
    display: block;
    margin:0 auto;
    width: 10rem;
    height: 5rem;
    border: none;
    outline: none;
    margin-top: .5rem;
  }
  .commodity-list-tit{
    font-size: 1.4rem;
    font-weight: bolder;
    color: #333;
    height: 2.5rem;
    line-height: 2.5rem;
    text-indent: 1rem;
  }
  .commodity-list-integral{
    font-size: 1.2rem;
    color: #ff6b4f;
    text-indent: 1rem;
    height: 2rem;
    line-height: 2rem;
  }
</style>
