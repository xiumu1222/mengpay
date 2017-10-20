<template>
  <div class="single-select-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="single-select-box">
      <div class="selected-name" v-on:click.stop="selectShowHandle">{{selectedName}}<i class="icon-allow-right"></i></div>
      <div class="select-list" v-bind:class="{show:selectListIsShow,right:'right'==selfProps.align}">
        <div class='select-item' v-bind:class="{on:selectedIndex==index}" v-for="(data,index) in selfProps.selectList"
             v-on:click="selectHandle(data.name,data.value,index)">
          {{data.name}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SingleSelect',
    props: {
      pt: {
        default: 0
      },
      pb: {
        default: 0
      },
      selfProps: {
        default: function () {
          return {
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
          }
        }
      }
    },
    mounted() {
      const _this = this;
      _this.selectedName = _this.selfProps.selectList[0].name || '请选择';
      document.addEventListener('click', (e) => {
          _this.selectListIsShow = false;
      })
    },
    data () {
      return {
        selectedVal: '-1',
        selectedName: '请选择',
        selectListIsShow: false,
        selectedIndex: 0,
      }
    },
    methods: {
      selectHandle(name, val, index){
        const _this = this;
        _this.selectedVal = val;
        _this.selectedName = name;
        _this.selectedIndex = index;
        _this.selfProps.selectedData = _this.selfProps.selectList[index];
      },
      selectShowHandle(){
        const _this = this;
        _this.selectListIsShow = true;
      }
    },
    components: {}
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../common.less";

  .single-select-layout {
    .single-select-box {
      font-size: 0.3rem;
      position: relative;

      .selected-name {
      }
      .select-list {
        display: none;
        position: absolute;
        background: #ffffff;
        border: solid 1px @bordercolor;
        z-index: 10;
        min-width: 3rem;
        top: 0.5rem;
        &.show {
          display: block;
        }
        &.right {
          right: 0;
          .select-item {
            text-align: right;
          }
        }
        .select-item {
          padding: 13px;
          &.on {
            background: @backcolor;
          }
        }
      }
    }
  }
</style>
