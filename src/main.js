// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Index from './components/index.vue'
import Gift from './components/gift.vue'
import Person from './components/person.vue'
import Pay from './components/base/person/pay.vue'
import Qiandao from './components/base/person/qiandao.vue'
import Myinfo from './components/base/person/myinfo.vue'
import Paying from './components/base/person/paying.vue'
import Addtel from './components/base/person/addtel.vue'
import Realname from './components/base/person/realname.vue'
import Updatepsd from './components/base/person/updatepsd.vue'
import Gradeinfo from './components/base/person/gradeinfo.vue'
import Register from './components/register.vue'
import Gamedetial from './components/gamedetial.vue'
import Newsdetial from './components/newsdetial.vue'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true
let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/',
      component: Index
    },
    {
      path:'/gift',
      component: Gift
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/person/pay',
      component:Pay
    },
    {
      path:'/person/qiandao',
      component:Qiandao
    },
    {
      path:'/person/myinfo',
      component:Myinfo
    },
    {
      path:'/pay/paying/:id',
      component:Paying
    },
    {
      path:'/person/addtel',
      component:Addtel
    },
    {
      path:'/person/realname',
      component:Realname
    },
    {
      path:'/person/updatepsd',
      component:Updatepsd
    },
    {
      path:'/person/gradeinfo',
      component:Gradeinfo
    },
    {
      path:'/register',
      component: Register
    },
    {
      path:'/gamedetial/:gid',
      component: Gamedetial
    },
    {
      path:'/newsdetial/:aid',
      component: Newsdetial
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#guoqianchen',
  router,
  template: '<Layout/>',
  components: { Layout }
})
