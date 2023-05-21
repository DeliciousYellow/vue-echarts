<template>
  <div>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple-dark">
        <el-input v-model="Code0" placeholder="Code" style="width:100px"></el-input>
        <el-input v-model="Code1" placeholder="Code" style="width:100px"></el-input>
        <el-input v-model="Code2" placeholder="Code" style="width:100px"></el-input>
        <el-input v-model="Code3" placeholder="Code" style="width:100px"></el-input>
        <el-input v-model="Code4" placeholder="Code" style="width:100px"></el-input>
        <el-button type="primary" @click="UpdateByCode">更改渲染商品</el-button>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-dark">
        <el-input v-model="Brand0" placeholder="品牌" style="width:250px"></el-input>
        <el-input v-model="Brand1" placeholder="品牌" style="width:250px"></el-input>
        <el-button type="success" @click="UpdateByBrand">更改渲染品牌</el-button>
      </div></el-col>
    </el-row>
    <VisualTools/>
  </div>
</template>

<script>
import axios from 'axios'
import VisualTools from "./VisualTools.vue"
export default {
  components:{
    VisualTools
  },
  data() {
    return {
      Code0:"",
      Code1:"",
      Code2:"",
      Code3:"",
      Code4:"",
      Brand0:"",
      Brand1:"",
    }
  },
  methods:{
    UpdateByCode(){
      // alert(this.Code0)
      axios({
        method: 'put',
        url: 'http://localhost:8081/PutArrCode/'+ this.Code0 + '/' + this.Code1 + '/' + this.Code2 + '/' + this.Code3 + '/' + this.Code4
      })
      .then((response)=>{
        console.log(response)
      })
    },
    UpdateByBrand(){
      // alert("UpdateByBrand")
      axios({
        method: 'put',
        url: 'http://localhost:8081/PutArrBrand/'+ this.Brand0 + '/' + this.Brand1
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