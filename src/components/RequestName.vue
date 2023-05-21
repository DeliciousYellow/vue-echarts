<template>
  <div>
    <h1>输入想要在京东搜索的商品</h1>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="商品">
      <el-input v-model="formInline.name" placeholder="要搜索的商品名"></el-input>
    </el-form-item>
    <el-form-item label="数量">
      <el-select v-model="formInline.number" placeholder="查询数量">
        <el-option label="30" value=30></el-option>
        <el-option label="60" value=60></el-option>
        <el-option label="90" value=90></el-option>
        <el-option label="150" value=150></el-option>
        <el-option label="300" value=300></el-option>
      </el-select>
  </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="requestByName(false)" icon="el-icon-search">普通搜索</el-button>
        <el-button type="primary" @click="requestByName(true)" icon="el-icon-search">详情搜索</el-button>
        <el-button type="primary" @click="reSet" icon="el-icon-delete">重置</el-button>
        <el-button type="primary" @click="save"><i class="el-icon-upload el-icon--right"></i> 存储</el-button>
      </el-form-item>
    </el-form>

    <el-row>
        <el-col :span="14"><div class="grid-content bg-purple">
          <el-table
          :data="tableData"
          height="500"
          style="margin-left:20px; width: 100%">
            <el-table-column
              type="index"
              label="序号"
              width="50">
            </el-table-column>
            <el-table-column
              prop="name"
              label="商品名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="price"
              label="商品价格"
              width="180">
            </el-table-column>
            <el-table-column
              prop="url"
              label="商品图片">
              <!-- {{ ArrData.url }}? -->
              <!-- <el-image style="width: 100px; height: 100px" :src=this.url fit="fill"> -->
              <!-- </el-image> -->
            </el-table-column>
          </el-table>
        </div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple-light">
          <echarts :option="this.tableData" ref="echarts"></echarts>
        </div></el-col>
      </el-row>
  </div>
</template>

<script>
  import axios from "axios"
  import MyHelloWorld from './MyHelloWorld.vue'
  import Echarts from './Echarts.vue'
  export default {
    name: 'RequestName',
    components: {
      MyHelloWorld,
      Echarts
    },
    data() {
      return {
        tableData : [],
        formInline: {
          url : '',
          name : ''
        }
      }
    },
    methods: {
      //根据商品名称搜索
      requestByName(isdetail){
        console.log(isdetail) 
        console.log(this.formInline.name);
        console.log(this.formInline.number);
        axios({
          method: 'get',
          url: 'http://localhost:8081/GetJdByName/'+ this.formInline.name + '/' + this.formInline.number + '/' + isdetail
        })
        .then((response)=>{
          console.log(response)
          //绑定返回的数据
          this.tableData = response.data.data
          
          this.$refs.echarts.loadData(response.data.data); // 调用子组件的方法
        })
        .catch((error)=>{
          alert("请求ERROR")
        })
      },
      reSet() {
        this.formInline.name = ""
        this.tableData = ""
        this.$refs.echarts.reset(); // 调用子组件的方法
      },
      save() {
        console.log("存储")
        axios({
          method: 'post',
          url: "http://localhost:8081/DoSave"
        })
        .then((response)=>{
          console.log(response)
        })
      }
    }
}
</script>

<style>

</style>