import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
/**
 * 首页组件
 * */
import Index from '../components/Index.vue'

/**
 * 违章缴费
 * */
import PeccancyQuery from '../components/peccancypay/PeccancyQuery.vue'
import PeccancyPayHistory from '../components/peccancypay/PeccancyPayHistory.vue'
import PeccancyList from '../components/peccancypay/PeccancyList.vue'
import PeccancyDetail from '../components/peccancypay/PeccancyDetail.vue'
/**
 * 幼儿园
 * */
import SearchSchool from '../components/nurseryschool/SearchSchool.vue'
import PayDetail from '../components/nurseryschool/PayDetail.vue'
import PayQuery from '../components/nurseryschool/PayQuery.vue'

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/peccancyquery',
      name: 'PeccancyQuery',
      component: PeccancyQuery
    },
    {
      path: '/peccancypayhistory',
      name: 'PeccancyPayHistory',
      component: PeccancyPayHistory
    },
    {
      path: '/peccancylist',
      name: 'PeccancyList',
      component: PeccancyList
    },
    {
      path: '/peccancydetail',
      name: 'PeccancyDetail',
      component: PeccancyDetail
    },
    {
      path: '/searchschool',
      name: 'SearchSchool',
      component: SearchSchool
    },
    {
      path: '/paydetail',
      name: 'PayDetail',
      component: PayDetail
    },
    {
      path: '/payquery',
      name: 'PayQuery',
      component: PayQuery
    }
  ]
})
