<template>
  <div class="protocol-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="protocol-box">
      <div class="agree-radio on"></div>
      <div>
        同意
      </div>
      <div class="agree-link">
        《孟之付自助缴费服务协议》
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Protocol',
    props: {
      pt: {
        default: 0.15
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
  .protocol-layout {
    .protocol-box {
      width: 6.95rem;
      font-size: 0.28rem;
      margin: 0 auto;
      .flex-block-row-start;
      .agree-radio {
        width: 0.28rem;
        height: 0.28rem;
        border-radius: 0.28rem;
        position: relative;
        background: #dedede;
        margin-right: 0.1rem;
        &.on {
          background: @f5;
        }
        &:after {
          content: '';
          display: block;
          width: 0.09rem;
          height: 0.14rem;
          border-right: solid 2px #ffffff;
          border-bottom: solid 2px #ffffff;
          transform: rotate(45deg);
          position: absolute;
          left: 0.08rem;
          top: 0.04rem;
        }
      }
      .agree-link {
        color: @f5;
      }
    }
  }

</style>
