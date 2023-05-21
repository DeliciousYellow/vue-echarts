<template>
  <div id="box">
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "echarts",
  data() {
    return {
      option:{}
    }
  },
  mounted(){
    var option = {
        title: {
          text: '价格占比',
          x: 'center'
        },
        series: [
          {
            type: 'pie',
            data: [
            ],
            radius: ['40%', '70%']
          }
        ]
    }
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
  methods:{
    loadData(optionData){
      console.log("传来的数据是")
      console.log(optionData)
      var A = 0;
      var B = 0;
      var C = 0;
      var D = 0;
      var E = 0;
      for(var i=0;i<optionData.length;i++){
        // console.log(optionData[i].price);
        var price = optionData[i].price
        if(price<500){
          A += 1;
        }else if(price<1000){
          B += 1;
        }else if(price<2000){
          C += 1;
        }else if(price<5000){
          D += 1;
        }else{
          E += 1;
        }
      }
      var optionT = {
        legend: {
          orient: 'vertical',
          x: 'left',
          // data: ['A', 'B', 'C', 'D', 'E']
          data: ['0-500', '500-1000', '1000-2000', '2000-5000', '5000以上']
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            data: [
              { value: A, name: '0-500' },
              { value: B, name: '500-1000' },
              { value: C, name: '1000-2000' },
              { value: D, name: '2000-5000' },
              { value: E, name: '5000以上' }
            ]
          }
        ]
      };
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(optionT);
    },
    reset(){
      console.log("A")
      var option = {
        title: {
          text: '价格占比',
          x: 'center'
        },
        series: [
          {
            type: 'pie',
            data: [
            ],
            radius: ['40%', '70%']
          }
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
}
// 指定图表的配置项和数据
</script>

<style>
#main{
  margin: auto;
  width: 600px;
  height:400px;
}
</style>