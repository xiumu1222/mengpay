<template>
  <div class="content-bar-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="content-bar-box">
      <div class="content-icon">
        <img src="../../assets/icon_credit.png">
      </div>
      <div class="content-desc">·个人征信查询</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ContentBar',
    props: {
      pt: {
        default: 0.26
      },
      pb: {
        default: 0.26
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
  .content-bar-layout {
    .content-bar-box {
      background: #ffffff;
      padding: 0.25rem 0rem;
      position: relative;
      .content-icon {
        display: inline-block;
        position: absolute;
        left: 0.4rem;
        top: 0.1rem;
        img {
          height: 0.58rem;
          width: 0.58rem;
        }

      }
      .content-desc {
        display: inline-block;
        margin-left: 1rem;
      }
    }

  }

</style>
