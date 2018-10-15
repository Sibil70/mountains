<template lang="pug">
    tr(v-if="editmode === false")
        td {{skill.title}}
        td {{skill.percent}} %
        td
            button(type="button") &#9998 
        td
            button(type="button") &#10006
    tr(v-else)
        td
            input(type="text" placeholder="newskill")
        td
            button(type="button") Добавить
</template>
<script>
export default {
    props: {
        skill: {
            type: Object,
            default: ()=> {}
        },
        editmode: {
            type: Boolean,
            default: false
        }
    }
}
</script>
