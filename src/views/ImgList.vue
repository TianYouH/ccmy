<template>
  <div id='imgList'>
    <mt-header :title="urlQuery.label">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    
    
    <ul class="page-lazyload-ul">
      <li class="page-lazyload-listitem" v-for="(item, index) in urlList" :key="index">
        <img class="page-lazyload-image" v-lazy="item">
      </li>
    </ul>

  </div>

  </div>
</template>
<script>
import { imgUrl } from '../assets/config.js'

export default {
  name: 'imgList',
  data () {
    return {
      baseUrl: 'http://oyu800c1f.bkt.clouddn.com/',
      urlQuery: this.$route.query,
      imgUrl: imgUrl,
      urlList: []
    }
  },
  mounted () {
    this.init()
  },
  computed: {

  },
  methods: {
    init () {
      // console.log()
      this.imgUrl[this.urlQuery.id].forEach((item) => {
        this.urlList.push(`${this.baseUrl}${this.urlQuery.link}${item}`)
      })
    }
  }
}
</script>
<style scoped>
.page-lazyload-ul {
    list-style: none outside none;
    margin: 0;
    padding: 0;
}
.page-lazyload-listitem {
    width: 300px;
    margin: 0 auto;
    margin-bottom: 10px;
    background-color: #ddd;
}
.page-lazyload-image {
    display: block;
    width: 100%;
}
</style>