<template lang="pug">
  .content-container
    .works

      .works__content
        works-add(
          :work="work"
          :editMode="editMode"
        )
        works-list(
          :works="works"
          @fillFormData="fillFormData"
        )
</template>

<script>
  import worksAdd from './worksAdd.vue';
  import worksList from './worksList.vue';
  import { mapActions, mapState } from 'vuex';
  export default {
    components: {
      worksAdd,
      worksList
    },
    data() {
      return {
        work: {},
        editMode: false
      }
    },
    computed: {
      ...mapState('works', {
        works: state => state.data
      })
    },
    created() {
      this.fetchWorks()
    },
    methods: {
      ...mapActions({
        fetchWorks: 'works/fetch'
      }),
      fillFormData(work) {
        this.work = work;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .works {
    margin-left: 20px;
    padding-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: #455a64;
    &__title {
      margin: 0;
      padding-top: 40px;
      margin-bottom: 40px;
      font-size: 21px;
    }
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