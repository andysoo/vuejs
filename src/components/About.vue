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
  props: ['id']
}
</script>
