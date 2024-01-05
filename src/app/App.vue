<script setup lang="ts">
import { MainHeader } from '@/widgets/Header';
import {
  SectionPreview,
  SectionSliders,
  SectionVideo,
  SectionAdaptogens,
  SectionComments,
} from '@/widgets/MainSections';
import { LanguageProvider } from './providers';
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
