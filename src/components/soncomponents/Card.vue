<template>
    <div class="card">
        <!-- <div class="aas3"  v-for="(item,key) in items" :key="key"> -->
            <!-- 车辆报警信息统计 -->
            {{text}}
          <div class="info">
            <span>Hellekjkf</span>
            <div>fdsfasdf:<a href="www.baidu.com">{{one}}</a></div>
             <span>fasfdsadfas</span>
            <div>fasdffdsfas:<a>{{two}}</a></div>
             <span>fasdfasdf</span>
            <div>fasdfasdfas:<a>{{third}}</a></div>
          </div>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
    
    };
  },
  props:{
    text: String,
    one: String,
    two: String,
    third: String
  },
  computed: {},
  created() {
    var self = this;
  },
  methods: {},
  mounted() {
    //渲染后执行
  }
};
</script>

<style scoped>
.card{
  padding: 15px;
  font-weight: 800;
  font-size: 20px;
}
.card > .info{
  text-align: left;
  font-size: 12px;
  line-height: 40px;
}
.info > span{
  font-weight: 600;
}
.info > div{
  border: 1px solid black;
}
.info > div > a{
  font-weight: 400px;
  margin-left:20px;
}
</style>