<template>
  <div class="son">
    <div>this is son component</div>
    <button @click="transferInfo2Parent">事件传递给父组件传值</button>
    <button @click="$emit('listen','listen hello')">事件监听给父组件传值</button>
  </div>
</template>

<script>
import transferinfo from "./transferInfo.vue";
export default {
  mounted() {
    //渲染后执行
    //获取父组件值：方法一： 使用$parent.获取父组件对象，然后再获取数据对象
    console.log("helle", this.$parent.parentInfo);
  },
  name: "son",
  components: {
    transferinfo
  },
  //获取父组件值：方法二
  props: {
    value: String
  },
  data() {
    return {
      sonInfo: "sonInfo",
      sonMsg: "sonMsg"
    };
  },
  methods: {
    transferInfo2Parent() {
      // this.$emit("父组件的函数"，子组件的info);
      this.$emit("transfer", this.sonInfo, this.sonMsg);
    }
  },
  computed: {},
  created() {
    var self = this;
  },
};
</script>

<style lang="less"  scoped>
.son {
}
</style>