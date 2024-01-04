<script lang="ts" setup>
import { isMobile, isTablet } from '@/shared/lib';
import { BaseContainer, BaseButton, BaseAnimation } from '@/shared/ui';
import Preview from '../images/preview.png';
import { useMyI18n } from '@/app/i18n/hooks';

const { t } = useMyI18n('HomePage.Preview');

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
            <h1>{{ t('title') }}</h1>
          </BaseAnimation>
          <BaseAnimation :delay="400" v-if="isTablet">
            <div class="preview__image">
              <img :src="Preview" alt="preview" />
            </div>
          </BaseAnimation>
          <BaseAnimation :delay="500">
            <p class="main-subtitle">
              {{ t('subtitle') }}
            </p>
          </BaseAnimation>
          <BaseAnimation :delay="700">
            <div class="preview__info">
              <div class="preview__info_pc" v-if="!isTablet">
                <BaseButton as="a" :href="linkToProduct">
                  {{ t('buy') }}
                </BaseButton>
                <span class="preview__price">$ {{ price }}</span>
              </div>
              <BaseButton
                as="a"
                :href="linkToProduct"
                class="preview__button"
                v-if="isTablet"
              >
                {{ t('buy') }} $ {{ price }}
              </BaseButton>
            </div>
          </BaseAnimation>
        </div>
        <BaseAnimation :delay="300" variant="opacity" v-if="!isTablet">
          <div class="preview__image">
            <img :src="Preview" alt="preview" />
          </div>
        </BaseAnimation>
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
    @media (max-width: $tablet) {
      text-align: center;
    }
  }

  &__price {
    font-size: toRem(22);
  }

  &__image {
    text-align: center;

    @media (max-width: $tablet) {
      margin-top: toRem(24);
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
