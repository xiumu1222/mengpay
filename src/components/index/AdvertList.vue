<template>
  <div class="advert-list-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="advert-list-box">
      <div class="advert-item" v-for="(data,index) in selfProps.advertlist">
        <div class="advert-img">
          <img src="../../assets/img_01.png">
        </div>
        <div class="advert-content">
          <div class="content-title">推荐：雪地靴</div>
          <div class="content-desc">推荐理由：孟州雪地靴制作拥有完整、科
            学的质量管理体系…
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AdvertList',
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
            advertlist: [
              {
                name: '雪地靴'
              },
              {
                name: '雪地靴'
              },
              {
                name: '雪地靴'
              }
            ]
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
  .advert-list-layout {
    .advert-list-box {
      background: #ffffff;
      .advert-item {
        padding: 0.2rem 0.4rem;
        vertical-align: middle;
        .advert-img {
          display: inline-block;
          height: 2.2rem;
          width: 2.2rem;
          img {
            width: 100%;
          }
        }
        .advert-content {
          display: inline-block;
          width: 4rem;
          vertical-align: top;
          padding: 0.2rem 0 0.2rem 0.2rem;
          .content-title {
            font-size: 0.3rem;
            color: @f1;
            margin-bottom: 0.2rem;
          }
          .content-desc {

          }
        }
      }
    }
  }

</style>
