<template>
  <button :class="buttonClasses" :disabled="disabled" @click="onClick">
    <img
      v-if="icon && iconPosition === 'left'"
      src="/src/assets/icons/arrowLeft.svg"
      alt="icon"
      class="button__icon button__icon--left"
    />

    <span class="button__text"><slot /></span>

    <img
      v-if="icon && iconPosition === 'right'"
      src="/src/assets/icons/arrowRight.svg"
      alt="icon"
      class="button__icon button__icon--right"
    />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "default", // 'default', 'outline', 'ghost', 'destructive'
  },
  size: {
    type: String,
    default: "md", // 'sm', 'md', 'lg'
  },
  icon: {
    type: String,
    default: "", // путь к иконке
  },
  iconPosition: {
    type: String,
    default: "left", // 'left' | 'right'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const onClick = (event) => {
  if (!props.disabled) emit("click", event);
};

const baseClass = "button";

const sizeModifier = {
  sm: "button--size-sm",
  md: "button--size-md",
  lg: "button--size-lg",
};

const variantModifier = {
  default: "button--variant-default",
  outline: "button--variant-outline",
  ghost: "button--variant-ghost",
  destructive: "button--variant-destructive",
  redGhost: "button--variant-red-ghost",
};

const disabledModifier = "button--disabled";

const buttonClasses = computed(() => {
  return [
    baseClass,
    sizeModifier[props.size],
    variantModifier[props.variant],
    props.disabled ? disabledModifier : "",
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<style lang="stylus" scoped>
.button
  text-transform uppercase
  display inline-flex
  align-items center
  justify-content center
  gap 0.5rem
  border-radius 1rem
  font-weight 400
  cursor pointer
  transition background-color 0.2s ease, color 0.2s ease
  outline none
  border none
  user-select none
  &:focus
    outline none
    box-shadow 0 0 0 2px rgba(59, 130, 246, 0.6) // синий фокус

.button--disabled
  opacity 0.5
  cursor not-allowed
  pointer-events none


.button--size-sm
  padding 0.25rem 0.75rem
  font-size 0.875rem

.button--size-md
  padding 0.5rem 1rem
  font-size 1rem

.button--size-lg
  padding 0.75rem 1.5rem
  font-size 1.125rem


.button--variant-default
  background-color $firstMainColor
  color $secondMainColor
  &:hover:not(.button--disabled)
    background-color #F7C815

.button--variant-outline
  background-color transparent
  border 1px solid $firstMainColor
  color $secondMainColor
  &:hover:not(.button--disabled)
    background-color #eff6ff

.button--variant-ghost
  background-color transparent
  color $inconspicuousColor
  border 1px solid $inconspicuousColor
  &:hover:not(.button--disabled)
    background-color $firstMainColor
    border 1px solid $secondMainColor
    color $secondMainColor
.button--variant-red-ghost
  width 200px
  background-color transparent
  color $inconspicuousColor
  border 1px solid $inconspicuousColor
  &:hover:not(.button--disabled)
    background-color $redStandartColor
    border 1px solid $secondMainColor
    color $secondMainColor

.button--variant-destructive
  background-color #dc2626
  color white
  &:hover:not(.button--disabled)
    background-color #b91c1c

// Элементы
.button__icon
  width 1.25rem
  height 1.25rem
  &--left
    margin-right 0.5rem
  &--right
    margin-left 0.5rem

.button__text
  display inline-block
</style>
