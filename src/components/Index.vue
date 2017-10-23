<template>
  <div v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <SearchTitle v-bind:selfProps="selfProps"></SearchTitle>
    <AppList v-bind:selfProps="selfProps"></AppList>
    <ContentBar></ContentBar>
    <TitleBar></TitleBar>
    <AdvertList></AdvertList>
  </div>
</template>
<script>
  import request from '../util/request.js'
  import SearchTitle from './index/SearchTitle.vue';
  import AppList from './index/AppList.vue';
  import ContentBar from './index/ContentBar.vue';
  import TitleBar from './index/TitleBar.vue';
  import AdvertList from './index/AdvertList.vue';

  const components = {
    SearchTitle,
    AppList,
    ContentBar,
    TitleBar,
    AdvertList
  };
  export default {
    name: 'Index',
    props: {
      pt: {
        default: 0
      },
      pb: {
        default: 0
      }
    },
    mounted() {
      const _this = this;
      _this.appListRequestCb();
    },
    data () {
      return {
        selfProps: {
          applist: [],
          searchAppName: '',
          searchHandle: this.searchHandle
        }
      }
    },
    methods: {
      appListRequest(){

      },
      searchHandle(){
        const _this = this;
        _this.appListRequestCb(_this.selfProps.searchAppName);
      },
      appListRequestCb(appname){
        const _this = this;
        request('/base/searchapp', {'searchkey': appname}, 'post').then(function (data) {
          if (data.pub && data.pub.retcode == '00000') {
            _this.selfProps.applist = data.data;
          } else {
            alert(data.pub.retmsg);
          }
        });
      }
    },
    components
  }
</script>
<style scoped lang="less" rel="stylesheet/less">

</style>
