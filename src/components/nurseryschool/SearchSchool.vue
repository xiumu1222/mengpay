<template>
  <div class="search-school-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="search-school-box">
      <div class="search-input-box">
        <input class="search-input" type="text" placeholder="搜索">
      </div>
      <div class="item-list">
        <div class="item">孟州幼儿园</div>
        <div class="item">孟州第二实验幼儿园</div>
        <div class="item">金太阳实验幼儿园</div>
        <div class="item">博尔精英幼儿园</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SearchSchool',
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
  @import "../common.less";
  .search-school-layout {
    .search-school-box {
      .search-input-box {
        font-size: 0.28rem;
        padding: 0.2rem 0;
        .search-input {
          display: block;
          width: 6.95rem;
          height: 0.6rem;
          text-align: center;
          margin: 0 auto;
          border-radius: 0.05rem;
          border: solid 1px @bordercolor;
        }
      }
      .item-list {
        background: #ffffff;
        padding-left: 0.27rem;
        font-size: 0.34rem;
        .item {
          border-bottom: solid 1px @bordercolor;
          padding: 0.28rem 0;
        }
      }
    }
  }

</style>
