<template lang="pug">
  tr.blog-item
    td.blog-item__name {{ blog.title }}
    td.blog-item__date {{ timeConverted }}
    td.blog-item__content {{ blog.content }}
    td.blog-item__buttons
      button(
        @click=""
        type="button"
      ).button.button--edit &#9998
      button(
        @click="removeBlog(blog.id)"
        type="button"
      ).button.button--delete &#10006
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: {
      blog: {
        type: Object,
        default: () => {}
      }
    },
    computed:{
      timeConverted: function(){
        var a = new Date(this.blog.date * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + ' ' + month + ' ' + year;
        return time;
      }
    },
    methods: {
      ...mapActions({
        removeBlog: 'blogs/remove'
      })
    }
  }
</script>

<style lang="scss">
  .blog-item {
    td {
      text-align: left;
      padding: 5px 0 5px 25px;
      font-size: 16px;
      color: #455a64;
    }
    &__date {
      white-space: nowrap;
    }
    &__content {
      max-width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__buttons {
      display: flex;
      flex-direction: column;
      padding: 5px 15px !important;
    }
    &:nth-child(odd) {
    background: lightgray;
    }
      tr:nth-child(even) {
    background: #E8E6D1;
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
  }
</style>