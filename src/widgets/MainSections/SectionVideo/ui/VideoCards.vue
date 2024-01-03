<script setup lang="ts">
import { BaseContainer, BaseAnimation, LeafAnimation } from '@/shared/ui';

import Vegetarian from '../images/vegetarian.png';
import GlutenFree from '../images/gluten-free.png';
import SoyFree from '../images/soy-free.png';
import NonGmo from '../images/non-gmo.png';
import NoFillers from '../images/no-fillers.png';
import MsgFree from '../images/msg-free.png';
import NutFree from '../images/nut-free.png';
import HeavyMetals from '../images/heavy-metals.png';

import TopLeaf from '../images/top-leaf.png';
import BottomLeaf from '../images/bottom-leaf.png';

interface ICard {
  title: string;
  image: string;
}

const CARDS: ICard[] = [
  {
    title: 'Vegetarian',
    image: Vegetarian,
  },
  {
    title: 'Gluten-free',
    image: GlutenFree,
  },
  {
    title: 'Soy-free',
    image: SoyFree,
  },
  {
    title: 'Non-GMO',
    image: NonGmo,
  },
  {
    title: 'No fillers or artificial ingredients',
    image: NoFillers,
  },
  {
    title: 'MSG-free',
    image: MsgFree,
  },
  {
    title: 'Nut-free',
    image: NutFree,
  },
  {
    title: 'Free of heavy metals',
    image: HeavyMetals,
  },
];
</script>

<template>
  <div class="cards">
    <div class="cards__leaf cards__leaf-top">
      <LeafAnimation variant="leaftRight">
        <img :src="TopLeaf" alt="leaf" />
      </LeafAnimation>
    </div>
    <BaseContainer>
      <BaseAnimation :delay="300" :duration="700">
        <ul class="cards__list">
          <li class="card" v-for="(card, index) in CARDS" :key="index">
            <div class="card__box">
              <div class="card__image">
                <img :src="card.image" :alt="card.title" />
              </div>
              <p class="card__title">{{ card.title }}</p>
            </div>
          </li>
        </ul>
      </BaseAnimation>
    </BaseContainer>
    <div class="cards__leaf cards__leaf-bottom">
      <LeafAnimation variant="leafLeft">
        <img :src="BottomLeaf" alt="leaf" />
      </LeafAnimation>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.cards {
  position: relative;
  padding: toRem(96) 0;

  @media (max-width: $mobile) {
    padding-top: toRem(40);
    padding-bottom: toRem(80);
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: toRem(54);
    column-gap: toRem(24);
    max-width: toRem(838);
    margin: 0 auto;

    @media (max-width: $pc) {
      max-width: toRem(638);
    }

    @media (max-width: $mobile) {
      column-gap: toRem(16);
      row-gap: toRem(42);
      grid-template-columns: repeat(2, 1fr);
      max-width: toRem(438);
    }
  }

  &__leaf {
    position: absolute;

    & img,
    & > div {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    & img {
      object-fit: cover;
      object-position: center;
    }

    &-top {
      top: -45%;
      right: 0;
      width: toRem(302);
      height: toRem(488);
      @include adaptiveValue('width', 302, 79, 1920, 375, 1);
      @include adaptiveValue('height', 488, 188, 1920, 375, 1);

      @media (max-width: $pc) {
        top: -32%;
      }

      @media (max-width: $tablet) {
        top: -27%;
      }

      @media (max-width: $mobile) {
        top: -10%;
      }

      @media (max-width: $mobileSmall) {
        top: -12%;
      }
    }

    &-bottom {
      bottom: 0;
      left: 0;
      @include adaptiveValue('width', 279, 79, 1920, 375, 1);
      @include adaptiveValue('height', 355, 105, 1920, 375, 1);

      @media (max-width: $pc) {
        left: -5%;
      }

      @media (max-width: $mobile) {
        left: 0;
      }
    }
  }
}

.card {
  &__box {
    text-align: center;
    max-width: toRem(113);
    margin: 0 auto;
  }

  &__image {
    & img {
      width: toRem(106);
      height: toRem(106);

      @media (max-width: $mobile) {
        width: toRem(80);
        height: toRem(80);
      }
    }
  }

  &__title {
    margin-top: toRem(16);
    font-weight: 300;
  }
}
</style>
