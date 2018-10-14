<template>
  <div>
    user
    <p>{{$route.params.userid}}</p>
    <p>用户ID:{{userid}}</p>
    <p>姓名:{{name}}</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: ['userid', 'name', 'photoid', 'sokey'],
  created () {
    //  发ajax
  },
  beforeRouteUpdate (to, from, next) {
    // 导航完成前请求数据，区别上面可以控制路由跳转
    console.log('beforeRouteUpdate', to, from)
    next()
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter', to, from)
    next()
  }
}
</script>
