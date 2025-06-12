<template>
  <div class="form-profile-editing">
    <div class="form-profile-editing__string">
      <strong class="form-profile-editing__title">Название компании</strong>
      <p class="form-profile-editing__text">Пирожок</p>
    </div>
    <hr class="main-hr" />
    <div class="form-profile-editing__string">
      <strong class="form-profile-editing__title">Email</strong>
      <p class="form-profile-editing__text">artur.artemov@bk.ru</p>
    </div>
    <hr class="main-hr" />
    <div class="form-profile-editing__string">
      <strong class="form-profile-editing__title">ИНН</strong>
      <p class="form-profile-editing__text">527005589999</p>
    </div>
    <hr class="main-hr" />
    <div class="form-profile-editing__string">
      <strong class="form-profile-editing__title">Номер телефона</strong>
      <p class="form-profile-editing__text">+7 (999) 999-99-99</p>
    </div>
    <hr class="main-hr" />
    <div class="form-profile-editing__string">
      <strong class="form-profile-editing__title">Название компании</strong>
      <p class="form-profile-editing__text">Пирожок</p>
    </div>
    <hr class="main-hr" />
    <div class="form-profile-editing__string">
      <strong class="form-profile-editing__title">Название компании</strong>
      <p class="form-profile-editing__text">Пирожок</p>
    </div>
    <hr class="main-hr" />
  </div>
</template>

<style lang="stylus">
.form-profile-editing
  &__string
    /* базовые стили */
    display grid
    grid-template-columns 1fr 1fr
    padding 20px 10px
    font-size 28px
    background-color white
    border-radius 6px
    /* чтобы масштабирование было ровно из центра */
    transform-origin center center
    /* плавный переход */
    transition transform 0.3s ease, box-shadow 0.3s ease

    /* тень для объёма */


    &:hover
      /* чуть увеличиваем */
      transform scale(1.05)
      /* усиливаем тень */
</style>
