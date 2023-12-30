<script setup lang="ts">
type ButtonElements = "button" | "a";
type ButtonVariants = "base" | "secondary";

interface IButton {
  as?: ButtonElements;
  variant?: ButtonVariants;
}

withDefaults(defineProps<IButton>(), {
  as: "button",
  variant: "base",
});
</script>

<template>
  <component :is="as" class="button" :class="variant">
    <slot />
  </component>
</template>

<style scoped lang="scss">
@import "src/app/assets/styles/variables.scss";

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: toRem(8);
  padding: toRem(16) toRem(32);
  border-radius: toRem(50);
  font-size: toRem(18);
  line-height: 150%; /* 27/18 */
  font-weight: 500;
  transition: all $transition;

  &.base {
    color: $white;
    background-color: $accent;

    @media (any-hover: hover) {
      &:hover {
        filter: brightness(1.05);
      }
    }
  }
}
</style>
