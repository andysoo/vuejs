<template>
  <div>
    <h2>首页</h2>
    <div class="home">home</div>
  </div>
</template>
<script>
export default {
  // mounted() {
  //   console.log(this.$route);
  //   // 跳转到UserWho路由，可以带动态参数userid
  //   this.$router.push({
  //     name: "UserWho",
  //     params: { userid: 123 },
  //     query: { photoid: 23, sokey: 2018 }
  //   });
  // }
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", to, from);
    next();
  }
};
</script>
<style>
.home {
  height: 2000px;
  background: #580;
}
</style>
