<script setup lang="ts">
import { type MotionVariants } from '@vueuse/motion';
import BaseAnimation from './BaseAnimation.vue';

interface ILeafAnimation {
  delay?: number;
  duration?: number;
  variant?: 'leafLeft' | 'leaftRight';
  visible?: 'visibleOnce' | 'visible' | 'enter';
}

const props = withDefaults(defineProps<ILeafAnimation>(), {
  delay: 300,
  duration: 900,
  variant: 'leafLeft',
  visible: 'visibleOnce',
});

const transition = {
  delay: props.delay,
  duration: props.duration,
};

const leafLeft: MotionVariants = {
  initial: {
    opacity: 0,
    x: '-300%',
  },
  [props.visible]: {
    opacity: 1,
    x: 0,
    transition,
  },
};

const leaftRight: MotionVariants = {
  initial: {
    opacity: 0,
    x: '300%',
  },
  [props.visible]: {
    opacity: 1,
    x: 0,
    transition,
  },
};

const variants = {
  leafLeft,
  leaftRight,
};
</script>

<template>
  <BaseAnimation :options="variants[props.variant]">
    <slot />
  </BaseAnimation>
</template>
