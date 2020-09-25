<template>
  <div class="hello">
    <ul>
      <li>
        <button @click="toTestEcharts">test echarts</button>
      </li>
      <li>
        <router-link to='InfoCard'>
          <button>组件测试</button>
        </router-link>
      </li>
      <li>
        <router-link to='TestEchartsLineTestSon'>
          <button>折叠组件和卡片组件</button>
        </router-link>
      </li>
       <li>
        <router-link to='parent'>
          <button>五种组件传值</button>
        </router-link>
      </li>
      <li>
        <router-link to='TestBus'>
          <button>使用bus进行组件传值</button>
        </router-link>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    toTestEcharts(){
      this.$router.push("/testEcharts");
      // same as .push({path:'/testEcharts'});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
}
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
</style>
