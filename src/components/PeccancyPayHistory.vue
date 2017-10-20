<template>
  <div class="peccancy-payhistory-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="peccancy-payhistory-box">
      <div class="item-list-box">
        <div class="item-list-title">
          时间：2017-09-20   罚金：200
        </div>
        <div class="item">
          <div class="item-left">
            <div class="cell-1">缴费时间：2017-09-22</div>
            <div class="cell-2">地址：东河阳大街</div>
            <div class="cell-3">订单号：p123j23726</div>
          </div>
          <div class="item-right">
            处理成功
          </div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item-list-title">
          时间：2017-09-20   罚金：200
        </div>
        <div class="item">
          <div class="item-left">
            <div class="cell-1">缴费时间：2017-09-22</div>
            <div class="cell-2">地址：东河阳大街</div>
            <div class="cell-3">订单号：p123j23726</div>
          </div>
          <div class="item-right">
            处理成功
          </div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item-list-title">
          时间：2017-09-20   罚金：200
        </div>
        <div class="item">
          <div class="item-left">
            <div class="cell-1">缴费时间：2017-09-22</div>
            <div class="cell-2">地址：东河阳大街</div>
            <div class="cell-3">订单号：p123j23726</div>
          </div>
          <div class="item-right">
            处理成功
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PeccancyPayHistory',
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
  @import "./common.less";

  .peccancy-payhistory-layout {
    .peccancy-payhistory-box {
      .item-list-box {
        margin-top: 0.2rem;
        .item {
          align-items: flex-start;
          .item-left {
            .cell-1 {
              font-size: 0.34rem;
            }
            .cell-2 {
              font-size: 0.28rem;
            }
            .cell-3 {
              font-size: 0.24rem;
            }
          }
          .item-right {
            color: @f5;
            font-size: 0.34rem;
          }
        }
      }

    }
  }

</style>
