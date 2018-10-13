<template>
  <div>
    home
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route);
    // 跳转到UserWho路由，可以带动态参数userid
    this.$router.push({
      name: "UserWho",
      params: { userid: 123 },
      query: { photoid: 23, sokey: 2018 }
    });
  }
};
</script>


