<template>
  <div class="">
<!--{{ $route.params.id }}-->

    <div class="paying-list">
      <img src="" alt="">
      <p>game name</p>
    </div>
    <div class="select-money">
      <h3>请选择充值金额</h3>
      <div>
        <input type="radio" v-model="Money" id="five" value="5" name="money">
        <label for="five">5</label>
        <input type="radio" v-model="Money" id="ten" value="10" name="money">
        <label for="ten">10</label>
        <input type="radio" v-model="Money" id="fifty" value="50" name="money">
        <label for="fifty">50</label>
        <input type="radio" v-model="Money" id="hundred" value="100" name="money">
        <label for="hundred">100</label>
        <input type="radio" v-model="Money" id="fivehundred" value="500" name="money">
        <label for="fivehundred">500</label>
        <input type="radio" v-model="Money" id="thousand" value="1000" name="money">
        <label for="thousand">1000</label>
        <input type="radio" v-model="Money" id="twothousand" value="2000" name="money">
        <label for="twothousand">2000</label>
        <input type="radio" v-model="Money" id="fivethousand" value="5000" name="money">
        <label for="fivethousand">5000</label>
      </div>
    </div>
    <p class="other-money">充值金额: <input type="text" v-model="Money" name="money"><span>*</span>请输入（10-50000）之间的整数</p>

    <input type="button" value="立即充值" class="charge-now">
  </div>
</template>

<script>
export default {
    created(){
      this.$http.get('/api/hotgames').then(function(res) {
        this.hotgames = res.data
      },function (err) {
        console.log(err)
      })
    },
  data () {
    return {
      Money:5
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .paying-list {
    height: 6rem;
    border-bottom: 0.1rem solid #a4a4a4;
  }
  .paying-list  img{
    float: left;
    width: 4rem;
    height:4rem;
    border-radius: 1rem;
    margin-top: 1rem;
    margin-left: 2rem;
  }
  .paying-list  p{
    float: left;
    line-height: 6rem;
    font-size: 1.6rem;
    margin-left: 4rem;
  }
  input[type='radio']{
    height: 0;
    width:0;
    display: none;
  }
  .select-money > div{
    text-align: center;
  }
  .select-money h3{
    font-size: 1.8rem;
    color: #b1b1b1;
    line-height: 4rem;
    padding-left: 2rem;
  }
  .select-money label{
    display: inline-block;
    width: 6rem;
    height: 3rem;
    border: 0.1rem solid #ff7800;
    line-height: 3rem;
    margin:  1rem;
    text-align: center;
    font-size: 1.6rem;
  }
  .select-money input[type="radio"]:checked + label{
    background-color: #ff7800;
    color: #fff;
  }
  .other-money{
    line-height: 5rem;
    font-size: 1.2rem;
    padding-left: 2rem;
    color:#404040;
    margin-top: 3rem;
  }
  .other-money input{
    width:5rem;
    height: 1.6rem;
    border:0.1rem solid #bababa;
    text-indent: 0.5rem;
    font-size: 1.2rem;
  }
  .other-money span{
    color: #c81010;
    padding: 0 0.5rem;
    font-size: 1.6rem;
  }
.charge-now{
  display: block;
  background-color: #ff7800;
  width: 90%;
  color: #fff;
  border: none;
  outline: none;
  height: 6rem;
  font-size: 2.2rem;
  margin: 4rem auto;
}
</style>
