<template lang="pug">
  div.admin-app
    app-header
    tabs
      .tabs
    .container-components
      router-view
      skills(
        :skills="skills"
      )
      //-   .tabs
      //- blogs(
      //-   :blogs="blogs"
      //- )
      //- works(
      //-   :works="works"
      //- )
</template>

<script>
// import header from "./components/header";
// import tabs from "./components/tabs";
// import skills from "./components/skills";
import {mapActions, mapState} from "vuex";

export default {
  components: {
    appHeader: require("./components/header").default,
    tabs: require("./components/tabs").default,
    skills: require("./components/skills").default,
    blogs: require("./components/blogs").default,
    works: require("./components/works").default

  },
  computed:{
    ...mapState('skills', {
      skills: state => state.data
    })
  },
  created(){
    this.fetchSkills();
  },
  methods:{
    ...mapActions({
      fetchSkills: "skills/fetch"
    })
  }
};
</script>
<style>
  body{
    margin: 0;
    box-sizing: border-box;
  }
</style>
