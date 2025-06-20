<template>
  <div class="deals-infomation-salesman">
    <hr class="main-hr deals-hr" />
    <h1 class="deals-infomation-salesman__title">Информация об продавце</h1>
    <hr class="main-hr deals-hr" />
    <div class="deals-infomation-salesman__main">
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">
          Название компании:
        </h2>
      </div>
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">Город:</h2>
      </div>
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">
          Контактное лицо:
        </h2>
      </div>
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">ИНН:</h2>
      </div>
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">
          Сайт или профиль компании:
        </h2>
      </div>
      <div class="deals-infomation-salesman__main-block">
        <h2 class="deals-infomation-salesman__main-block-title">
          Описание компании:
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
        grid-template-columns: repeat(2, 1fr)
        gap: 16px
        font-family "PlayfairDisplaySC"
    &__main-block-documents
        color blue
        font-family "PlayfairDisplaySC"
        font-size 28px
</style>
