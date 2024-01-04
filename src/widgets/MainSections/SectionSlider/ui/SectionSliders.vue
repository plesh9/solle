<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

import { type ISlide } from '../types';
import { SLIDERS } from '../sliders';

import {
  BaseContainer,
  CheckMarkIcon,
  BaseAnimation,
  LongArrowIcon,
} from '@/shared/ui';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { useMyI18n } from '@/app/i18n/hooks';

const { t } = useMyI18n('HomePage.Slider');

const sliders = ref<ISlide[]>(SLIDERS);
const slider = ref<any>(null);
const modules = [Pagination, EffectFade, Autoplay];

const onSwiper = (swiper: any) => {
  slider.value = swiper;
};
</script>

<template>
  <section class="sliders">
    <BaseContainer>
      <div class="sliders__header">
        <h2>{{ t('title') }}</h2>
      </div>
      <div class="sliders__wrapper">
        <Swiper
          @swiper="onSwiper"
          :modules="modules"
          class="swiper"
          loop
          :slides-per-view="1"
          :space-between="12"
          :effect="'fade'"
          :fadeEffect="{
            crossFade: true,
          }"
          :pagination="{
            clickable: true,
            modifierClass: 'sliders__',
            bulletClass: 'sliders__bullet',
            bulletActiveClass: 'sliders__bullet-active',
            renderBullet: (index: number, className: string) => {
              return `<button class='${className}' type='button' />`;
            },
          }"
          :speed="800"
          autoHeight
        >
          <SwiperSlide v-for="(slide, index) in sliders" :key="index">
            <div class="slide">
              <div class="slide__image">
                <img :src="slide.imageUrl" alt="Slide Image" />
              </div>
              <div class="slide__block">
                <div class="slide__header">
                  <h3 class="slide__title">
                    {{ slide.title.text }}<b>{{ slide.title.strong }}</b>
                  </h3>
                  <div class="slide__box">
                    <p class="slide__subtitle">
                      {{ t(`${slide.key}.${slide.subtitle}`) }}
                    </p>
                    <div class="slide__buttons">
                      <button
                        class="slide__button slide__button-prev"
                        @click.stop="slider?.slidePrev()"
                        type="button"
                      >
                        <LongArrowIcon />
                      </button>
                      <button
                        class="slide__button slide__button-next"
                        @click.stop="slider?.slideNext()"
                        type="button"
                      >
                        <LongArrowIcon />
                      </button>
                    </div>
                  </div>
                </div>
                <ul class="slide__items">
                  <li v-for="(item, index) in slide.items" :key="index">
                    <BaseAnimation
                      :delay="(index + 1) * 200"
                      variant="slideLeft"
                    >
                      <div class="slide__item">
                        <div><CheckMarkIcon /></div>
                        <p>
                          <strong>{{ t(`${slide.key}.${item.title}`) }}</strong>
                          -
                          {{ t(`${slide.key}.${item.text}`) }}
                        </p>
                      </div>
                    </BaseAnimation>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </BaseContainer>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.sliders {
  &__header {
    text-align: center;
  }

  &__wrapper {
    margin-top: toRem(80);
    position: relative;

    @media (max-width: $mobile) {
      margin-top: toRem(40);
    }
  }
}

.slide {
  display: grid;
  grid-template-columns: minmax(toRem(460), 1fr) 1.6fr;
  justify-content: space-between;
  column-gap: toRem(24);

  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
    row-gap: toRem(8);
  }

  &__image {
    text-align: center;
    position: relative;
    z-index: $zIndex_1;

    & img {
      aspect-ratio: 528 / 490;
      max-width: toRem(740);
      width: 100%;
      height: auto;
      object-fit: contain;
      object-position: center;
    }
  }

  &__block {
    max-width: toRem(740);
    margin-left: auto;

    @media (max-width: $tablet) {
      margin: auto;
    }
  }

  &__header {
    padding-bottom: toRem(16);
    border-bottom: toRem(1) solid $accent;
  }

  &__title {
    font-size: toRem(28);
    line-height: 150%; /* 42/28 */

    @media (max-width: $mobile) {
      font-size: toRem(24);
    }

    @media (max-width: $mobile) {
      text-align: center;
    }

    & > b {
      font-weight: 600;
    }
  }

  &__box {
    @include flexRow(center, space-between);
    column-gap: toRem(16);
    margin-top: toRem(16);
  }

  &__subtitle {
    font-weight: 600;
    font-size: toRem(18);
    line-height: 150%; /* 27/18 */
  }

  &__buttons {
    @include flexRow(center);
    column-gap: toRem(16);
  }

  &__button {
    @include flexRow(center, center);
    width: toRem(40);
    height: toRem(40);
    border-radius: 50%;
    transition: filter $transition;

    @media (any-hover: hover) {
      &:hover {
        filter: brightness(1.05);
      }
    }

    &-prev {
      background-color: $accent_light;
      color: $accent;

      & svg {
        transform: scale(-1, 1);
      }
    }

    &-next {
      background-color: $accent;
      color: $white;
    }
  }

  &__items {
    display: grid;
    row-gap: toRem(24);
    margin-top: toRem(24);

    @media (max-width: $mobile) {
      row-gap: toRem(16);
      margin-top: toRem(16);
    }
  }

  &__item {
    @include flexRow(flex-start);
    column-gap: toRem(16);

    @media (max-width: $mobile) {
      column-gap: toRem(8);
    }

    & svg {
      width: toRem(24);
      height: toRem(24);
      color: $accent;

      @media (max-width: $mobile) {
        width: toRem(20);
        height: toRem(20);
        transform: translateY(toRem(2));
      }
    }

    & > p {
      font-weight: 500;

      @media (max-width: $mobile) {
        font-size: toRem(14);
      }
    }
  }
}
</style>

<style lang="scss">
@import 'src/app/assets/styles/variables.scss';

.sliders {
  &__bullets {
    @include flexRow(center, flex-end);
    column-gap: toRem(8);
    margin-top: toRem(40);

    @media (max-width: $tablet) {
      justify-content: center;
      margin-top: toRem(32);
    }
  }

  &__bullet {
    display: inline-block;
    background-color: $grey;
    width: toRem(20);
    height: toRem(20);
    border-radius: 50%;
    transition: opacity $transition;
    cursor: pointer;

    @media (any-hover: hover) {
      &:hover:not(&-active) {
        opacity: 0.8;
      }
    }

    @media (max-width: $mobile) {
      width: toRem(16);
      height: toRem(16);
    }

    &-active {
      background-color: $accent;
    }
  }
}
</style>
