<template>
   <div :class="$style.example">例子</div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { GET_DATA } from '@/store/mutations.type.js'
export default {
  name: 'example',
  components: {
  },
  props: {
  },
  data () {
    return {
    }
  },
  mounted () {
    this.queryByParam()
    this.queryByObj()
  },
  computed: {
    ...mapGetters('homeStore', ['data'])
  },
  methods: {
    ...mapActions('homeStore', ['postQuery','getQuery']),
    ...mapMutations('homeStore', { aliasGetData: GET_DATA }),

    async queryByObj () {
      let resultEntity = await this.postQuery({})
      if (resultEntity.status === '1') {
        this.aliasGetData(resultEntity.data)
        console.log(this.data)
        alert('查询成功')
      } else {
        alert('查询失败')
      }
    },
     async queryByParam () {
      let resultEntity = await this.getQuery({
        param1:"1111",
        param2:'22222'
      })
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
