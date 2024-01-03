import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import VuePlyr from 'vue-plyr';
import App from './App.vue';

import 'vue-plyr/dist/vue-plyr.css';
import './assets/styles/main.scss';

export const app = createApp(App);
app.use(MotionPlugin);
app.use(VuePlyr, {
  plyr: {},
});
