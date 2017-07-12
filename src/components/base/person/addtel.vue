<template>
  <div class="addtel clearfix">
    <!--previous S-->
    <div class="per-previous clearfix" v-if="user.mobile === ''">
      <img :src="user.avatar" alt="" class="per-img">
      <div class="per-content">
        <div class="per-content-box per-validate-tel">
          <input type="text" placeholder="请输入您的手机号码" v-model="tel">
        </div>
        <div class="per-content-box per-validate-message">
          <input type="text" placeholder="请输入手机验证码" v-model="yanzhengCode" >
          <input type="button" :value="yanzhengVal" class="per-validate-code per-validate-code-pre" @click="getCode()" v-if="yanzhengBtn == true">
          <input type="button" :value="yanzhengVal" class="per-validate-code per-validate-code-after"  v-else disabled style="color: #7e7e7e">
        </div>
      </div>
      <p class="fail-info">{{ fail.words }}</p>
      <a href="javascript:;" class="per-content-submit-btn" @click="bind()">提交认证</a>
    </div>
    <!--previous S-->


    <!--after S-->
    <div class="per-addtel-after" v-if="user.mobile !== ''">
      <div class="per-success">
        <p>您已绑定手机</p>
      </div>
      <div class="per-content">
        <div class="per-content-box">
          手机号:{{ user.mobile }}
        </div>
      </div>
    </div>
    <!--after E-->
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
      created(){
        this.$http.get('http://h5.wan855.cn/api/index.php?m=User&a=getUserinfo').then(function (res) {
          //平台登录信息
          this.user = res.body.user
        }, function (err) {
          console.log(err)
        })
      },
      component:{
        Toast
      },
    data () {
      return {
        tel:'',   //输入的手机号
        yanzhengCode:'',    //输入的手机验证码
        wait:60,    //手机验证码等待时间
        yanzhengVal:'获取验证码',  //手机验证码提示
        yanzhengBtn:true,   //判断手机验证码按钮true/false
        fail:{
          words:'',   //注册填写错误提示
          register:'' //注册错误提示
        },
        theClass:{
          'fail-color':true
        },
        flag:false,
        user:''
      }
    },
    methods:{
      getCode(){
        let send = {phone: this.tel, verify: this.imgCode}
        let reg = /^1[34578]\d{9}$/
        if (!(reg.test(this.tel))){
          this.fail.words = '手机号格式错误!!!'
          return;
        }
        if (this.flag === false) {
          this.$http.get('http://h5.wan855.cn/api/h5/user/sendPhoneVerify?phone='+ this.tel).then(function (res) {
            console.log(res)
            if (res.body.code === 1) {
              //成功
              this.flag = true
              this.getCodeBtn()
              this.fail.words = ''
            } else {
              //手机号格式错误
              this.fail.words = res.body.msg
            }
          }, function (err) {
            console.log(err)
          })
        } else {
          this.getCodeBtn()
        }

        //test
//        if (flag === false) {
//
//            if (true) {
//              //成功
//              flag = true
//              this.getCodeBtn()
//              this.fail.words = ''
//            } else {
//              //手机号格式错误
//              this.fail.words = res.body.msg
//            }
//
//        } else {
//          this.getCodeBtn()
//        }
      },
      getCodeBtn(){

        console.log('输出')
        console.log(this.yanzhengVal)
        console.log(this)
        let vueThis = this
        let daojishi = setInterval(function(){
          console.log(vueThis.yanzhengVal)
          console.log('每一秒,都说明我在想你')
          if(vueThis.wait === 0){
            vueThis.yanzhengVal = '获取验证码'
            vueThis.yanzhengBtn = true
            vueThis.wait = 60
            this.clearInterval(daojishi)
          }else{
            vueThis.yanzhengBtn = false
            vueThis.yanzhengVal = vueThis.wait + '秒后重试'
            vueThis.wait--
          }
        },1000)
      },
      bind(){
        let registerContent = {phone:this.tel,verify:this.yanzhengCode}
        this.$http.post('http://h5.wan855.cn/api/h5/user/bindphone',registerContent).then(function (res) {
          if (res.body.code === 1){
            //注册成功
            Toast({
              message: '绑定成功',
              position: 'middle',
              duration: 1000
            })
            console.log("跳转")
            this.$router.push({path:'/'})
          }else{
            //注册失败
            this.fail.words = res.body.msg

          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
