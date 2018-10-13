<template>
  <div>
    <h2>about</h2>
    <nav>
      <router-link to="/about/tel">电话</router-link>
      <router-link to="/about/addr">地址</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: ["id"],
  beforeCreate() {
    console.log("beforeCreate");
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter", to, from);
    next(vm => {
      console.log(vm.$el);
    });
  }
};
</script> 
