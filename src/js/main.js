import { Slider } from './slider.js';
import { Menu } from './menu-header.js';


window.addEventListener('DOMContentLoaded', () => {
  new Menu().toggle();  
  new Slider().eventListener();
});


