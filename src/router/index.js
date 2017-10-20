import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Index from '../components/Index.vue'
import PeccancyQuery from '../components/PeccancyQuery.vue'
import PeccancyPayHistory from '../components/PeccancyPayHistory.vue'
import PeccancyList from '../components/PeccancyList.vue'
import PeccancyDetail from '../components/PeccancyDetail.vue'

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
    }
  ]
})
