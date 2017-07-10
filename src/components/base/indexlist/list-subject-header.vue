<template>
  <div class="list-subject-header">
    <router-link :to="{path:'/'}">
      <a href="javascript:;" class="subject-logo subject-logo-home"></a>
    </router-link>
    <a href="javascript:;" class="subject-title">精选专题</a>
    <!--<a href="javascript:;" class="subject-logo subject-logo-search"></a>-->
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-subject-header{
  height: 6rem;
  background-color: #52bbf8;
  position: relative;
}
  .subject-logo{
    position: absolute;
    display: block;
    height: 2rem;
    width: 2rem;
    background-size: 2rem!important;
    top:50%;
    margin-top: -1rem;
  }
  .subject-logo-home{
    left: 1.5rem;
    background: url("../../../assets/subject-header-home.png") 0 0 no-repeat;
  }
  .subject-logo-search{
    right: 1.5rem;
    background: url("../../../assets/subject-header-search.png") 0 0 no-repeat;
  }
  .subject-title{
    position: absolute;
    font-size: 1.6rem;
    height: 1.6rem;
    line-height: 1.6rem;
    top: 50%;
    margin-top: -0.8rem;
    left: 50%;
    width: 10rem;
    margin-left: -5rem;
    text-align: center;
    color: #fff;
  }
</style>
