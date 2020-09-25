<template>
  <div class="transferInfo">
      <div>{{info}}</div>
      <p>hello {{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'transferInfo',
  props:{
    info:String,
    msg:String,
  },
  data() { 
    return {
    }
  },
  computed: {
  },
  created(){
  var self = this;
  },
  methods:{
 },
  mounted(){//渲染后执行
  }
 }
</script>

<style scoped>
 
</style>