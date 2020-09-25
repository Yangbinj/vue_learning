<template>
  <div class="hello">
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      <div class="infoChart">
            <div class="infoChartItem" ref="speedChart" id="speedChart"></div>
            <div class="infoChartItem" ref="rpmChart" id="lineChart"></div>
            <div class="infoChartItem" ref="rpmChart1"></div>
            <div class="infoChartItem" ref="rpmChart2"></div>
            <div class="infoChartItem" ref="rpmChart3"></div>
            <div class="infoChartItem" ref="rpmChart4"></div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'TestEchartsLine',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let speedChart = this.$echarts.init(document.getElementById('speedChart'));
        let lineChart = this.$echarts.init(document.getElementById('lineChart'));
        myChart.setOption({
           xAxis: {
                type: 'category',
                data: ['11', '12', '13', '14', '15', '16', '17']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        });
        let speeddata = {
            name: '车速',
            type: 'gauge',
            radius: '80%',
            splitNumber: 2,
            max: 180,
            axisLine: {
              show: true,
              lineStyle: {
                color: [[0.2, 'rgba(179, 236, 255, 0.4)'], [0.8, 'rgba(179, 236, 255, 0.4)'], [1, 'rgba(179, 236, 255, 0.4)']],
                width: 8
              },
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: 'rgba(255, 255, 255, 1)'
              }
            },
            axisLabel: {
              show: true,
              color: 'rgba(197, 200, 206, 1)',
              distance: -48
            },
            itemStyle: {
              color: '#979797'
            },
            pointer: {
              width: 3
            },
            detail: {
              fontSize: 16,
              color: '#000',
              formatter: '车速\n{value}km/h'
            },
            data: [{ value: null || 0 }],
          };
           let option = {
              tooltip: {
                formatter: '{a} <br/>{b} : {c}%',
              },
              series: [speeddata]
            }
          speedChart.setOption(option,true);
         let linedata = {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          };
           let optionLine = {
              tooltip: {
                formatter: '{a} <br/>{b} : {c}%',
              },
              series: [linedata]
            }
          lineChart.setOption(optionLine,true);
   
    }
  }
}
</script>

<!-- Add "scoped"   lang='less'attribute to limit CSS to this component only -->
<style scoped>
.infoChart {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0;
  
}
.infoChart .infoChartItem {
    width: 50%;
    height: 200px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
