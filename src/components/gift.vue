<template>
  <div>
    <gqc-header></gqc-header>
    <div class="gift">
      <p>游戏礼包列表</p>
      <ul class="clearfix" >
        <li class="clearfix" v-for="(game,index) in games" v-if="game.gift !== null">
          <img :src="game.pic" alt="">
          <ul class="gift-list clearfix" >
            <li class="clearfix" v-for="gift in game.gift" :class="{'gift-block':index == giftIndex}">
              <div>
                <h3>{{ gift.name }}
                  <a href="javascript:;" v-show="gift.getstatus == 0" class="gift-link gift-link-will"
                     @click="getGift(gift.id)" :gameid="gift.gid" :giftid="gift.id" :idiscommon="gift.idiscommon">领取礼包</a>

                  <!--<a href="http://h5.wan855.cn/api/h5/game/getcard?id='+gift.id" v-show="gift.getstatus == 0" class="gift-link gift-link-will">领取礼包</a>-->

                  <a :href="gift.url" v-show="gift.getstatus == 1" class="gift-link gift-link-ed" disabled="disabled">已领取</a>
                  <!--<a href="#" v-show="gift.idiscommon == 1" class="gift-link gift-link-ed">通用码</a>-->
                </h3>
                <p class="gift-content">{{ gift.content }}</p>
                <div class="gift-percentage">
                  <div :style="percentage(gift.remain_num,gift.card_num)"></div>
                </div>
                <p class="gift-percent"><span>{{ gift.card }}</span>剩余{{ percentNum(gift.remain_num,gift.card_num) }}%</p>
              </div>
            </li>
          </ul>
          <div class="gift-select-all" @click="selectAllGift(index)" :class="{'gift-none':index == giftIndex}" v-if="game.total_gift != 1">查看所有礼包</div>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  import gqcHeader from './base/header'
  import { Toast } from 'mint-ui';
export default {
  component:{
    Toast
  },
  created(){
    this.$http.get('http://h5.wan855.cn/api/h5/game/cardlist').then(function (res) {
      this.games = res.body
//      console.log('games.length'+this.games.length)
    },function (err) {
      console.log(err)
    })
  },
  components:{
    gqcHeader
  },
  data () {
    return {
      games:[

      ],
      'gift-block':false,
      'gift-none':false,
//      giftBlock:'gift-block',
//      giftNone:'gift-none',
      giftIndex:'0'
    }
  },
  methods:{
      percentage(num,sum){
          return "width:"+num/sum*100+"%"
      },
      percentNum(num,sum){
        return parseInt(num/sum*100)
      },
      selectAllGift(e){
          this.giftIndex = e;
      },
      // 获取礼包
//      getGift(gameid,giftid,idiscommon){
      getGift(id){
//    ############################ 礼包临时接口 ############################
        this.$http.get('http://h5.wan855.cn/api/h5/game/getcard?id='+id).then(function (res) {
          if(res.body.status == 1){
            Toast({
              message: '领取成功',
              position: 'middle',
              duration: 1000
            })
            history.go(0)
          }
        },function (err) {
          console.log(err)
        })
//    ############################ 礼包临时接口 ############################


//          ############################ 自动领取 ############################
        //判断是否通服
       /* if (idiscommon == "1"){
          //获取角色id
            this.$http.get('http://h5.wan855.cn/api/h5/game/myrole?gid='+gameid).then(function (res) {
                console.log('获取角色id'+res)
                if(res.body.code == 1) {
                  //向游戏内发放道具
                  this.$http.get('http://h5.wan855.cn/api/h5/game/getcard?gid=' + gameid + '&id=' + giftid + '&roleid=' + res.body.data[0].playerUid).then(function (res2) {
                    console.log('向游戏内发放道具'+res)
                    console.log(res2.body.status)
                    console.log(res2.body.auto)
                      if (res2.body.status == 1){
                        console.log('领取成功!!!!!')
                        if (res2.body.auto == 1){
                            console.log('发放成功!!!!!')
                        }
                      }
                  }, function (err) {
                    console.log(err)
                  })
                }
            },function (err) {
              console.log(err)
            })

        }else{
          this.$http.get('http://h5.wan855.cn/api/h5/game/myrole?gid='+games.id+'&sid='+games.sid).then(function (res) {

            this.games = res.body
          },function (err) {
            console.log(err)
          })
        }*/
//        ############################ 自动领取 ############################






      }
  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .gift > p{
    line-height: 3rem;
    font-size: 1.6rem;
    color: #4a4a4a;
    text-indent: 1rem;
    background-color: #fff;
  }
  .gift ul li{
    background-color: #f1f0f6;
    /*margin-bottom: 1rem;*/
  }
  .gift ul li img{
    width: 5rem;
    height:5rem;
    border-radius: 1rem;
    float: left;
    margin: 1rem;
  }
  .gift .gift-list li{
    float: right;
    width: 75%;
  }
  .gift .gift-list li:first-of-type h3{
     padding-top: 1rem;
   }
  .gift .gift-list li h3{

    font-size: 1.6rem;
    line-height: 2rem;
    color: #ff7800;
  }
  .gift .gift-list li .gift-content{
    color: #828282;
    font-size: 1rem;
    line-height: 2rem;
    height: 2rem;
    width: 15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .gift .gift-list li .gift-percentage{
    width: 90%;
    box-shadow: 0 .1rem 0.5rem ;
    border-radius: 1.2rem;
    height: 0.4rem;
  }
  .gift .gift-list li .gift-percentage div{
    background-color: #ff7800;
    height:100%;
    border-radius: 1rem;
  }
  .gift-percent{
    text-align: right;
    line-height: 2.5rem;
    color: #4d4d4d;
    font-size: 1rem;
    padding-right: 1rem;
  }
  .gift-percent span{
    float: left;
  }

  .gift-link{
    float: right;
    display: block;
    width: 6rem;
    height:2.2rem;
    line-height: 2.2rem;
    text-align: center;
    margin-right: 1rem;
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }
  .gift-link-will{
    border:0.1rem solid #ff7800;
    color: #ff7800;
  }
  .gift-link-ed{
    border:0.1rem solid #ccc;
    color: #ccc;
  }
  .gift-list li + li{
    display: none;
  }
  .gift-block{
    display: block !important;
  }
  .gift-none{
    display: none !important;
  }
  .gift-select-all{
    text-align: center;
    height: 2rem;
    line-height: 2rem;
  }
</style>
