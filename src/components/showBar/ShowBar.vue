<template>
  <div :style="{backgroundColor: backColor}" :class="{ borderBottom: isBorderBottom }" id='show-bar'>
    <div :style="{  }" class="iconBox">
      <i :style="{ fontSize: iconSize }" :class="[iconClass]"></i>
    </div>
    <div class="contentBox">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'show-bar',
  props: {
    icon: {
      type: String,
      default: 'icon-geren'
    },
    iconSize: {
      type: String,
      default: '26px'
    },
    backColor: {
      type: String,
      default: '#27a3fc'
    },
    isBorderBottom: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  computed: {
    iconClass: function () {
      return `icon iconfont ${this.icon}`
    }
  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
#show-bar {
  height: 70px;
}
.iconBox {
  padding: 20px;
  display: inline-block;
  vertical-align: super;
  i {
     color: #fff;
  }
}
.contentBox {
  display: inline-block;
  width: 70%;
}
.borderBottom {
  border-bottom-width: 3px; 
  border-bottom-color: #27a3fc;
  border-bottom-style: solid;
}
</style>