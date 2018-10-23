<template lang="pug">
  .content-container
    .blogs
      .blogs__content
        blogs-add
        blogs-list(
          :blogs="blogs"
        )
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import blogsAdd from './blogsAdd.vue';
  import blogsList from './blogsList.vue';
  export default {
    components: {
      blogsAdd,
      blogsList
    },
    computed: {
      ...mapState('blogs', {
        blogs: state => state.data
      })
    },
    created() {
      this.fetchBlogs()
    },
    methods: {
      ...mapActions({
        fetchBlogs: 'blogs/fetch'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .blogs {
    margin-left: 20px;
    padding-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: #455a64;
    &__content {
      display: flex;
      justify-content: flex-start;
      @media (max-width: 980px) {
        flex-direction: column;
        justify-content: flex-start;
      }
    }
  }
</style>