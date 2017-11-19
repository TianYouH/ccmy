<template>
  <div id='about' :style="{height: height+'px'}">

    <div id='content1'>
      <img class="logo" src="../assets/images/长城门业LOGO.png" alt="">
      <span class="title">欢迎来到濮阳市长城门业有限公司</span>
    </div>

    <div id="content2">
      <showBar>
        <div class="grBox">
          <p>黄朝强</p>
          <p :style="{fontSize: 12+'px'}">总经理</p>
        </div>
      </showBar>
      <showBar icon='icon-shouji' :isBorderBottom="true" backColor='#302a28'>
        <div>
          <p>18639307788</p>
          <p>15518535588</p>
        </div>
      </showBar>
      <showBar icon='icon-fontawesomef0e0' :isBorderBottom="true" iconSize='22px' backColor='#302a28'>
        <div>
          <p>1406957473@qq.com</p>
        </div>
      </showBar>
      <showBar icon='icon-weibiaoti104' backColor='#302a28'>
        <div class="location">
          <p>河南濮阳市华龙区南里商和谐西路路北长城门业</p>
          <p>河南濮阳市马庄桥镇向南两公里路东长城门业</p>
        </div>
      </showBar>
    </div>

  </div>
</template>

<script>
import showBar from '../components/showBar/ShowBar'

export default {
  name: 'about',
  components: {
    showBar
  },
  data () {
    return {
      height: (window.innerHeight - 55)
    }
  },
  mounted () {
    console.log('about挂载完成完成')
    console.log(this.height)
  }
}
</script>

<style lang='scss' scoped>
$blue: #27a3fc;

#about {
  // height: 400px;
  overflow: auto;
}

#content1 {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-top-width: 5px;
  border-top-style: solid;
  border-top-color: $blue;
  text-align: center;
  .title {
    display: block;
    font-family: '宋体';
  }
  .logo {
    height: 100px;
    padding-top: 20px;
  }
}
#content2 {
  color: #fff;
  .location {
    font-size: 12px;
  }
}
</style>