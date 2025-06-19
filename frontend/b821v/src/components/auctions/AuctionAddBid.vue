<template>
  <div class="auction-add-bid">
    <UiSwitch v-model="isAutoBetEnabled" />
    <div class="auction-add-bid__group">
      <div class="auction-add-bid__first-string">
        <div class="auction-add-bid__current-rate">
          Максимальная сделаная ставка:
          <strong>{{ auction.currentPrice }}</strong>
        </div>
        <div class="auction-add-bid__commission">
          Комиссия: <strong>1000</strong>
        </div>
      </div>
      <div class="auction-add-bid__second-string">
        <UiInput
          class="auction-add-bid__bid-input"
          v-model="bid"
          placeholder="Введите ставку"
          :error="usernameError"
        />
        <UiButton size="lg"> Сделать ставку </UiButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UiSwitch from "../ui/UiSwitch.vue";
import UiButton from "../ui/UiButton.vue";
import UiInput from "../ui/UiInput.vue";

defineProps({
  auction: Object,
});

const bid = ref("");
const usernameError = ref("");

const isAutoBetEnabled = ref(false);
</script>

<style lang="stylus">
.auction-add-bid
    border-radius:20px
    background-color:$fourthMainColor
    padding 20px
    &__first-string
        display flex
        justify-content space-between
    &__second-string
        display grid
        grid-template-columns 1.8fr 1fr
        gap 12px
        margin-top 8px
    &__bid-input
       font-size 20px !important
       height 100%
</style>
