<script setup lang="ts">
import { MainHeader } from '@/widgets/Header';
import {
  SectionPreview,
  SectionSliders,
  SectionVideo,
} from '@/widgets/MainSections';
import 'swiper/css';
import 'swiper/css/effect-fade';
</script>

<template>
  <div class="wrapper">
    <MainHeader />
    <main>
      <SectionPreview />
      <SectionSliders />
      <SectionVideo />
      <section />
    </main>
  </div>
</template>

<style scoped lang="scss"></style>
