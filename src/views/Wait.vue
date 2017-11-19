<template>
  <div id='wait'>
    <div>
    <i class="icon iconfont icon-shigong"></i>
    <h5>很抱歉当前页面正在开发</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wait',
  data () {
    return {
    }
  },
  mounted () {
    console.log('wait挂载完成完成')
  }
}
</script>

<style scoped>
#wait {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
}
.icon {
  font-size: 40vw;
  color: #27a3fc
}
</style>