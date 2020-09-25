<template>
    <div class="testBus">
        <button @click="passMsg">传值到parent</button>
        <parent></parent>
    </div>
</template>

<script>
import bus from "../bus/bus";
import parent from "../enhanced/parent";
export default {
  name: "testBus",
  components: {
    parent
  },
  data() {
    return {
      SESSIONNEED: ""
    };
  },
  computed: {},
  created() {
    var self = this;
  },
  methods: {
    passMsg() {
      bus.$emit("msg", "i am from app");
    }
  },
  mounted() {
    //渲染后执行
  }
};
</script>

<style lang="less" scoped>
.testBus {
}
</style>