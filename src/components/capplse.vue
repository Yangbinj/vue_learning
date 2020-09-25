<template>
  <div class="calps">
    <div v-show="show">
      <slot></slot>
    </div>
    <div class="mainBody">
      <div v-if="show" @click="controller()">展示</div>
      <div v-else-if="!show" @click="controller()">不展示 </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show: false
    };
  },
  computed: {},
  created() {
    var self = this;
  },
  methods: {
    controller() {
      this.show = !this.show;
    }
  },
  mounted() {
    //渲染后执行
  }
};
</script>

<style scoped>
.mainBody{
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 50px;
}
.calps {
  box-shadow: -1px 5px 0 rgba(0, 0, 0, 0.03);
}
</style>