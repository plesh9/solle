<script lang="ts" setup>
import { ref } from 'vue';
import { type MotionVariants, useMotion } from '@vueuse/motion';

export interface IAnimation {
  delay?: number;
  duration?: number;
  variant?: 'slideDown' | 'slideLeft';
  visible?: 'visibleOnce' | 'visible' | 'enter';
  options?: MotionVariants;
}

const props = withDefaults(defineProps<IAnimation>(), {
  delay: 0,
  duration: 500,
  variant: 'slideDown',
  visible: 'visibleOnce',
});

const targetRef = ref<HTMLElement | null>(null);

const transition = {
  delay: props.delay,
  duration: props.duration,
};

const slideDown: MotionVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  [props.visible]: {
    opacity: 1,
    y: 0,
    transition,
  },
};

const slideLeft: MotionVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  [props.visible]: {
    opacity: 1,
    x: 0,
    transition,
  },
};

const variants = {
  slideDown,
  slideLeft,
};

useMotion(targetRef, props.options || variants[props.variant]);
</script>

<template>
  <div ref="targetRef">
    <slot />
  </div>
</template>
