<template>
  <div class="deals-infomation-salesman">
    <hr class="main-hr deals-hr" />
    <h1 class="deals-infomation-salesman__title">Информация об продавце</h1>
    <hr class="main-hr deals-hr" />
    <div class="deals-infomation-salesman__main">
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">
          Название компании: 7709991876
        </h2>
      </div>
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">
          Город: Москва
        </h2>
      </div>
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">
          Контактное лицо: Мелехин Артем Андреевич
        </h2>
      </div>
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">
          ИНН: {{ userDeal.buyerId.inn }}
        </h2>
      </div>
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">
          Телефон: {{ userDeal.buyerId.phone }}
        </h2>
      </div>
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">
          Описание компании: Компания, занимающаяся разработкой программного
          обеспечения и цифровых решений для автоматизации бизнес-процессов.
          Специализируется на создании корпоративных информационных систем,
          веб-платформ и мобильных приложений. Обладает опытом внедрения
          цифровых инструментов в сфере торговли, логистики и финансов, а также
          предоставляет консалтинговые услуги по цифровой трансформации
          предприятий.
        </h2>
      </div>
      <div class="deals-infomation-salesman__main-block-documents">
        <a href="">
          Документы, подтверждающие право собственности на автомобили
        </a>
      </div>
    </div>
    <hr class="main-hr deals-hr" />
  </div>
</template>
<script setup>
defineProps(["userDeal"]);
</script>
<style lang="stylus">
.deals-hr
    height 3px !important
    background-color $secondMainColor !important
.deals-infomation-salesman
    &__main
        margin-bottom 20px
    &__title
        padding 20px 0
        font-size 38px
        font-family "PlayfairDisplaySC"
    &__main-block
        margin-top 20px
        margin-bottom 20px
        display grid

        gap: 16px
        font-family "PlayfairDisplaySC"
    &__main-block-documents
        color blue
        font-family "PlayfairDisplaySC"
        font-size 28px
</style>
