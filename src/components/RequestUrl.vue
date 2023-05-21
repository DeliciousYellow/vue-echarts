<template>
    <div>
      <h1>请在京东商城搜索后,把商品展示界面的URL上传</h1>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="URL">
        <el-input v-model="formInline.url" placeholder="http(s)://**"></el-input>
      </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="requestByUrl(false)" icon="el-icon-search">普通搜索</el-button>
          <el-button type="primary" @click="requestByUrl(true)" icon="el-icon-search">详情搜索</el-button>
          <el-button type="primary" @click="reSet" icon="el-icon-delete">重置</el-button>
          <el-button type="primary" @click="save"><i class="el-icon-upload el-icon--right"></i> 存储</el-button>
        </el-form-item>
      </el-form>
      
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <el-table
          :data="tableData"
          height="400"
          style="margin-left:200px; width: 80%">
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
            </el-table-column>
          </el-table>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
        </div></el-col>
      </el-row>
    </div>
  </template>
  
  <script>
    import axios from "axios"
    import MyHelloWorld from './MyHelloWorld.vue'
    import Echarts from './Echarts.vue'
    export default {
      name: 'RequestUrl',
      components: {
          MyHelloWorld,
          Echarts
      },
      data() {
        return {
          tableData : [],
          formInline: {
            url : ''
          }
        }
      },
      methods: {
        //根据商品网址搜索
        requestByUrl(isdetail) {
          console.log(isdetail);
          console.log(this.formInline.url);
          // 发起一个post请求
          var Url =String(this.formInline.url);
          // console.log(JsonUrl+"是"+typeof JsonUrl+"类型");
          //https://search.jd.com/Search?keyword=%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA14&enc=utf-8&spm=2.1.2
          console.log("截串"+Url.substring(22))
          console.log("编码"+encodeURIComponent(Url))
          axios({
            method: 'get',
            url: 'http://localhost:8081/GetJdByUrl/'+ encodeURIComponent(encodeURIComponent(Url)) + '/' + isdetail
          })
          .then((response)=>{
            console.log(response)
            this.tableData = response.data.data
          })
          .catch((error)=>{
            alert("请求ERROR")
          })
        },
        reSet() {
          this.formInline.url = ""
          this.tableData = ""
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