<template>
    <div id="app" :class="$style['header']">
        <el-button>ok</el-button>
        <headerTop></headerTop>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/components/common/Header.vue'

export default {
    name: 'App',
    components: { HeaderTop },
    props: {},
    data() {
        return {}
    },
    mounted() {},
    methods: {}
}
</script>

<style module lang="scss">
#app {
    height: 100%;
    min-width: 1450px;
    .main {
        height: 800px;
        background-color: red;
    }
}
</style>
