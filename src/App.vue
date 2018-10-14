<template>
  <div class="container">
    <router-view class="main"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
html,
body {
  overflow: hidden;
}
body {
  margin: 0;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  .main {
    flex: 1 1 0%;
  }
  .nav {
    flex: 0 0 50px;
  }
}
.slider-enter-active,
.slider-leave-active {
  position: absolute;
  transition: all 0.5s;
}
.slider-enter {
  opacity: 0;
  transform: translate3d(-300px, 0, 0);
}
.slider-leave-to {
  opacity: 1;
  transform: translate3d(300px, 0, 0);
}

.slider2-enter-active,
.slider2-leave-active {
  position: absolute;
  transition: all 0.5s;
}
.slider2-enter {
  opacity: 1;
  transform: translate3d(300px, 0, 0);
}
.slider2-leave-to {
  opacity: 0;
  transform: translate3d(-300px, 0, 0);
}
</style>
