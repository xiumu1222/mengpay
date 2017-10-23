<template>
  <div class="pay-query-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="pay-query-box">
      <div class="pay-query-title">孟州幼儿园</div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">缴费金额</div>
          <div class="item-right">450</div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">缴费类型</div>
          <div class="item-right">
            保育费
          </div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">缴纳月份</div>
          <div class="item-right">
            2017-10
          </div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">学号</div>
          <div class="item-right">
            2100021
          </div>
        </div>
      </div>
    </div>
    <Protocol></Protocol>
    <SubmitButton v-bind:selfProps="selfProps"></SubmitButton>
  </div>
</template>
<script>
  import request from '../../util/request.js';

  import SubmitButton from '../common/SubmitButton.vue';
  import Protocol from '../common/Protocol.vue';

  const components = {
    SubmitButton,
    Protocol
  };

  export default {
    name: 'PayDetail',
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
        selfProps: {
          btnName: '确认缴费',
          submitCallback: this.submitCallback,
        }
      }
    },
    methods: {
      submitCallback(){
      }
    },
    components
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../common.less";

  .pay-query-layout {
    .pay-query-box {
      .pay-query-title {
        padding: 0.27rem;
        font-size: 0.34rem;
      }
    }
  }

</style>
