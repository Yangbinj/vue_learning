<template>
  <div class="son">
    <div>this is son component</div>
    <div @click="transferInfo2Parent">给父组件传值</div>
  </div>
</template>

<script>
import transferinfo from "./transferInfo.vue";
export default {
  name: 'son',
  components:{
      transferinfo
  },
  //获取父组件值：方法二
  props:{
    value:String
  },
  data() { 
    return {
        sonInfo:"sonInfo",
        sonMsg:"sonMsg"
    }
  },
  computed: {
  },
  created(){
  var self = this;
  },
  methods:{
        transferInfo2Parent(){
          // this.$emit("父组件的函数"，子组件的info);
          this.$emit("transfer",this.sonInfo,this.sonMsg);
        } 
 },
  mounted(){//渲染后执行 
   //获取父组件值：方法一： 使用$parent.获取父组件对象，然后再获取数据对象
    console.log("helle",this.$parent.parentInfo);
  }
 }
</script>

<style lang="less"  scoped>
  .son{

  }
</style>