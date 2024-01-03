<script lang="ts" setup>
import { StarIcon } from '../ui/icons';

interface RatingProps {
  value: number;
}

defineProps<RatingProps>();
</script>

<template>
  <ul class="stars">
    <li
      class="star"
      v-for="(_, index) in Array.from({ length: 5 })"
      :key="index"
    >
      <span class="star__icon star__icon-empty"><StarIcon /> </span>
      <span class="star__icon star__icon-active" v-if="index + 1 <= value">
        <StarIcon />
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.stars {
  display: flex;
  align-items: center;
  column-gap: toRem(6);
}

.star {
  position: relative;

  &__icon {
    position: relative;
    @include flexColumn(center, center);
    width: toRem(13);
    height: toRem(13);

    &-empty {
      color: $grey;
    }

    &-active {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      color: $yellow;
    }

    & svg {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
