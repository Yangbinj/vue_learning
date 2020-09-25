<template>
  <div class="hello">
    <!-- <div id="myChart" :style="{width: '300px', height: '300px'}"></div> -->
    <capplse>
      <div class="show">
        <div class="first">
          <div class="aas1" id="myChart" :style="{width: '300px', height: '300px'}"></div>
          <div class="aas2" id="lineChart" :style="{width: '300px', height: '300px'}">mmm</div>
        </div>
        <div class="thirdMM">
          <div v-for="(item,key) in items" :key="key">
            <card :text="item.text" :one="item.one" :two="item.two" :third="item.third" />
          </div>
        </div>
      </div>
    </capplse>
  </div>
</template>

<script>
import card from "./soncomponents/Card.vue";
import capplse from "./capplse.vue";

export default {
  name: "TestEchartsLineSon",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      items: [
        { text: "dfasdfkasdfasdf", one: "done", two: "weo", third: "dfdfasdf" },
        { text: "dfasdfkasdfasdf", one: "done", two: "weo", third: "dfdfasdf" },
        { text: "dfasdfkasdfasdf", one: "done", two: "weo", third: "dfdfasdf" }
      ]
    };
  },
  components: {
    card,
    capplse
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let lineChart = this.$echarts.init(document.getElementById("lineChart"));
      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["11", "12", "13", "14", "15", "16", "17"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });

      lineChart.setOption(
        {
          title: {
            text: "天气情况统计",
            subtext: "虚构数据",
            left: "center"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            bottom: 10,
            left: "center",
            data: ["西凉", "益州", "兖州", "荆州", "幽州"]
          },
          series: [
            {
              type: "pie",
              radius: "65%",
              center: ["50%", "50%"],
              selectedMode: "single",
              data: [
                { value: 535, name: "荆州" },
                { value: 510, name: "兖州" },
                { value: 634, name: "益州" },
                { value: 735, name: "西凉" }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        },
        true
      );
    }
  }
};
</script>

<!-- Add "scoped"   lang='less'attribute to limit CSS to this component only -->
<style scoped>
/* .aas3 {
  padding: 15px;
  font-weight: 800;
  font-size: 20px;
}
.aas3 > .info {
  text-align: left;
  font-size: 12px;
  line-height: 40px;
}
.info > span {
  font-weight: 600;
}
.info > div {
  border: 1px solid black;
}
.info > div > a {
  font-weight: 400px;
  margin-left: 20px;
}
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
} */
h1,
h2 {
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
.show {
  display: flex;
  width: 100%;
}
.show > div {
  flex: 1;
  /* height: 20px; */
}
.first {
  display: flex;
  justify-content: center;
}
.first > div {
  flex: 1;
  text-align: center;
}
.thirdMM {
  display: flex;
  justify-content: center;
}
.thirdMM > div {
  flex: 1;
  text-align: center;
}
</style>
