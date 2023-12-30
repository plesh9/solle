<script lang="ts" setup>
interface LogoProps {
  className?: string;
}

defineProps<LogoProps>();
</script>

<template>
  <a href="#" :class="className" class="logo">
    <img
      src="@/app/assets/images/icons/logo.png"
      class="logo__image"
      alt="logo"
    />
  </a>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.logo {
  position: relative;
  display: inline-block;
  width: toRem(149);
  height: toRem(40);
  transition: opacity $transition;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  &__image {
    position: absolute;
    inset: 0;
    margin: auto;
    object-fit: contain;
    object-position: center;
  }
}
</style>
