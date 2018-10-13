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
  props: ["userid", "name", "photoid", "sokey"],
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate", to, from);
    next();
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter", to, from);
    next();
  }
};
</script>
