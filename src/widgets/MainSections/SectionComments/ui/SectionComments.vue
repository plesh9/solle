<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';

import { BaseContainer, BaseRating } from '@/shared/ui';
import Background from '../images/commnet-bg.png';

interface IComment {
  text: string;
  name: string;
  rating: number;
}

const COMMENTS: IComment[] = [
  {
    text: `I have been taking Solle Naturals products for 5 ½ years. It’s really a challenge to put all the goodness of the products in a quick review, because there are so many benefits. Everything is better for me….from better digestion, better mood, more energy, calmer mind, better response to stress, just to name a few. I can honestly say that I would never want to be without Solle Naturals products.`,
    name: 'Tanya Johnson',
    rating: 5,
  },
  {
    text: `Solle products have given me my life back. Before Solle Naturals was part of my health journey I was exhausted and anxious all the time. My digestion was completely messed up and stress levels were an all time high. Now I can manage stress and oncoming panic attacks with ease, I have energy to conquer all of my tasks and I don’t suffer from daily anxiety.`,
    name: 'Sara B',
    rating: 5,
  },
  {
    text: `Solle Naturals have helped me in so many ways.. I no longer need a cup of coffee to wake up or a glass of wine to fall asleep..I worry less and accomplish more..my hair and nails and stronger and longer my hormones are now in balance. I am happier and healthier because of making these small changes.`,
    name: 'Karen S',
    rating: 5,
  },
  {
    text: `I have been taking Solle Naturals products for 5 ½ years. It’s really a challenge to put all the goodness of the products in a quick review, because there are so many benefits. Everything is better for me….from better digestion, better mood, more energy, calmer mind, better response to stress, just to name a few. I can honestly say that I would never want to be without Solle Naturals products.`,
    name: 'Tanya Johnson',
    rating: 5,
  },
];
</script>

<template>
  <section class="comments">
    <BaseContainer>
      <div class="comments__header"><h2>What people are saying</h2></div>
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
                <p class="comment__text">{{ comment.text }}</p>
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
      margin: 0 toRem(-$paddingContainer);
      padding: toRem(4) toRem($paddingContainer);
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
