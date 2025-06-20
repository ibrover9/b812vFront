<template>
  <div class="deals-documents">
    <div class="deals-documents__agreement">
      <div class="deals-documents__agreement-lable">Договор</div>
      <div class="deals-documents__agreement-link"><a href="">Скачать</a></div>
    </div>
    <hr class="main-hr deals-hr" />
    <div class="deals-documents__agreement">
      <div class="deals-documents__agreement-lable">Счет</div>
      <div class="deals-documents__agreement-link"><a href="">Скачать</a></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.deals-documents
    &__agreement
        padding 10px 0
        display flex
        justify-content space-between
        font-family "PlayfairDisplaySC"
    &__agreement-lable
        font-size 22px
    &__agreement-link
        font-size 22px
</style>
