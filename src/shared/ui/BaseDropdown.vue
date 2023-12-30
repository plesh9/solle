<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";

interface BaseDropdownProps {
  className?: string;
  closeDropdown?: () => void;
  parentRef?: HTMLElement | null;
  position?: "center" | "right";
}

const props = withDefaults(defineProps<BaseDropdownProps>(), {
  position: "center",
});

const isOpen = ref(false);
const open = () => (isOpen.value = true);
const close = () => (isOpen.value = false);

const handleClickOutside = (event: MouseEvent) => {
  if (props.parentRef && !props.parentRef.contains(event.target as Node)) {
    close();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

defineExpose({
  open,
  close,
  isOpen,
});
</script>

<template>
  <transition name="transition">
    <div class="dropdown" :class="[position, className]" v-if="isOpen">
      <div class="dropdown__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import "src/app/assets/styles/variables.scss";

.dropdown {
  position: absolute;
  top: 100%;
  z-index: $zIndex_5;
  width: fit-content;

  &.center {
    left: 50%;
    transform: translateX(-50%);
  }

  &.right {
    right: 0;
  }

  &__content {
    background-color: $white;
    box-shadow: $box_shadow;
    width: toRem(320);
    border-radius: toRem(4);

    @media (max-width: $mobile) {
      width: toRem(280);
    }
  }
}

.transition {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: translateY(0);
    transition: all $transition;
  }

  &-enter-from,
  &-leave-to {
    pointer-events: none;
    transform: translateY(toRem(-12));
    opacity: 0;
  }
}
</style>
