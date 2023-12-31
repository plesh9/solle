<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { filename } from 'pathe/utils';

import { type ISlide } from '../types';
import { SLIDERS } from '../sliders';

import {
  BaseContainer,
  CheckMarkIcon,
  BaseAnimation,
  LongArrowIcon,
} from '@/shared/ui';

const sliders = ref<ISlide[]>(SLIDERS);
const slider = ref<any>(null);
const modules = [Pagination, EffectFade, Autoplay];
const glob = import.meta.glob('../images/*.png', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]: any[]) => [
    filename(key),
    value.default,
  ])
);

const onSwiper = (swiper: any) => {
  slider.value = swiper;
  console.log(slider.value);
};
</script>

<template>
  <section class="sliders">
    <BaseContainer>
      <div class="sliders__header">
        <h2>See What's Inside</h2>
      </div>
      <div class="sliders__wrapper">
        <Swiper
          :slides-per-view="1"
          :space-between="12"
          loop
          :pagination="{
            clickable: true,
            modifierClass: 'sliders__',
            bulletClass: 'sliders__bullet',
            bulletActiveClass: 'sliders__bullet-active',
            renderBullet: (index: number, className: string) => {
              return `<button class='${className}' type='button' />`;
            },
          }"
          :modules="modules"
          @swiper="onSwiper"
          class="swiper"
          :effect="'fade'"
          :fadeEffect="{
            crossFade: true,
          }"
          :speed="800"
          :autoplay="{
            delay: 10000,
            disableOnInteraction: true,
          }"
          autoHeight
        >
          <SwiperSlide v-for="(slide, index) in sliders" :key="index">
            <div class="slide">
              <div class="slide__image">
                <img :src="images[`${slide.imageUrl}`]" alt="Slide Image" />
              </div>
              <div class="slide__block">
                <div class="slide__header">
                  <h3 class="slide__title">
                    {{ slide.title.text }}<b>{{ slide.title.strong }}</b>
                  </h3>
                  <p class="slide__subtitle">{{ slide.subtitle }}</p>
                </div>
                <!-- You can also loop through slide items if needed -->
                <ul class="slide__items">
                  <li v-for="(item, index) in slide.items" :key="index">
                    <BaseAnimation
                      :delay="(index + 1) * 200"
                      variant="slideLeft"
                    >
                      <div class="slide__item">
                        <div><CheckMarkIcon /></div>
                        <p>
                          <strong>{{ item.title }}</strong> - {{ item.text }}
                        </p>
                      </div>
                    </BaseAnimation>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <div class="sliders__buttons">
            <button
              class="sliders__button sliders__button-prev"
              @click.stop="slider?.slidePrev()"
              type="button"
            >
              <LongArrowIcon />
            </button>
            <button
              class="sliders__button sliders__button-next"
              @click.stop="slider?.slideNext()"
              type="button"
            >
              <LongArrowIcon />
            </button>
          </div>
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

  &__buttons {
    @include flexRow(center);
    column-gap: toRem(16);
    position: absolute;
    right: 0;
    top: toRem(50);
    z-index: $zIndex_1;

    @media (max-width: $tablet) {
      @include adaptiveValue('right', 104, 0, 991, 788, 1);
      @include adaptiveValue('top', 748, 728, 788, 767, 1);
    }

    @media (max-width: $mobile) {
      @include adaptiveValue('top', 715, 350, 767, 375, 1);
      column-gap: toRem(12);
    }
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
      font-size: toRem(20);
    }

    @media (max-width: $mobile) {
      text-align: center;
    }

    & > b {
      font-weight: 600;
    }
  }

  &__subtitle {
    margin-top: toRem(16);
    font-weight: 600;
    font-size: toRem(18);
    line-height: 150%; /* 27/18 */
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
