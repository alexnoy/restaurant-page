import { sushiSection } from './menu-items/sushi.js';
import { drinkSection } from './menu-items/drinks.js';
import { content } from './index.js';

const menuContent = document.createElement('div');
menuContent.classList.add('menu-page');

const sushiMenuTitle = document.createElement('h1');
sushiMenuTitle.textContent = 'Sushi';

const drinkMenuTitle = document.createElement('h1');
drinkMenuTitle.textContent = 'Drinks';

menuContent.append(sushiMenuTitle, sushiSection, drinkMenuTitle, drinkSection);

export const loadMenu = () => {
    content.appendChild(menuContent);
}