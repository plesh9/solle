<script lang="ts" setup>
import { BaseContainer, BaseLogo } from '@/shared/ui';
import { LanguageSelector } from '@/features/LanguageSelector';

interface HeaderProps {
  className?: string;
}

defineProps<HeaderProps>();
</script>

<template>
  <header :class="className" class="header">
    <BaseContainer>
      <div class="header__wrapper">
        <BaseLogo />
        <LanguageSelector />
      </div>
    </BaseContainer>
  </header>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: $white;
  padding: toRem(12) 0;
  box-shadow: $box_shadow;
  z-index: $zIndex_50;

  &__wrapper {
    @include flexRow(center, space-between);
    column-gap: toRem(24);
  }
}
</style>
