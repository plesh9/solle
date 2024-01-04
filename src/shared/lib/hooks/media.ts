import { ref, watchEffect } from 'vue';

export const useMedia = (query: string) => {
  const matches = ref(true);

  watchEffect((onInvalidate) => {
    const media = window.matchMedia(query);

    const updateMatches = () => {
      matches.value = media.matches;
    };

    updateMatches();

    const onChange = () => {
      updateMatches();
    };

    media.addEventListener('change', onChange);

    onInvalidate(() => {
      media.removeEventListener('change', onChange);
    });
  });

  return matches;
};

export const isMobile = useMedia('(max-width: 47.99875em)');
export const isTablet = useMedia('(max-width: 61.99875em)');
