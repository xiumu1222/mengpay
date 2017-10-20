<template>
  <div v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <SearchTitle></SearchTitle>
    <AppList></AppList>
    <ContentBar></ContentBar>
    <TitleBar></TitleBar>
    <AdvertList></AdvertList>
  </div>
</template>
<script>
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
  }
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

    },
    data () {
      return {}
    },
    methods: {},
    components
  }
</script>
<style scoped lang="less" rel="stylesheet/less">

</style>
