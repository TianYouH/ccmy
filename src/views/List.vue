<template>
  <div id='list'>
    <mt-header :title="urlQuery.label">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    
    <template v-for=" ( item, index ) in list.list">
      <mt-cell :title="item.label" @click.native="toLink(item)" :key="index" ></mt-cell>
    </template>
  </div>
</template>
<script>
import { baseList } from '../assets/config'

export default {
  name: 'list',
  data () {
    return {
      urlQuery: this.$route.query,
      baseList: baseList,
      list: []
    }
  },
  mounted () {
    console.log('进入列表界面')
    this.list = this.baseList[this.urlQuery.id]
    console.log(this.list)
  },
  computed: {
  },
  methods: {
    toLink (item) {
      console.log(item)
      this.$router.push({ path: 'imgList', query: item })
    }
  }
}
</script>
<style scoped>

</style>