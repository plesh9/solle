<script lang="ts" setup>
import { BaseContainer, BaseAnimation } from '@/shared/ui';
import DesctopVideo from './DesctopVideo.vue';
import MobileVideo from './MobileVideo.vue';
</script>

<template>
  <section class="preview">
    <div class="preview__wave">
      <img class="desctop" src="../images/wave.png" alt="wave" />
      <img class="mobile" src="../images/wave-mobile.png" alt="wave" />
    </div>
    <div class="preview__wrapper">
      <BaseContainer>
        <div class="preview__header">
          <h3 class="preview__title">Not your typical wellness company</h3>
        </div>
        <div class="player">
          <DesctopVideo class="player__desctop" />
          <MobileVideo class="player__mobile" />
        </div>
      </BaseContainer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.preview {
  &__wave {
    position: relative;
    width: 100%;
    aspect-ratio: 1600 / 108;
    height: auto;

    @media (max-width: $mobile) {
      aspect-ratio: 375 / 108;
    }

    & > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    & .desctop {
      @media (max-width: $mobile) {
        display: none;
      }
    }

    & .mobile {
      @media (min-width: $mobile) {
        display: none;
      }
    }
  }

  &__wrapper {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: toRem(579);
      background-color: $accent;

      @media (max-width: em(1213)) {
        aspect-ratio: 1.8 / 1;
        height: auto;
      }

      @media (max-width: $mobile) {
        aspect-ratio: 375 / 375;
      }
    }
  }

  &__header {
    position: relative;
    text-align: center;
    z-index: $zIndex_1;
    text-shadow: 0 toRem(4) toRem(4) 0 #6a6a6a40;
  }

  &__title {
    @include adaptiveValue('font-size', 60, 24, 991, 375, 1);
    font-weight: 700;
    line-height: 150%; /* 90/60 */
    color: #fff;
  }
}
.player {
  position: relative;
  max-width: toRem(1165);
  margin: 0 auto;
  border-radius: toRem(8);
  overflow: hidden;
  margin-top: toRem(50);
  aspect-ratio: 1165 / 614;

  @media (max-width: $mobile) {
    margin-top: toRem(40);
  }

  @media (max-width: $mobileSmall) {
    aspect-ratio: 1 / 1;
  }

  &__desctop {
    height: 100%;
    @media (max-width: $mobile) {
      display: none;
    }
  }

  &__mobile {
    height: 100%;
    @media (min-width: $mobile) {
      display: none;
    }
  }
}

:global(body .plyr__poster) {
  background-size: 110%;
}
</style>
