<script setup lang="ts">
import { LanguageProvider } from './providers';
import { MainHeader } from '@/widgets/Header';
import {
  SectionPreview,
  SectionSliders,
  SectionVideo,
  SectionAdaptogens,
  SectionComments,
} from '@/widgets/MainSections';
</script>

<template>
  <LanguageProvider>
    <div class="wrapper">
      <MainHeader />
      <main>
        <SectionPreview />
        <SectionSliders />
        <SectionVideo />
        <SectionAdaptogens />
        <SectionComments />
      </main>
    </div>
  </LanguageProvider>
</template>
