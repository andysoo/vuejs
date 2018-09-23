<!--<template functional>
    <div>{{props.prop}}</div> 
</template>-->

<script>
export default {
  //   props: ["prop"]
  functional: true,
  render(createElement, context) {
    console.log(context);
    return createElement("div", "comp");
  }
};
</script>
