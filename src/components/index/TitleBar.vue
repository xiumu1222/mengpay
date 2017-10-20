<template>
  <div class="title-bar-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="title-bar-box">
      孟州本地生活
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TitleBar',
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
  .title-bar-layout {
    .title-bar-box {
      background: #ffffff;
      padding: 0.26rem 0.4rem;
      font-size: 0.24rem;
      border-bottom: solid 1px #f2f2f2;
      &:after {
        content: '';
        background: url("../../assets/icon_arrows.png") no-repeat;
        background-size: cover;
        display: block;
        width: 0.2rem;
        height: 0.3rem;
        float: right;
        position: relative;
      }
    }
  }

</style>
