<script lang="ts" setup>
import { BaseContainer } from '@/shared/ui';
import VideoCards from './VideoCards.vue';

import MobileWave from '../images/wave-mobile.png';
import Wave from '../images/wave.png';
import { useMyI18n } from '@/app/i18n/hooks';

const { t } = useMyI18n('HomePage.Video');
</script>

<template>
  <section class="preview">
    <div class="preview__wave">
      <img class="desctop" :src="Wave" alt="wave" />
      <img class="mobile" :src="MobileWave" alt="wave" />
    </div>
    <div class="preview__wrapper">
      <BaseContainer>
        <div class="preview__content">
          <div class="preview__header">
            <h3 class="preview__title">{{ t('title') }}</h3>
          </div>
          <div class="player">
            <vue-plyr>
              <div
                data-plyr-provider="youtube"
                data-plyr-embed-id="KKg5mLqfNMk"
              ></div>
            </vue-plyr>
          </div>
        </div>
      </BaseContainer>
    </div>
    <VideoCards />
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.preview {
  position: relative;
  overflow: hidden;

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
      height: 80%;
      background-color: $accent;
      z-index: $zIndex_1;

      @media (max-width: $mobile) {
        height: 90%;
      }
    }
  }

  &__content {
    position: relative;
    z-index: $zIndex_1;
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
    color: $white;
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
}
</style>

<style lang="scss">
// .plyr__video-embed,
// .plyr__video-wrapper--fixed-ratio {
//   height: 100% !important;
//   padding-bottom: 0 !important;
// }

// .plyr__poster {
//   background-size: cover !important;
// }
</style>
