<template>
  <div class="selectnum">
    <input class="btn select-btn" type="button" value="+" @click="add()">
    <input class="btn" type="text" v-model.number="goodsNum">
    <input class="btn select-btn" type="button" value="-" @click="minus()">
  </div>
</template>

<script>
export default {
  props:['goodsintegral','userintegral'],
  data () {
    return {
      goodsNum:0
    }
  },
  methods:{
      add(){
          this.goodsNum++
          let allIntegral = this.goodsnumber * this.goodsNum    //商品数 * 商品单价 = 商品积分总数
          if (allIntegral > this.userintegral){
              this.goodsNum--
              this.$emit('my-event',this.goodsNum)
              return;
          }
          this.$emit('my-event',this.goodsNum)
      },
      minus(){
          if (this.goodsNum>0){
            this.goodsNum--
            this.$emit('my-event',this.goodsNum)
          }else{
              return;
          }

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selectnum{
  float: right;
  margin-left: 1rem;
}
  .selectnum input[type="text"]{
    width: 2rem;
    text-align: center;
    color: #aaa;
    font-size: 1.6rem;
  }
  .select-btn{
    color: #888;
    background-color: #ececec;
    width: 1.6rem;
    height: 1.6rem;
  }
</style>
