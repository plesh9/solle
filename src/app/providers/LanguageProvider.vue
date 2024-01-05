<script lang="ts" setup>
import { onMounted } from 'vue';
import { useLanguage } from '../i18n/hooks';
import { getCurrentLocale } from '../i18n/utils';

const { setLanguage } = useLanguage();
const currentLocale = getCurrentLocale();

onMounted(() => {
  setLanguage(currentLocale);
});
</script>

<template>
  <slot />
</template>
