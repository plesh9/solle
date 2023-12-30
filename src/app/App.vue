<script setup lang="ts">
import { MainHeader } from "@/widgets/Header";
import { SectionPreview, SectionSliders } from "@/widgets/MainSections";
import "swiper/css";
import "swiper/css/effect-fade";
</script>

<template>
  <div class="wrapper">
    <MainHeader />
    <main>
      <SectionPreview />
      <SectionSliders />
    </main>
  </div>
</template>

<style scoped lang="scss"></style>
