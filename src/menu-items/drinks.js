import appleJuice from '../images/appleJuice.jpg';
import dietPepsi from '../images/dietPepsi.jpg';
import fijiWater from '../images/fijiWater.jpg';
import gingerAle from '../images/gingerAle.jpg';
import jupina from '../images/jupina.jpg';
import lemonade from '../images/lemonade.jpg';
import materva from '../images/materva.jpg';
import orangeCrush from '../images/orangeCrush.jpg';
import orangeJuice from '../images/orangeJuice.jpg';
import peachTea from '../images/peachTea.jpg';
import pepsi from '../images/pepsi.jpg';
import starry from '../images/starry.jpg';

export const drinkSection = document.createElement('div');
drinkSection.classList.add('drink-section');

const drinks = [
    {imageSrc: appleJuice, class: 'apple-juice', title: 'Apple Juice', price: '$2.99'},
    {imageSrc: dietPepsi, class: 'diet-pepsi', title: 'Diet Pepsi', price: '$1.99'},
    {imageSrc: fijiWater, class: 'fiji-water', title: 'Fiji Water', price: '$2.99'},
    {imageSrc: gingerAle, class: 'ginger-ale', title: 'Ginger Ale', price: '$1.99'},
    {imageSrc: jupina, class: 'jupina', title: 'Jupina', price: '$1.99'},
    {imageSrc: lemonade, class: 'lemonade', title: 'Lemonade', price: '$1.99'},
    {imageSrc: materva, class: 'materva', title: 'Materva', price: '$1.99'},
    {imageSrc: orangeCrush, class: 'orange-crush', title: 'Orange Crush', price: '$1.99'},
    {imageSrc: orangeJuice, class: 'orange-juice', title: 'Orange Juice', price: '$2.99'},
    {imageSrc: peachTea, class: 'peach-tea', title: 'Lipton Iced Peach Tea', price: '$1.99'},
    {imageSrc: pepsi, class: 'pepsi', title: 'Pepsi', price: '$1.99'},
    {imageSrc: starry, class: 'starry', title: 'Starry', price: '$1.99'},
];

drinks.forEach((drink) => {
    const drinkCard = document.createElement('div');
    drinkCard.classList.add('card', drink.class);

    const drinkImage = document.createElement('img');
    drinkImage.classList.add('drink-menu-image', drink.class);
    drinkImage.src = drink.imageSrc;

    const drinkTitle = document.createElement('h2');
    drinkTitle.textContent = drink.title;

    const drinkPrice = document.createElement('p');
    drinkPrice.textContent = drink.price;

    drinkCard.append(drinkImage, drinkTitle, drinkPrice);
    drinkSection.appendChild(drinkCard);
});