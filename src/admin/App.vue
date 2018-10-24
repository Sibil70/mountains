<template lang="pug">
  div.admin-app
    app-header
    tabs
      .tabs
    .container-components
      router-view
      .container__bg

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
  }

  .container__bg{
    background-image: url(../assets/images/bg/hero.jpg);
    background-position: center center;
    background-size: cover;
    filter: opacity(.3);
    width: 100%;
    height: 100%;
    min-height: 77vh;
    position: absolute;
    z-index: -100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  }
</style>
