<template>
  <div class="app-list-layout" v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}">
    <div class="app-list-box">
      <div class="app-item" v-for="(data,index) in selfProps.applist">
        <div class="app-img">
          <img v-bind:src="data.imgurl">
        </div>
        <div class="app-link">
          <router-link to="/">{{data.appname}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AppList',
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
            applist: [
              {
                appname: '第一个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第二个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第三个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              },
              {
                appname: '第四个应用',
                descript: '描述',
                appid: '1',
                url: 'www.baidu.com',
                imgurl: '../../assets/function_01.png'
              }
            ]
          }
        }
      },

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
  .app-list-layout {
    .app-list-box {
      font-size: 0;

      background: #ffffff;
      .app-item {
        text-align: center;
        font-size: 0.24rem;
        display: inline-block;
        width: 25%;
        padding: 0.34rem 0;
        .app-img {
          img {
            width: 0.58rem;
            height: 0.58rem;
          }
        }
      }
    }
  }

</style>
