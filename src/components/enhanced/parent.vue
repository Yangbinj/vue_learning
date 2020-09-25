<template>
  <div class="parent">
    <!-- 传输值给子组件方法一 -->
    <transferinfo :info="parentInfo" :msg="parentMsg" />
    <son @transfer="getSonInfo" ref="son" />
    <br/>
    <br/>
    <br/>
    <div>{{ children }}</div>
    <div>this is TestBus value : {{ childMsg }}</div>
    <p>
      获取子组件方法1<br/> console.log("this is children transfer info",this.$children[1].sonInfo);<br/>
      <br/> 获取子组件方法2
      <br/> console.log("dd",this.$refs.son.sonInfo);
      <br/>
    </p>
  </div>
</template>

<script>
import transferinfo from "./transferInfo.vue";
import son from "./son.vue";
import bus from "../bus/bus";
export default {
  mounted() {
    this.$refs.son.$on('listen',(value)=>{
      console.log('listen info is ',value);
    })
    //渲染后执行
    //通过bus获取非子父组件传值
    bus.$on("msg", val => {
      this.childMsg = val;
    });
  },
   methods: {
    //获取子组件方法3
    getSonInfo(value1, value2) {
      this.parentInfo = value1;
      this.parentMsg = value2;
      //获取子组件方法1
      console.log("this is children transfer info", this.$children[1].sonInfo);
      this.children = this.$children[1].sonInfo;
      //获取子组件方法2
      console.log("dd", this.$refs.son.sonInfo);
    }
  },
  name: "parent",
  components: {
    transferinfo,
    son
  },
  data() {
    return {
      parentInfo: "parentInfo",
      parentMsg: "parentMsg",
      children: "",
      childMsg: ""
    };
  },
  computed: {},
  created() {
    var self = this;
  },
};
</script>

<style scoped>
.parent {
}
</style>