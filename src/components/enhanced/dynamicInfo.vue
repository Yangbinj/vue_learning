<template>
    <div class="mainPage">
        <div class="mainMenuItem" :class="val.value == menu.current ? 'active' : ''" v-for="val in menu.list" :key="val.value" @click="onMenu(val.value)">
            <p>
                <div>{{ val.icon }}</div>
                <span>{{ val.label }}</span>
            </p>
        </div>
        <div class="mainBody">
            <TestEchartsLineTestSon v-if="menu.current == 'single'" />
            <TestEchartsLineTest v-else-if="menu.current == 'multiple'" />
        </div>
    </div>
</template>

<script>
import TestEchartsLineTestSon from "../TestEchartsLineTestSon.vue";
import TestEchartsLineTest from "../TestEchartsLineTest.vue";

export default {
  name: "",
  data() {
    return {
      menu: {
        current: "item1",
        list: [
          {
            value: "single",
            label: "单车数据查询",
            icon: "copy"
          },
          {
            value: "multiple",
            label: "多车数据下载",
            icon: "clock-circle"
          }
        ]
      }
    };
  },
  components: {
    TestEchartsLineTestSon,
    TestEchartsLineTest
  },
  computed: {},
  created() {
    var self = this;
  },
  methods: {
      onMenu(data) {
      this.menu.current = data
    },
  },
  mounted() {
    //渲染后执行
  }
};
</script>

<style  scoped>
.mainBody {
  flex: auto;
  height: 100%;
  overflow: auto;
  background-color: #fff;
  border-radius: 8px;
}
.mainMenuItem {
  flex: none;
  margin-right: 30px;
}
p {
  line-height: 42px;
  width: 30%;
  margin: 0;
  padding: 0;
  border-bottom: 1px wheat solid;
}
.anticon {
  margin-right: 3px;
}
.active > p {
  color: whitesmoke;
  border-color: blue;
}
</style>