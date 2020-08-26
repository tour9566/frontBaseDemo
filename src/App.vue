<template>
    <div id="app" :class="$style['header']">
        <headerTop></headerTop>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderTop from '@/components/common/Header.vue'
import { VueLoading } from 'vue-loading-template'

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
