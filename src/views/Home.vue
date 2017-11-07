<template>
  <div id="home">
    
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="0">
        <template v-for=" ( item, index ) in menClassArr">
          <mt-cell :title="item.label" @click.native="toLink(item)" :key="index" ></mt-cell>
        </template>
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
import wait from '../components/Wait'

import { base } from '../assets/config'

export default {
  components: { wait },
  name: 'home',
  data () {
    return {
      selected: '0',
      menClassArr: base
    }
  },
  mounted () {
    console.log('开始执行Home')
  },
  methods: {
    tabbarOnClick () {
      console.log(this.selected)
    },
    toLink (item) {
      console.log('跳转', item)
      this.$router.push({ path: 'list', query: item })
    }
  }

}
</script>

