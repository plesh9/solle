import { createApp } from 'vue';
import './assets/styles/main.scss';
import App from './App.vue';
import { MotionPlugin } from '@vueuse/motion';

export const app = createApp(App);
app.use(MotionPlugin);
