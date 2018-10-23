<template lang="pug">
  div.skills

    skills-row(
        v-for="type in types"
        :key="type.id"
        :type="type"
        :skills="skills"
    )
</template>

<script>

import skillsRow from "./skillsrow";
import { mapState, mapActions } from "vuex";
export default {
    components: {
        skillsRow
    },
    data(){
        return {
            types: [
                {id:0, name: "Frontend"},
                {id:1, name: "Backend"},
                {id:2, name: "Workflow"}
            ]
        };
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
 <style lang="scss" scoped>
    
    .skills{
  font-family: Arial, Helvetica, sans-serif;
  color: #455a64;
  padding-top: 20px;
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
}
    .skills__title{
    font-size: 18px;
    padding: 0;
    margin: 0;
    margin-bottom: 35px;
    margin-top: 35px;
    flex: 1;
    flex-basis: 100%;
}
 </style>
 