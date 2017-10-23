<template>
  <div class="pay-query-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="pay-query-box">
      <div class="pay-query-title">孟州幼儿园</div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">学号</div>
          <div class="item-right">
            <input class="item-input" v-on:input="" type="text" placeholder="请输入学号">
          </div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">缴费类型</div>
          <div class="item-right">
            <SingleSelect v-bind:selfProps="selfProps.jflxProps"></SingleSelect>
          </div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">缴纳月份</div>
          <div class="item-right">
            <SingleSelect v-bind:selfProps="selfProps.jnyfProps"></SingleSelect>
          </div>
        </div>
      </div>
    </div>
    <SubmitButton v-bind:selfProps="selfProps"></SubmitButton>
  </div>
</template>
<script>
  import request from '../../util/request.js';
  import SingleSelect from '../common/SingleSelect.vue';
  import SubmitButton from '../common/SubmitButton.vue';
  const components = {
    SingleSelect,
    SubmitButton
  };

  export default {
    name: 'PayQuery',
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
          btnName: '查询缴费单',
          submitCallback: this.submitCallback,
          jnyfProps: {
            selectList: [
              {name: '10-1', value: '0'},
              {name: '10-2', value: '1'},
              {name: '10-3', value: '2'},
            ],
            selectedData: {},
            align: 'right'
          },
          jflxProps: {
            selectList: [
              {name: '保育费', value: '0'},
              {name: '书本费', value: '1'},
              {name: '零食费', value: '2'},
            ],
            selectedData: {},
            align: 'right'
          }
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
