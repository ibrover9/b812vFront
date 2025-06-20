<template>
  <div class="auction-add-bid">
    <div class="auction-add-bid__auto-bid">
      <UiSwitch v-model="isAutoBetEnabled" />
      <Transition name="fade">
        <UiInput
          v-if="isAutoBetEnabled"
          class="auction-add-bid__autobid-input"
          v-model="autoBid"
          placeholder="Введите предел автоставки"
          :error="usernameError"
        />
      </Transition>
    </div>
    <div class="auction-add-bid__group">
      <div class="auction-add-bid__first-string">
        <div class="auction-add-bid__current-rate">
          Максимальная сделаная ставка:
          <strong>{{ auction.currentPrice }} $</strong>
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
        <UiButton size="lg" @click="placeBid"> Сделать ставку </UiButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UiSwitch from "../ui/UiSwitch.vue";
import UiButton from "../ui/UiButton.vue";
import UiInput from "../ui/UiInput.vue";
import { useUserStore } from "@/stores/user";

import axios from "axios";
const props = defineProps({
  auction: Object,
});

const userStore = useUserStore();

const bid = ref("");
const autoBid = ref("");
const usernameError = ref("");

const isAutoBetEnabled = ref(false);

const placeBid = async () => {
  usernameError.value = "";

  const bidValue = parseFloat(bid.value);
  if (isNaN(bidValue) || bidValue <= 0) {
    usernameError.value = "Введите корректную сумму ставки";
    return;
  }

  const token = userStore.token;
  if (!token) {
    usernameError.value = "Вы не авторизованы";
    return;
  }

  // Базовое тело запроса
  const requestBody = {
    auctionId: props.auction._id,
    userId: userStore.id,
    amount: bidValue,
    role: userStore.role,
  };

  if (isAutoBetEnabled.value) {
    const autoBidValue = parseFloat(autoBid.value);
    const currentMax = parseFloat(props.auction.currentPrice);

    if (isNaN(autoBidValue) || autoBidValue <= 0) {
      usernameError.value = "Введите корректную сумму автоставки";
      return;
    }

    if (autoBidValue <= currentMax) {
      usernameError.value = `Автоставка должна быть выше текущей ставки (${currentMax} $)`;
      return;
    }

    requestBody.isAutoBid = true;
    requestBody.maxAutoBidAmount = autoBidValue;

    console.log(requestBody);
  }

  try {
    const response = await axios.post(
      "http://localhost:8080/api/bid",
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Ставка успешно отправлена:", response.data);
    bid.value = "";
    autoBid.value = "";
  } catch (error) {
    console.error("Ошибка при отправке ставки:", error);
    usernameError.value = "Ошибка при отправке ставки";
  }
};
</script>

<style lang="stylus" scoped>
.auction-add-bid
    border-radius:20px
    background-color:$fourthMainColor
    padding 20px
    &__auto-bid
      display flex
      justify-content space-between
      align-items center


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
.fade-enter-active, .fade-leave-active
  transition opacity 0.3s ease

.fade-enter-from, .fade-leave-to
  opacity 0

.fade-enter-to, .fade-leave-from
  opacity 1
</style>
