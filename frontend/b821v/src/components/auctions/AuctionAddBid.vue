<template>
  <div class="auction-add-bid">
    <UiSwitch v-model="isAutoBetEnabled" />
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

  try {
    const response = await axios.post(
      "http://localhost:8080/api/bid",
      {
        auctionId: props.auction._id,
        userId: userStore.id,
        amount: bidValue,
        role: userStore.role,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Ставка успешно отправлена:", response.data);
    bid.value = "";
  } catch (error) {
    console.error("Ошибка при отправке ставки:", error);
    usernameError.value = "Ошибка при отправке ставки";
  }
};
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
