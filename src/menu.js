import { sushiCardsDiv } from './menu-items/sushi.js';
import { drinkCardsDiv } from './menu-items/drinks.js';
import { content } from './index.js';

const menuContent = document.createElement('div');
menuContent.classList.add('menu-page');

const sushiSection = document.createElement('div');
sushiSection.classList.add('sushi-section');

const sushiMenuTitle = document.createElement('h1');
sushiMenuTitle.textContent = 'Sushi';

sushiSection.append(sushiMenuTitle, sushiCardsDiv);

const drinkSection = document.createElement('div');
drinkSection.classList.add('drink-section');

const drinkMenuTitle = document.createElement('h1');
drinkMenuTitle.textContent = 'Drinks';

drinkSection.append(drinkMenuTitle, drinkCardsDiv);

menuContent.append(sushiSection, drinkSection);

export const loadMenu = () => {
    content.appendChild(menuContent);
}