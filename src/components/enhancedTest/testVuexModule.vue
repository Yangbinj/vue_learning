<template>
  <div class="testVuexModule">
      <div>store module nameInfo : ==> {{ nameModuleInfo}} => {{ fullModuleInfo }}</div>
      <div>store module age : ==>{{ age }}=> {{ ageModule }} => {{ ffff }} => {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
  name: 'testVuexModule',
  data() { 
    return {
         SESSIONNEED:'', 
    }
  },
  computed: {
    ...mapGetters([
       'nameModuleInfo','fullModuleInfo'
    ]),
    ...mapState({
        age : state => state.age,
        name : state => state.name,
        ffff : state => state.permission.ffff,
        ageModule: state => state.permission.ageModule,
    }),
    
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

<style lang="less" scoped>
  .testVuexModule{

  }
</style>