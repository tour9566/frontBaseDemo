<template>
  <div :class="$style.header">
    <div :class="$style['nav-list']">
      <router-link
        v-for="(item, index) in menuList"
        :key="index"
        :class="$style.navItem"
        active-class="active"
        :to="item.path"
      >{{ item.meta.title }}</router-link>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Header',
    components: {},
    props: {},
    data() {
        return {
            menuList: []
        }
    },
    created() {
        this.setMenuList()
    },
    mounted() {},
    methods: {
        setMenuList() {
            this.menuList = this.$router.options.routes.filter(item => item.headerShow)
        }
    }
}
</script>

<style module lang='scss'>
.header {
  height: 60px;
  width: 100%;
  .nav-list {
    height: 100%;
    margin-left: 80px;
    vertical-align: middle;
    display: inline-block;
    .nav-item {
      color: black;
      display: inline-block;
      height: 100%;
      line-height: 56px;
      width: 100px;
      margin-left: 10px;
      text-align: center;
      border-bottom: 3px solid transparent;
      text-decoration: none;
      background-color: red
    }
  }
}
</style>
