<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';

import { BaseContainer, BaseRating } from '@/shared/ui';
import Background from '../images/commnet-bg.png';
import { useMyI18n } from '@/app/i18n/hooks';

interface IComment {
  text: string;
  name: string;
  rating: number;
}

const { t } = useMyI18n('HomePage.Comments');

const COMMENTS: IComment[] = [
  {
    text: `comment_1`,
    name: 'Tanya Johnson',
    rating: 5,
  },
  {
    text: `comment_2`,
    name: 'Sara B',
    rating: 5,
  },
  {
    text: `comment_3`,
    name: 'Karen S',
    rating: 5,
  },
  {
    text: `comment_4`,
    name: 'Laura U',
    rating: 5,
  },
  {
    text: `comment_5`,
    name: 'Mary G',
    rating: 5,
  },
];
</script>

<template>
  <section class="comments">
    <BaseContainer>
      <div class="comments__header">
        <h2>{{ t('title') }}</h2>
      </div>
      <div class="comments__content">
        <Swiper
          class="comments__swiper"
          :modules="[Pagination, Autoplay]"
          loop
          :slides-per-view="1"
          :space-between="24"
          :pagination="{
            clickable: true,
            modifierClass: 'comments__',
            bulletClass: 'comments__bullet',
            bulletActiveClass: 'comments__bullet-active',
            renderBullet: (index: number, className: string) => {
              return `<button class='${className}' type='button' />`;
            },
          }"
          :speed="1000"
          :autoplay="{
            delay: 10000,
            disableOnInteraction: true,
          }"
          :breakpoints="{
            767: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
        >
          <SwiperSlide v-for="(comment, index) in COMMENTS" :key="index">
            <div class="comment">
              <div class="comment__body">
                <p class="comment__text">{{ t(comment.text) }}</p>
              </div>
              <div class="comment__footer">
                <p class="comment__name">{{ comment.name }}</p>
                <div class="comment__rating">
                  <BaseRating :value="comment.rating" />
                </div>
              </div>

              <div class="comment__bg">
                <img :src="Background" alt="background" />
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

.comments {
  padding-bottom: toRem(80);
  background-color: #f6f5ef;

  @media (max-width: $mobile) {
    padding-bottom: toRem(40);
  }

  &__header {
    text-align: center;
  }

  &__content {
    margin-top: toRem(80);

    @media (max-width: $tablet) {
      margin-top: toRem(40);
    }
  }

  &__swiper {
    @media (max-width: em($maxWidthContainer)) {
      margin: 0 $paddingContainerMinus;
      padding: toRem(4) $paddingContainer;
    }
  }
}
.comment {
  position: relative;
  @include flexColumn();
  background-color: $white;
  border-radius: $radius;
  box-shadow: 0 toRem(4) toRem(15) 0 #00000026;
  @include adaptiveValue('height', 384, 564, 1350, 768, 1);

  @media (max-width: $mobile) {
    @include adaptiveValue('height', 260, 420, 767, 375, 1);
  }

  &__body {
    position: relative;
    padding: toRem(40) toRem(26) 0;
    flex: 1 1 auto;
    overflow-y: auto;
    z-index: $zIndex_1;

    @media (max-width: em(1350)) {
      padding: toRem(24) toRem(16) 0;
    }
  }

  &__footer {
    padding: toRem(30) toRem(26);

    @media (max-width: em(1350)) {
      padding: toRem(16) toRem(16) toRem(24);
    }
  }

  &__name {
    font-weight: 500;
  }

  &__rating {
    margin-top: toRem(6);
  }

  &__bg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: toRem(130);
    height: toRem(223);

    & > img {
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<style lang="scss">
@import 'src/app/assets/styles/variables.scss';

.comments {
  &__bullets {
    @include flexRow(center, center);
    column-gap: toRem(6);
    margin-top: toRem(40);

    @media (max-width: $tablet) {
      margin-top: toRem(32);
    }
  }

  &__bullet {
    position: relative;
    display: inline-block;
    width: toRem(20);
    height: toRem(20);
    cursor: pointer;
    transition: width $transition;

    @media (any-hover: hover) {
      &:hover:not(&-active)::before {
        opacity: 0.8;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: $grey;
      width: 100%;
      height: toRem(6);
      border-radius: toRem(5);
      transition:
        opacity $transition,
        width $transition;
    }

    &-active {
      width: toRem(27);

      &::before {
        background-color: $accent;
      }
    }
  }
}
</style>
