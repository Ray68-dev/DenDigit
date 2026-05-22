import { initMap } from './map.js';
import { initUI } from './ui.js';

window.addEventListener('DOMContentLoaded', () => {

  initMap();

  initUI();

  console.log('SMANSA Navigator loaded');

});
