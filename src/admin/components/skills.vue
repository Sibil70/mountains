<template lang="pug">
  div.skills
    app-form
    h2.skills__title Страница "Обо мне"
    skills-row(
        v-for="type in types"
        :key="type.id"
        :type="type"
        :skills="skills"
    )
</template>

<script>
import form from "./auth";
import skillsRow from "./skillsrow";
export default {
    components: {
        skillsRow,
        appForm: form
    },
    props:{
        skills: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            types: [
                {id:0, name: "Frontend"},
                {id:1, name: "Backend"},
                {id:2, name: "Workflow"}
            ]
        }
    }
}
</script>
 