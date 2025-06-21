<template>
  <div class="deals-infomation-car">
    <h1 class="deals-infomation-car__title">Информация об автомобиле</h1>
    <hr class="main-hr deals-hr" />
    <div class="deals-infomation-car__main">
      <div class="deals-infomation-car__main-block">
        <h2 class="deals-infomation-car__main-block-title">Модификация</h2>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Объем</div>
          <div class="deals-infomation-car__main-block-item">8.0 л</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Мощность</div>
          <div class="deals-infomation-car__main-block-item">1500 л.с</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Коробка</div>
          <div class="deals-infomation-car__main-block-item">Робот</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Тип привода</div>
          <div class="deals-infomation-car__main-block-item">Полный</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Тип наддува</div>
          <div class="deals-infomation-car__main-block-item">Турбонаддув</div>
        </div>
      </div>

      <div class="deals-infomation-car__main-block">
        <h2 class="deals-infomation-car__main-block-title">Общая информация</h2>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Класс автомобиля
          </div>
          <div class="deals-infomation-car__main-block-item">S</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Страна марки</div>
          <div class="deals-infomation-car__main-block-item">Франция</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Количество дверей
          </div>
          <div class="deals-infomation-car__main-block-item">2</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Количество мест
          </div>
          <div class="deals-infomation-car__main-block-item">2</div>
        </div>
      </div>

      <div class="deals-infomation-car__main-block">
        <h2 class="deals-infomation-car__main-block-title">Двигатель</h2>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Тип двигателя
          </div>
          <div class="deals-infomation-car__main-block-item">Бензиновый</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Объем двигателя
          </div>
          <div class="deals-infomation-car__main-block-item">7993 см³</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Количество цилиндров
          </div>
          <div class="deals-infomation-car__main-block-item">
            {{ userDeal.auctionId.cylinders }}
          </div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Число клапанов на цилиндр
          </div>
          <div class="deals-infomation-car__main-block-item">4</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Система питания
          </div>
          <div class="deals-infomation-car__main-block-item">
            Распределенный впрыск
          </div>
        </div>
      </div>

      <div class="deals-infomation-car__main-block">
        <h2 class="deals-infomation-car__main-block-title">Трансмиссия</h2>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Тип коробки</div>
          <div class="deals-infomation-car__main-block-item">Робот</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Количество передач
          </div>
          <div class="deals-infomation-car__main-block-item">7</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Тип привода</div>
          <div class="deals-infomation-car__main-block-item">Полный</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Степень сжатия
          </div>
          <div class="deals-infomation-car__main-block-item">9</div>
        </div>
      </div>

      <div class="deals-infomation-car__main-block">
        <h2 class="deals-infomation-car__main-block-title">Размеры</h2>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Длина</div>
          <div class="deals-infomation-car__main-block-item">4544 мм</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Ширина</div>
          <div class="deals-infomation-car__main-block-item">2038 мм</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">Высота</div>
          <div class="deals-infomation-car__main-block-item">1212 мм</div>
        </div>
        <div class="deals-infomation-car__main-block-item-list">
          <div class="deals-infomation-car__main-block-lable">
            Колёсная база
          </div>
          <div class="deals-infomation-car__main-block-item">2711 мм</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(["userDeal"]);
</script>
<style lang="stylus">
.deals-hr
    height 3px
    background-color $secondMainColor
.deals-infomation-car
    &__title
        padding 20px 0
        font-size 38px
        font-family "PlayfairDisplaySC"
        text-transform uppercase
    &__main
        margin-top 20px
        margin-bottom 40px
        display grid
        grid-template-columns: repeat(3, 1fr)
        gap: 36px
        font-family "PlayfairDisplaySC"
        text-transform uppercase
    &__main-block-item-list
        display flex
        justify-content space-between
        margin-top 10px
        margin-bottom 10px
</style>
