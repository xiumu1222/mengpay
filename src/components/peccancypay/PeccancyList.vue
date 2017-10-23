<template>
  <div class="peccancy-list-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="peccancy-history-box">
      <div class="item-list-box check-all-box">
        <div class="item">
          <div class="item-left">
            <i class="icon iconfont icon-radio-no"></i>全选
          </div>
          <div class="item-right">缴费记录</div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">
            <div class="cell-1"><i class="icon iconfont icon-radio-no"></i>时间：2017-7-7   罚金：200</div>
            <div class="cell-2">地址：东河阳大街</div>
          </div>
          <div class="item-right"><i class="icon iconfont icon-more"></i></div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">
            <div class="cell-1"><i class="icon iconfont icon-radio-yes"></i>时间：2017-7-7   罚金：200</div>
            <div class="cell-2">地址：东河阳大街</div>
          </div>
          <div class="item-right"><i class="icon iconfont icon-more"></i></div>
        </div>
      </div>
    </div>
    <Protocol></Protocol>
    <SubmitButton v-bind:selfProps="btnProps"></SubmitButton>
  </div>
</template>
<script>
  import SubmitButton from '../common/SubmitButton.vue';
  import Protocol from '../common/Protocol.vue';
  const components = {
    SubmitButton,
    Protocol
  };
  const btnProps = {
    btnName: '缴费'
  };
  export default {
    name: 'PeccancyList',
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
      return {
        btnProps,
      }
    },
    methods: {},
    components
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../common.less";
  .peccancy-list-layout {
    .peccancy-list-box {
      .item-list-box {
        .item {
          .item-left {
            position: relative;
            padding-left: 0.37rem;

            .iconfont {
              position: absolute;
              left: 0;
              top: 0.04rem;
            }
          }
        }
        &.check-all-box {
          background: @backcolor;
          color: @f3;
          .item {
            padding: 0.2rem 0;
          }
        }
      }
    }
  }


</style>
