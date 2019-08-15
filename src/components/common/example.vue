<template>
  <div styleName="example">例子</div>
</template>

<script>
import CSSModules from 'vue-css-modules'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { GET_DATA } from '@/store/mutations.type.js'
export default {
  name: 'example',
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
  computed: {
    ...mapGetters('helloWorldStore', ['data'])
  },
  methods: {
    ...mapActions('helloWorldStore', ['getFollowPersonInfoByPhone']),
    ...mapMutations('helloWorldStore', { aliasGetData: GET_DATA }),

    async getFollowPersonByPhone (phone, startTime, endTime, cnt) {
      let params = {
        mobile: phone,
        timeBegin: startTime,
        timeEnd: endTime,
        cnt: cnt
      }
      console.log(this.data)
      let resultEntity = await this.getFollowPersonInfoByPhone(params)
      if (resultEntity.status === '1') {
        this.aliasGetData(resultEntity.data)
        console.log(this.data)
        alert('查询成功')
      } else {
        alert('查询失败')
      }
    }
  }
}

</script>

<style module lang='scss'>
.example{
  height:300px;
  width: 200px;
  background-color: red
}
</style>
