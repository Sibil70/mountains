<template lang="pug">
  div.admin-app
    app-header
    tabs
      .tabs
    .container-components
      .container__bg
      router-view
</template>

<script>

export default {
  components: {
    appHeader: require("./components/header").default,
    tabs: require("./components/tabs").default,
    skills: require("./components/skills").default

  }
};
</script>
<style>
  body{
    margin: 0;
    box-sizing: border-box;

  }
  .admin-app{
    height: 100%;
  }
  .container-components{
    position: relative;
    height: 100%;
  }
  .container__bg{
    background-image: url(../assets/images/bg/hero.jpg);
    background-position: center center;
    background-size: cover;
    filter: opacity(.2);
    width: 100%;
    height: 75vh;
    position: absolute;
    z-index: -100;

  }
</style>
