<template>
  <div id="app">
    <transition name="show">
      <Main />
    </transition>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
export default {
  name: "app",
  components: {
    Main
  },
  mounted() {
    //*****************************解决刷新页面数据丢失开始**************************************** */
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
      sessionStorage.removeItem("store");
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
};
</script>
<style lang="scss">
@import "./style/gloable.scss";
</style>

