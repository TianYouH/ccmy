<template>
  <div id="app">
    
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="0">
        <mt-cell title="标题" label="描述信息" is-link></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="1">
        <wait></wait>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        2.2
      </mt-tab-container-item>
    </mt-tab-container>


    <mt-tabbar v-model="selected" @click.native="tabbarOnClick">
      <mt-tab-item id="0" >
        <i slot="icon" class="iconfont icon-men" />
        款式
      </mt-tab-item>
      <mt-tab-item id="1">
        <i slot="icon" class="iconfont icon-jisuanqi" />
        计算
      </mt-tab-item>
      <mt-tab-item id="2">
        <i slot="icon" class="iconfont icon-guanyuwomen-copy" />
        关于我们
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
import wait from './views/Wait'

export default {
  components: { wait },
  name: 'app',
  data () {
    return {
      selected: '0'
    }
  },
  mounted () {
    console.log('开始执行App')
  },
  methods: {
    tabbarOnClick () {
      console.log(this.selected)
    }
  }

}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
