import { initMap } from '../map.js';
import { setupAuthListener } from './auth.js';
import { listenEvents } from './events.js';

window.addEventListener('DOMContentLoaded', () => {

  initMap();

  setupAuthListener();

  listenEvents();

});