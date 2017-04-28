<template>
  <div class="wrapper" @click="update">
  	<Headerbar></Headerbar>
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
    <p>aaaaa</p>
  </div>
</template>

<style scoped>
  .wrapper { align-items: center;}
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
</style>

<script>
import Headerbar from './components/app-header.vue'
  export default {
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: 'World'
    },
    components:{
      Headerbar
    },
    methods: {
      update: function (e) {
        this.target = 'Weex222'
        console.log('target:', this.target)
      }
    }
  }
</script>
