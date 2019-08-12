<template>
  <div styleName="home">首页</div>
</template>

<script>
import CSSModules from 'vue-css-modules'
import { mapActions } from 'vuex'
export default {
  name: 'home',
  mixins: [CSSModules()],
  components: {
  },
  props: {
  },
  data () {
    return {
    }
  },
  mounted () {
    this.getFollowPersonByPhone('15071321557', '', '', 0)
  },
  methods: {
    ...mapActions('helloWorldStore', [
      'getFollowPersonInfoByPhone'
    ]),
    async getFollowPersonByPhone (phone, startTime, endTime, cnt) {
      let params = {
        mobile: phone,
        timeBegin: startTime,
        timeEnd: endTime,
        cnt: cnt
      }
      let resultEntity = await this.getFollowPersonInfoByPhone(params)
      if (resultEntity.status === '1') {
        alert('查询成功')
      } else {
        alert('查询失败')
      }
    }
  }
}

</script>

<style module lang='scss'>
.home{
  height:300px;
  width: 200px;
  background-color: red
}
</style>
