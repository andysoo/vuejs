<template>
  <div>
    <Child></Child>
    test
    <p>
      state: {{ $store.state.msg }}
    </p>
    <p>
      getters: {{ $store.getters.secUser[0] }}
    </p>
    <p>
      count: {{ count }}
    </p>
    <p>
      user: {{ $store.state.user }}
    </p>
  </div>
</template>
<script>
import Child from '@/Child'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  mounted () {
    // console.log(this.$store);
    // this.$store.state.msg = 456; 不能直接改
    // setInterval(() => this.$store.commit("addCount"), 1000);
    // setInterval(() => this.addCount(), 1000);
    // setInterval(() => this.addCountComp(), 1000);
    // setInterval(() => this.addCountStep({ step: 2 }), 1000);
    // setInterval(
    //   () =>
    //     this.$store.commit({
    //       type: "addCountStep",
    //       step: 2,
    //       add: 1
    //     }),
    //   1000
    // );
    // this.$store.commit({
    //   type: "addAge",
    //   age: 21
    // });
    // this.addAge({ age: 18 });
    // setInterval(() => {
    //   this.$store.dispatch("addCountAction", { step: 2, add: 1 });
    // }, 1000);
    // setInterval(() => {
    //   this.addCountAction({ step: 2, add: 1 });
    // }, 1000);
  },
  created () {
    this.getMusicListActionC()
    this.$store.subscribe((mutation, state) => {
      console.log(mutation)
      console.log(state)
    })
  },
  components: {
    Child
  },
  data () {
    return {
      message: 123
    }
  },
  // computed: mapState(["msg", "arr"]) 不能写自己的属性了
  computed: {
    // ...mapState(["msg", "arr"]),
    ...mapState({
      msg2: 'msg',
      arr2: 'arr',
      count: 'count',
      musicList: 'musicList',
      // addMessage: state => state.msg + state.arr[2]
      addMessage (state) {
        // 箭头函数没有this
        // console.log(this);
        return this.message + state.msg
      }
    }),
    ...mapGetters(['secUser', 'userWho']),
    thirdUser () {
      return this.userWho(3)
    },
    user3 () {
      return this.$store.getters.userWho(3)
    },
    message2 () {
      return this.message + 2
    }
  },
  methods: {
    ...mapMutations(['addCount', 'addCountStep', 'addAge']),
    // ...mapMutations({
    //   addCountComp: "addCount"
    // })
    ...mapActions(['addCountAction', 'getMusicListActionC'])
  }
}
</script>
