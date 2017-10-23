<template>
  <div class="peccancy-detail-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="peccancy-detail-box">
      <div class="item">
        <div class="cell-1">详情：</div>
        <div class="cell-2">不按规定临时停车，影响其他车辆和行
          人通行
        </div>
      </div>
      <div class="item">
        <div class="cell-1">时间：</div>
        <div class="cell-2">2017-09-20</div>
      </div>
      <div class="item">
        <div class="cell-1">罚金：</div>
        <div class="cell-2">¥200</div>
      </div>
      <div class="item">
        <div class="cell-1">地址：</div>
        <div class="cell-2">不东河阳大街</div>
      </div>
    </div>
    <Protocol></Protocol>
    <SubmitButton v-bind:selfProps="selfProps"></SubmitButton>
  </div>
</template>
<script>
  import Protocol from '../common/Protocol.vue';
  import SubmitButton from '../common/SubmitButton.vue';
  const components = {
    Protocol,
    SubmitButton
  };

  const selfProps = {
      btnName: '缴费'
  };

  export default {
    name: 'Demo',
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
        selfProps
      }
    },
    methods: {},
    components
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../common.less";

  .peccancy-detail-layout {
    .peccancy-detail-box {
      background: #ffffff;
      margin-top: 0.2rem;
      padding: 0.27rem;
      .item {
        font-size: 0.34rem;
        .flex-block-row-start;
        align-items: flex-start;
        padding: 0.2rem 0;
        .cell-1 {
          color: @f1;
          min-width: 1.2rem;
        }
        .cell-2 {
          color: @f3;
        }
      }

    }
  }

</style>
