<template>
  <div class="hello">
    <div class="box">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <el-menu-item index="/index" style="width:33.3%">首页</el-menu-item>
        <el-submenu index="/request" style="width:33.3%">
          <template slot="title">请求</template>
          <el-menu-item index="/request/Name" class="titleItem">商品请求</el-menu-item>
          <el-menu-item index="/request/Url" class="titleItem">URL请求</el-menu-item>
        </el-submenu>
        <el-menu-item index="/Echarts"  style="width:33.3%">渲染</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyHelloWorld',
    methods:{
      
    }
  }
</script>

<style scoped>
.box{
  margin: auto;
  width: 100%;
}
.titleItem{
  width: 565px;
  /* margin: auto; */
  text-align: center;
}
</style>
