<template>
  <div class="search-title-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="search-title-box">
      <input class="search-input" placeholder="违章缴费">
      <div class="scan"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SearchTitle',
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
    components: {}
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .search-title-layout {
    .search-title-box {
      background: #ffa800;
      padding: 0.16rem 0;
      text-align: center;
      .search-input {
        height: 0.56rem;
        width: 5rem;
        display: inline-block;
        background: #ffdc99;
        border-style: none;
        border-radius: 0.05rem;
        margin-right: 0.42rem;
        background-image: url("../../assets/icon_search.png");
        background-repeat: no-repeat;
        background-position: 0.17rem center ;
        background-size: 0.4rem;
        padding-left: 0.7rem;
        color: #ffffff;
        font-size: 0.3rem;
      }
      .scan {
        background: url("../../assets/icon_scan.png") no-repeat;
        background-size: contain;
        width: 0.44rem;
        height: 0.44rem;
        display: inline-block;
        position: relative;
        top: 0.08rem
      }

    }
  }


</style>
