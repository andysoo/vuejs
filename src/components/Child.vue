<template>
  <div>
    Child:
    {{ $store.state.msg }}
    <br>
    {{ $store.state.moduleA.count}}
    <br>
    {{ aCount2 }}
    <Cell></Cell>
  </div>
</template>
<script>
import Cell from './Cell'
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['msg', 'moduleA']),
    ...mapState({
      childCount: state => state.moduleA.count
    }),
    ...mapState('moduleA', {
      childCount2: state => state.count,
      childCount3: 'count'
    }),
    // ...mapGetters(['moduleA/aCount']) 不推荐这种写法
    // ...mapGetters('moduleA', ['aCount'])
    ...mapGetters('moduleA', {
      aCount2: 'aCount'
    })
  },
  mounted () {
    // console.log(this['moduleA/aCount'])
    console.log(this.aCount2)
    this.$store.registerModule(['moduleA', 'myModule'], {
      state: {
        count: 111
      }
    })

    setTimeout(() => {
      this.$store.unregisterModule(['moduleA', 'myModule'])
    }, 5000)
  },
  components: {
    Cell
  }
}
</script>
