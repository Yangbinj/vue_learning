<template>
  <div class="">
      <div>store nameInfo : ==> {{ nameInfo}}</div>
      <div>store age : ==> {{ age }}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
  name: '',
  data() { 
    return {
         SESSIONNEED:'', 
    }
  },
  computed: {
    ...mapGetters([
       'nameInfo'
    ]),
    ...mapState(['age'])
  },
  created(){
  var self = this;
  },
  methods:{
        ...mapMutations({
             setSession: 'SET_session',
             setOpId: 'SET_OPID',
             SET_cityCode:'SET_cityCode',
             setOrgId: 'SET_ORGID',
             SET_loginName: 'SET_loginName',
         })
 },
  mounted(){//渲染后执行
  }
 }
</script>

<style lang="less" scoped>
  body{
      padding: 0px;
  }
</style>