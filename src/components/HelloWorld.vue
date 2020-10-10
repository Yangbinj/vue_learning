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
      <li>
        <button @click="getStore">通过$store,获取vuex的状态: {{ name }}</button>

      </li>
      <li>
        <button @click="setName">通过mutations,重新设置store.state: {{ nameVal }}</button>
      </li>
      <li>
        <button @click="setTypesName">通过mutationTypes,重新设置store.state: {{ nameVal }}</button>
      </li>
      <li>
        <!-- Vue.delete(state,'age') -->
        <button @click="setVueName">通过Vue.set,重新设置store.state: {{ nameVal }}</button>
      </li>
      <li>
        <button @click="getGetterInfo">通过gettter获取 store.state: {{ nameGetter }}</button>
      </li>
      <li>
        <button @click="incrementAsyncMM">通过actions incrementAsync异步设置store.state: {{ nameVal }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store/index";
// import SOME_MUTATION from "@/store/mutation-types";
import { mapMutations,mapActions } from "vuex";
import Vue from "vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      name: "",
      nameGetter: ""
    };
  },
  computed: {
    nameVal() {
      return this.$store.state.name;
    },
    // ...mapState(['name']),
    // nameVal() {
    //   return this.name;
    // },
  },
  methods: {
    ...mapMutations({
        SOME_MUTATION:'SOME_MUTATIONf'
    }),
    ...mapActions({
      incrementAsync: 'incrementAsync' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
    incrementAsyncMM(){
      //第一种
      this.$store.dispatch('incrementAsync',"dddddffff");
      //第二种
      // this.incrementAsync("incrementAsync~~~~");
    },
    getGetterInfo() {
      this.nameGetter =
        store.getters.nameInfo + " dfff " + this.$store.getters.nameInfo;
    },
    getStore() {
      this.name = this.$store.state.name;
    },
    setVueName() {
      Vue.set(store.state, "name", "vueName");
    },
    deleteName() {
      Vue.delete(store.state, "name");
    },
    setTypesName() {
      this.SOME_MUTATION("setTypesName");
    },
    setName() {
      store.commit("setName", "新的name");
    },
    toTestEcharts() {
      this.$router.push("/testEcharts");
      // same as .push({path:'/testEcharts'});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
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
