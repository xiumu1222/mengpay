<template>
  <div class="peccancy-query-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="peccancy-query-box">
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">车辆信息</div>
          <div class="item-right">
            <SingleSelect v-bind:selfProps="clxxProps"></SingleSelect>
          </div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">车牌种类</div>
          <div class="item-right">
            <SingleSelect v-bind:selfProps="cpzlProps"></SingleSelect>
            <input class="item-input" v-model="carcodeVal" type="text" placeholder="车牌号" maxlength="5">
          </div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">车身架号</div>
          <div class="item-right">
            <input class="item-input" v-on:input="" v-model="caridVal" type="text" placeholder="车辆识别代码后六位"
                   maxlength="6">
          </div>
        </div>
      </div>
    </div>
    <SubmitButton v-bind:selfProps="btnProps"></SubmitButton>
  </div>
</template>
<script>
  import request from '../../util/request.js'
  import SubmitButton from '../common/SubmitButton.vue';
  import SingleSelect from '../common/SingleSelect.vue';
  import schema from 'async-validator';

  const components = {
    SubmitButton,
    SingleSelect
  }
  const clxxProps = {
    selectList: [
      {name: '微型车', value: '0'},
      {name: '紧凑型车', value: '1'},
      {name: '小型车', value: '2'},
      {name: '中型车', value: '3'},
      {name: '中大型汽车', value: '4'},
      {name: '豪华车', value: '5'},

    ],
    selectedData: {},
    align: 'right'
  };
  const cpzlProps = {
    selectList: [
      {name: '浙A', value: 'ya'},
      {name: '浙B', value: 'ya'},
      {name: '浙C', value: 'ya'},
      {name: '浙D', value: 'ya'},
      {name: '浙E', value: 'ya'},
      {name: '浙F', value: 'ya'},
      {name: '浙G', value: 'ya'}
    ],
    selectedData: {},
    align: 'left'
  };

  export default {
    name: 'PeccancyQuery',
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
        clxxProps,
        btnProps: {
          btnName: '查询',
          submitCallback: this.submitCallback,
        },
        cpzlProps,
        caridVal: '',
        carcodeVal: ''
      }
    },
    methods: {
//      csjhinput(){
//        const descriptor = {
//          name: {type: "string", required: true}
//        }
//        const validator = new schema(descriptor);
//        validator.validate({name: ['111']}, (errors, fields) => {
//          if (errors) {
//            // validation failed, errors is an array of all errors
//            // fields is an object keyed by field name with an array of
//            // errors per field
//            console.log(errors)
//          }
//          // validation passed
//        });
//      },
      submitCallback(){
        const _this = this;
        const cardtype = _this.clxxProps.selectedData.value;
        const carcode = _this.cpzlProps.selectedData.name + _this.carcodeVal;
        const carid = _this.caridVal;
        const option = {
          carid,
          carcode,
          cardtype
        };
        request('life/searchvehicleillegalinfo', option, 'post').then(function (data) {
          if (data.pub && data.pub.retcode == '00000') {

          } else {
            alert(data.pub.retmsg);
          }
        });
        console.log(carcode, cardtype, carid)
      }
    },
    components
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../common.less";

  .peccancy-query-layout {
    .peccancy-query-box {

    }
  }

</style>
