<template lang="pug">
  form.form(
    @submit.prevent="checkForm"
    )
    h3.form__title Добавить запись
    input.form__input(
      v-model="newBlog.title"
      type="text"
      placeholder="Название поста"
    )
    masked-input.form__input(
      v-model="newBlog.date"
      mask="11/11/1111"
      type="text"
      placeholder="ММ/ДД/ГГГГ"
      )
    textarea.form__textarea(
      v-model="newBlog.content"
      placeholder="Текст блога"
    )
    div.blog-item__addError(v-if="errors.length") Incorrect:
      ul
        li(v-for="error in errors") {{error}}
    button.form__button(
      @click="addNewBlog(newBlog)"
      type="submit"
    ) Добавить
</template>

<script>
  import { mapActions } from 'vuex';
  import MaskedInput from 'vue-masked-input';
  export default {
    components: {
      MaskedInput
    },
    data() {
      return {
        errors: [],
        newBlog: {
          title: '',
          date: '',
          content: ''
        }
      }
    },
    methods: {
      ...mapActions({
        addNewBlog: 'blogs/add'
      }),
    checkForm:function(e) {
      this.errors = [];
      if(this.newBlog.title && this.newBlog.percents) {
        return false;
        }
      if(!this.newBlog.title) this.errors.push("title required!");

      if(!this.newBlog.date) this.errors.push("date required!");
      if(!this.newBlog.content) this.errors.push("content required!");
      e.preventDefault();
    }
    }
  }
</script>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 30px;

    @media (max-width: 980px) {
      margin-bottom: 30px;
    }
    &__title {
      font-size: 16px;
      margin: 0;
      margin-bottom: 15px;
    }
    &__input {
      width: 300px;
      padding: 12px 20px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      outline-color: #14bea7;
      &::placeholder {
        color: rgba(55, 62, 66, 0.5);
      }
    }
    &__textarea {
      border-radius: 5px;
      padding: 12px 20px;
      min-width: 300px;
      width: 300px;
      height: 150px;
      resize: none;
      border-color: transparent;
      outline-color: #14bea7;
      @media (max-width: 550px) {
        width: 380px;
      }
      @media (max-width: 400px) {
        width: 300px;
      }
      &::placeholder {
        color: rgba(55, 62, 66, 0.5);
      }
    }
    &__button {
      background-color: #14bea7;
      padding: 10px 20px;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: 30px;
      font-weight: 600;
      &:hover {
        background-color: #10e9cc;
      }
    }
  }
  .blog-item__addError {
  color: red;
}
</style>