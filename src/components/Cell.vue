<template>
  <div>
    Cell
    <input type="text" v-model="message">
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('moduleA/moduleB')
export default {
  computed: {
    ...mapState(['count', 'msg']),
    ...mapGetters(['bCount']),
    message: {
      get () {
        return this.msg
      },
      set (value) {
        // this.$store.commit('moduleA/moduleB/changeMsg', value)
        this.changeMsg(value)
      }
    }
  },
  methods: {
    ...mapMutations(['changeCount', 'changeMsg'])
  },
  mounted () {
    // this.changeCount(1111)
  }
}
</script>
