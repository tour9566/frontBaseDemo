<template>
  <div>
    <example></example>
  </div>
</template>

<script>
import CSSModules from 'vue-css-modules'
import example from '@/components/common/example.vue'
export default {
  name: 'home',
  mixins: [CSSModules()],
  components: {
    example
  },
  props: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}

</script>

<style module lang='scss'>
</style>
