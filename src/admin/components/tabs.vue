<template lang="pug">
  div.tabs
    ul.tabs__list 
        li.tabs__item.tabs__item--active
            span.tabs__text Обо мне
        li.tabs__item
            span.tabs__text Блог
        li.tabs__item
            span.tabs__text Мои работы
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.tabs{
    height: 80px;
    width: 100%;
    background-color: #f0efe9;
    display: flex;
    align-items: center;
    box-sizing: border-box;
}
.tabs__list{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
}
.tabs__item{
    width: 180px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    cursor: pointer;
    font-family: Arial, sans-serif;
    font-weight: 600;
    color: #67787f;
    border-right: 2px solid #f9f9f8;
    &:hover{
        color:#14bea7;
    }
    &--active{
        background-color: #f9f9f8;
    }
}
</style>
