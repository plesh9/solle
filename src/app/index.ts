import { createApp } from 'vue';
import { i18n } from './i18n';
import { MotionPlugin } from '@vueuse/motion';
import VuePlyr from 'vue-plyr';
import App from './App.vue';

import 'vue-plyr/dist/vue-plyr.css';
import './assets/styles/main.scss';

export const app = createApp(App);
app.use(i18n);
app.use(MotionPlugin);
app.use(VuePlyr, {
  plyr: {},
});
