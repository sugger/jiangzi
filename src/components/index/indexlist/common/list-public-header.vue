<template>
  <div class="list-public-header">
    <router-link :to="{path:'/'}">
      <a href="javascript:;" class="public-logo public-logo-home"></a>
    </router-link>
    <a href="javascript:;" class="public-title">{{ title }}</a>
    <!--<a href="javascript:;" class="public-logo public-logo-search"></a>-->
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props:['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-public-header{
  height: 4rem;
  background-color: #52bbf8;
  position: relative;
}
  .public-logo{
    position: absolute;
    display: block;
    height: 2rem;
    width: 2rem;
    background-size: 2rem!important;
    top:50%;
    margin-top: -1rem;
  }
  .public-logo-home{
    left: 1.5rem;
    background: url("../../../../assets/subject-header-home.png") 0 0 no-repeat;
  }
  .public-logo-search{
    right: 1.5rem;
    background: url("../../../../assets/subject-header-search.png") 0 0 no-repeat;
  }
  .public-title{
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
