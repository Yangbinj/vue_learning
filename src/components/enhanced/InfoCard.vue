<template>
    <div class="InfoCard">
        <div class="first">
            <div>
                <span>{{ labels[0]}}</span>
                <span>{{ data[0] }}</span>
            </div>
            <div>
                <span>{{ labels[1]}}</span>
                <span>{{ data[1] }}</span>
            </div>
            <div>
                <span>{{ labels[2]}}</span>
                <span>{{ data[2] }}</span>
            </div>
        </div>
        <div class="second">
            <div>
                <span>{{ labels[3]}}</span>
                <span>{{ data[3] }}</span>
            </div>
            <div>
                <span>{{ labels[4]}}</span>
                <span>{{ data[4] }}</span>
            </div>
            <div>
                <span>{{ labels[5]}}</span>
                <span>{{ data[5] }}</span>
            </div>
        </div>
        <div class="third">
            <div>
                <span>{{ labels[6]}}</span>
                <span>{{ data[6] }}</span>
            </div>
            <div>
                <span>{{ labels[7]}}</span>
                <span>{{ data[7] }}</span>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "InfoCard",
//   props: {
//     labels: Array,
//     data: Array
//   },
  data() {
    return {
      labels: [
        "大家好",
        "大家好",
        "大家好",
        "大家好",
        "大家好",
        "大家好",
        "大家好",
        "大家好"
      ],
      data: [
        "你们好",
        "你们好",
        "你们好",
        "你们好",
        "你们好 13:33:33",
        "你们好 13:33:33",
        "你们好",
        "你们好"
      ]
    };
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

<style lang="less" scoped>
.first,
.second {
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 10px;
  div {
    flex: 1;
    display: flex;
    :first-child {
      letter-spacing: 3px;
      flex: 1;
      color: blue;
    }
    :nth-child(2) {
      flex: 2;
    }
  }
}
.third {
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 10px;
  :first-child {
    flex: 1;
    display: flex;
      justify-content: center;
    :first-child {
      letter-spacing: 3px;
      flex: 1;
      color: blue;
    }
    :nth-child(2) {
      flex: 2;
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
  :nth-child(2) {
    flex: 2;
    display: flex;
      justify-content: center;
    :first-child {
      letter-spacing: 3px;
      flex: 1;
      color: blue;
    }
    :nth-child(2) {
      flex: 3;
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
}
</style>