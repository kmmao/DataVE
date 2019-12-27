<template>
  <section>
    <pieBase/>
  </section>
</template>

<script>
import pieBase from '../echarts/pies/pieBase'
export default {
  name: 'sections',
   components: {
    pieBase
  },
  props: {
    msg: String
  }
}
</script>
<style lang="scss" scoped>
section{
  width: 100%;
  height: 100%;
}
</style>

