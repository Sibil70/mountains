<template lang="pug">
  div.admin-app
    app-header
      .header
        app-header
    tabs
      .tabs
    skills(
      :skills="skills"
    )
      .tabs
</template>

<script>
// import header from "./components/header";
// import tabs from "./components/tabs";
// import skills from "./components/skills";
import {mapActions} from "vuex";


const data = [
  {id:1, title:"Html", percent: 20, category: 0 },
  {id:2, title:"PHP", percent: 25, category: 1 },
  {id:3, title:"CSS", percent: 20, category: 0 },
  {id:4, title:"Node.js", percent: 30, category: 1 },
  {id:5, title:"Mongo", percent: 20, category: 1 },
  {id:6, title:"Git", percent: 45, category: 2 },
  {id:7, title:"Gulp", percent: 20, category: 2 }
];

export default {
  components: {
    appHeader: require("./components/header").default,
    tabs: require("./components/tabs").default,
    skills: require("./components/skills").default

  },
  data(){
    return {
      skills:data
    }
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
