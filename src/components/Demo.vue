<template>
  <div v-bind:style="{'padding-top': pt+'rem','padding-bottom': pb+'rem'}"></div>
</template>
<script>
  export default {
    name: 'Demo',
    props: {
      pt: {
        default: 0.26
      },
      pb: {
        default: 0.26
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

</style>
