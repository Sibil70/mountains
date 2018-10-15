<template lang="pug">
    .skills-row
        .skills-row__title {{type.name}}
        table.skills-row__list
            skillitem(
                v-for="skill in skills"
                :key="skill.id"
                v-if="skill.category === type.id"
                :skill="skill"
            )
            skillitem(
                :editmode = "true",
                :typeId="type.id"
                :key="type.id"
            )
            hr
            hr
</template>

<script>
import skillitem from "./skillitem";
export default {
    components: {
        skillitem
    },
    props:{
        type:{
            type: Object,
            default: ()=>{}
        },
        skills: {
            type: Array,
            default: ()=>[]
        },
        typeId: {
            type: Number,
            default: 0
        }
    }
}
</script>
