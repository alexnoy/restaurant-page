import { sushiSection } from './menu-items/sushi.js';
import { content } from './index.js';

const menuContent = document.createElement('div');
menuContent.classList.add('menu-page');

menuContent.append(sushiSection);

export const loadMenu = () => {
    content.appendChild(menuContent);
}