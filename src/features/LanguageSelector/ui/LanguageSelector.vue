<script lang="ts" setup>
import { ref } from "vue";
import { BaseDropdown, LangIcon, CloseIcon } from "@/shared/ui";
import { EnumLanguage, type ILanguageSelectorItem, type ILanguageSelectorOption } from "../types";

interface LanguageSelectorProps {
  className?: string;
}

defineProps<LanguageSelectorProps>();

const dropdownRef = ref<InstanceType<typeof BaseDropdown> | null>(null);
const parentRef = ref<HTMLElement | null>(null);
const selectedLanguage = ref<EnumLanguage>(EnumLanguage.en);
const dropdownOptions = ref<ILanguageSelectorOption[]>([
  {
    label: "Language",
    items: [
      {
        text: "English  (EN)",
        value: EnumLanguage.en,
      },
      {
        text: "Español  (ES)",
        value: EnumLanguage.es,
      },
    ],
  },
]);

const openDropdown = () => {
  dropdownRef.value?.open();
};
const closeDropdown = () => {
  dropdownRef.value?.close();
};

const selectLanguage = (item: ILanguageSelectorItem) => {
  selectedLanguage.value = item.value;
};
</script>

<template>
  <div
    ref="parentRef"
    class="language"
    :class="[className, { isOpen: dropdownRef?.isOpen }]"
    @mouseover="openDropdown"
    @mouseleave="closeDropdown"
  >
    <button class="language__toggler" type="button">
      <LangIcon />
    </button>
    <BaseDropdown :parentRef="parentRef" position="right" ref="dropdownRef">
      <div class="language__dropdown">
        <button class="language__close" @click="closeDropdown" type="button">
          <CloseIcon />
        </button>
        <div class="language__options">
          <div
            v-for="(option, index) in dropdownOptions"
            :key="index"
            class="language__option"
          >
            <p class="language__label">{{ option.label }}</p>
            <ul class="language__items">
              <li
                class="language__item"
                v-for="(item, itemIndex) in option.items"
                :key="itemIndex"
              >
                <button
                  class="language__button"
                  :class="{ isActive: selectedLanguage === item.value }"
                  @click="selectLanguage(item)"
                  type="button"
                >
                  {{ item.text }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BaseDropdown>
  </div>
</template>

<style lang="scss" scoped>
@import "src/app/assets/styles/variables.scss";

.language {
  position: relative;

  &__toggler {
    @include flexColumn(center, center);
    width: toRem(48);
    height: toRem(48);
    transition: background-color $transition;

    @media (any-hover: hover) {
      &:hover {
        background-color: $grey_light;
      }
    }

    .isOpen & {
      background-color: $grey_light;
    }
  }

  &__dropdown {
    position: relative;
    padding: toRem(50) toRem(20) toRem(50) toRem(40);

    @media (max-width: $mobile) {
      padding: toRem(24);
    }
  }

  &__close {
    position: absolute;
    right: 0;
    top: 0;
    margin: toRem(16);
    @include flexRow(center, center);
    width: toRem(36);
    height: toRem(36);
    border-radius: 50%;
    transition: background-color $transition;

    @media (any-hover: hover) {
      &:hover {
        background-color: $grey_light;
      }
    }

    @media (max-width: $mobile) {
      margin: toRem(8);
    }
  }

  &__options {
    @include flexColumn();
    row-gap: toRem(36);
  }

  &__label {
    font-weight: 300;
  }

  &__items {
    @include flexColumn();
    row-gap: toRem(12);
    margin-top: toRem(12);
  }

  &__button {
    display: inline-block;
    padding: toRem(4) toRem(12);
    line-height: 175%;
    border-radius: toRem(30);
    font-weight: 200;
    color: #908b84;
    transition: color $transition, background-color $transition;

    @media (any-hover: hover) {
      &:hover {
        color: $mainColor;
      }
    }

    &.isActive {
      background-color: #eceade;
    }
  }
}
</style>
