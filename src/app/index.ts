import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import VuePlyr from 'vue-plyr';
import App from './App.vue';

import './assets/styles/main.scss';
import 'vue-plyr/dist/vue-plyr.css';

export const app = createApp(App);
app.use(MotionPlugin);
app.use(VuePlyr, {
  plyr: {},
});
