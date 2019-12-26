<template>
  <div>
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from "./public/Footer";
import Header from "./public/Header";
export default {
  name: "footers",
  components: {
    Footer,
    Header
  }
};
</script>

