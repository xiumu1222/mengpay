<template>
  <div class="submit-button-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="submit-button-box" v-on:click="selfProps.submitCallback">{{selfProps.btnName}}</div>
  </div>
</template>
<script>
  export default {
    name: 'Button',
    props: {
      pt: {
        default: 0.33
      },
      pb: {
        default: 0
      },
      selfProps: {
        default: function () {
          return {
            btnName: '按钮',
            submitCallback(){
            }
          }
        }
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

  .submit-button-layout {
    .submit-button-box {
      width: 6.95rem;
      height: 0.88rem;
      line-height: 0.88rem;
      text-align: center;
      font-size: 0.38rem;
      border-radius: 0.08rem;
      margin: 0 auto;
      background: @f5;
      color: #ffffff;
      letter-spacing: 5px;
    }

  }

</style>
