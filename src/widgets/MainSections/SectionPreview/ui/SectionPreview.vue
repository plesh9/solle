<script lang="ts" setup>
import { isMobile } from '@/shared/lib';
import { BaseContainer, BaseButton, BaseAnimation } from '@/shared/ui';
import Preview from '../images/preview.png';

const price = '37.95';
const linkToProduct =
  'https://www.sollenaturals.com/product/1094?country=US&lang=en&sngl=AJ47BJ&uli=0';
</script>

<template>
  <section class="preview">
    <BaseContainer>
      <div class="preview__wrapper">
        <div class="preview__block">
          <BaseAnimation :delay="300">
            <h1>Variety Trial Box</h1>
          </BaseAnimation>
          <BaseAnimation :delay="500">
            <p class="main-subtitle">
              This box is a great way to dip your toes into the world of
              adaptogens before diving into a complete health program! The
              Variety Trial Box contains three individual servings of each of
              our five, best-selling adaptogenic drinks. It will give you the
              chance to experiment with each and figure out which serving method
              best suits you, as well as get a taste for what these powerful and
              potent formulas can add to your well-being.
            </p>
          </BaseAnimation>
          <BaseAnimation :delay="700">
            <div class="preview__info">
              <div class="preview__info_pc" v-if="!isMobile">
                <BaseButton as="a" :href="linkToProduct" class="sad"
                  >Buy Now</BaseButton
                >
                <span class="preview__price">$ {{ price }}</span>
              </div>
              <BaseButton
                as="a"
                :href="linkToProduct"
                class="preview__button"
                v-if="isMobile"
              >
                Buy Now $ {{ price }}
              </BaseButton>
            </div>
          </BaseAnimation>
        </div>
        <div class="preview__image">
          <img :src="Preview" alt="preview" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.preview {
  padding-top: toRem(92);
  @media (max-width: $mobile) {
    padding-top: toRem(36);
  }

  &__wrapper {
    display: grid;
    grid-template-columns: minmax(toRem(464), 1fr) 1.25fr;
    align-items: center;
    justify-content: space-between;
    column-gap: toRem(24);

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }

  &__info {
    margin-top: toRem(48);

    @media (max-width: $mobile) {
      margin-top: toRem(24);
    }

    &_pc {
      @include flexRow(center);
      column-gap: toRem(38);
    }
  }

  &__block {
    @media (max-width: $mobile) {
      text-align: center;
    }
  }

  &__price {
    font-size: toRem(22);
  }

  &__image {
    text-align: center;

    @media (max-width: $tablet) {
      margin-top: toRem(48);
    }

    & img {
      max-width: toRem(760);
      width: 100%;
      height: auto;
      aspect-ratio: 760 / 490;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
