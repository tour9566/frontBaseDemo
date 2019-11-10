<template>
  <div id="app">
    <el-button>ok</el-button>
    <headerTop></headerTop>
    <div styleName="main">
      <router-view styleName="main-middle"></router-view>
    </div>
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import HeaderTop from "@/components/common/Header.vue";

export default {
  name: "App",
  mixins: [CSSModules()],
  components: { HeaderTop },
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style module lang="scss">
:global {
  #app {
    height: 100%;
    min-width: 1450px;
  }
}
