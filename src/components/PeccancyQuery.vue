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
            <input class="item-input" type="text" placeholder="车牌号">
          </div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item">
          <div class="item-left">车身架号</div>
          <div class="item-right">
            <input class="item-input" v-on:input="csjhinput" type="text" placeholder="车辆识别代码后六位">
          </div>
        </div>
      </div>

    </div>
    <SubmitButton v-bind:selfProps="btnProps"></SubmitButton>
  </div>
</template>
<script>
  import SubmitButton from './common/SubmitButton.vue';
  import SingleSelect from './common/SingleSelect.vue';
  import schema from 'async-validator';

  const components = {
    SubmitButton,
    SingleSelect
  }
  const clxxProps = {
    selectList: [
      {name: '小型汽车', value: 'ya'},
      {name: '中型汽车', value: 'ya'},
      {name: '大型汽车', value: 'ya'},
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
  const btnProps = {
    name: '查询',
  }
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
        btnProps,
        cpzlProps
      }
    },
    methods: {
        csjhinput(){
          const descriptor = {
            name: {type: "string", required: true}
          }
          const validator = new schema(descriptor);
          validator.validate({name: ['111']}, (errors, fields) => {
              debugger;
            if(errors) {
              // validation failed, errors is an array of all errors
              // fields is an object keyed by field name with an array of
              // errors per field
              console.log(errors)
            }
            // validation passed
          });
        }
    },
    components
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "./common.less";
  .peccancy-query-layout {
    .peccancy-query-box {

    }
  }

</style>
