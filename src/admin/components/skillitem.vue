<template lang="pug">
    tr.skill-item(v-if="editmode === false")
        td.skill-item__title {{skill.title}}
        td.skill-item__percent {{skill.percents}} %
        td.skill-item__edit
            button(type="button").button.button--edit &#9998 
        td.skill-item__delete
            button(type="button" @click="removeSkill(skill.id)").button.button--delete &#10006
    div(v-else)
        input(type="text" placeholder="newskill"
            v-model="newSkill.title").skill-item__add
        input(type="text" placeholder="percents"
            v-model="newSkill.percents").skill-item__add
        button(type="button" @click="addNewSkill(newSkill)").skill-item__addBtn Добавить
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: {
      type: Object,
      default: () => {}
    },
    editmode: {
      type: Boolean,
      default: false
    },
    typeId: {
        type: Number,
        default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: '',
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions({
      addNewSkill: "skills/add",
      removeSkill: "skills/remove"
    })
  }
};
</script>
<style lang="scss" scoped>
.skill-item {
  display: flex;
  align-items: baseline;
  width: 300px;
}
.skill-item__title {
  width: 100px;
}
.button {
  font-size: 22px;
  cursor: pointer;
  background: transparent;
  border: none;

  &--edit {
    transform: rotate(90deg);
    color: grey;
    margin-bottom: 10px;
  }
  &--delete {
    color: red;
  }
}
.skill-item__add {
  margin-right: 5px;
  width: 100px;
}
.skill-item__addBtn {
  background-color: #14bea7;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
}
</style>

