<template>
  <div class="pie" ref="pie"></div>
</template>

<script>
export default {
  name: "pie",
  data: () => ({
    content: null,
    ele: null,
    myEcharts: null
  }),
  props: ["data"],
  mounted() {
    this.ele = this.$refs.pie;
    this.myEcharts = this.$echarts.init(this.ele);
    this.myEcharts.showLoading();
    this.$axios
      .get("/api/mock/pie")
      .then(res => {
        this.content = res.data;
        this.$nextTick(() => {
          this.getChart();
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    getChart() {
      let data = this.content;
      console.log(data);
      let option = {
        title: {
          show: false,
          text: "各部门使用情况",
          subtext: "2019-01-01至2019-05-31",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          //   show: false,
          //   orient: "vertical",
          //   top: "middle",
          //   left: "left"
          //   data: [
          //     "整车工程中心",
          //     "人力资源部",
          //     "用户体验及功能开发中心	",
          //     "路特斯工程（中国）",
          //     "吉利品牌研究院NL项目组",
          //     "PMA项目组",
          //     "创新中心",
          //     "电子电器开发中心",
          //     "整车试验中心",
          //     "智能驾驶开发中心",
          //     "技术管理中心",
          //     "整车试制中心",
          //     "领克品牌研究院电子电器部",
          //     "其他"
          //   ]
        },
        series: [
          {
            name: "默认标题",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            label: {
              show: true,
              formatter: "{b}: {d}%"
            },
            data: data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.myEcharts.off("click");
      this.myEcharts.on("click", param => {
        console.log(param);
      });
      this.myEcharts.setOption(option, true);
      this.ele.onresize = () => {
        this.myEcharts.resize();
      };
      // window.addEventListener("resize", () => {
      //   this.myEcharts.resize();
      // });
      this.myEcharts.hideLoading();
    }
  },
  beforeDestroy() {
    if (this.myEcharts) {
      this.myEcharts.clear();
    }
  }
};
</script>
<style lang="scss" scoped>
.pie {
  width: 100%;
  height: 100%;
  height: 300px;
}
</style>
