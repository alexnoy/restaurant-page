import caliRoll from '../images/californiaRoll.jpg';
import eelRoll from '../images/eelRoll.jpg';
import jbRoll from '../images/jbRoll.jpg';
import rainbowRoll from '../images/rainbowRoll.jpg';
import salmonRoll from '../images/salmonRoll.jpg';
import shrimpTempRoll from '../images/shrimpTempRoll.jpg';
import spicyKrabRoll from '../images/spicyKrabRoll.jpg';
import spicyTunaRoll from '../images/spicyTunaRoll.jpg';
import spiderRoll from '../images/spiderRoll.jpg';
import tunaRoll from '../images/tunaRoll.jpg';
import veggieRoll from '../images/veggieRoll.jpg';
import volcanoRoll from '../images/volcanoRoll.jpg';

export const sushiSection = document.createElement('div');
sushiSection.classList.add('sushi-section');

const sushiRolls = [
    {imageSrc: caliRoll, class: 'california-roll', title: 'California Roll', price: '$9.99', description: 'Kanikama, Avocado, Cucumber, Masago, & Sesame seeds on top'},
    {imageSrc: eelRoll, class: 'eel-roll', title: 'Eel Roll', price: '$10.99', description: 'Eel, Cucumber, & Sesame seeds'},
    {imageSrc: jbRoll, class: 'jb-roll', title: 'JB Roll', price: '$9.99', description: 'Salmon, Cream cheese, & Scallions'},
    {imageSrc: rainbowRoll, class: 'rainbow-roll', title: 'Rainbow Roll', price: '$13.99', description: 'California roll wrapped in variety of fresh raw fish'},
    {imageSrc: salmonRoll, class: 'salmon-roll', title: 'Salmon Roll', price: '$9.99', description: 'Chopped salmon & Scallions'},
    {imageSrc: shrimpTempRoll, class: 'shrimp-tempura-roll', title: 'Shrimp Tempura Roll', price: '$11.99', description: 'Shrimp tempura, Avocado, Asparagus, Scallions, & Sesame seeds'},
    {imageSrc: spicyKrabRoll, class: 'spicy-krab-roll', title: 'Spicy Krab Roll', price: '$9.99', description: 'Chopped imitation crab, Scallions, Masago, & Spicy mayo'},
    {imageSrc: spicyTunaRoll, class: 'spicy-tuna-roll', title: 'Spicy Tuna Roll', price: '$9.99', description: 'Chopped tuna, Scallions, Masago, & Spicy mayo'},
    {imageSrc: spiderRoll, class: 'spider-roll', title: 'Spider Roll', price: '$15.99', description: 'Soft shell crab fried, Asparagus, Avocado, & Cucumber'},
    {imageSrc: tunaRoll, class: 'tuna-roll', title: 'Tuna Roll', price: '$9.99', description: 'Chopped tuna, & Scallions'},
    {imageSrc: veggieRoll, class: 'veggie-roll', title: 'Veggie Roll', price: '$7.99', description: 'Avocado, Cucumber, Asparagus, & Carrots'},
    {imageSrc: volcanoRoll, class: 'volcano-roll', title: 'Volcano Roll', price: '$14.99', description: 'Imitation crab, Masago, Avocado, Cucumber, Cream cheese, Spicy mayo, Sesame seeds, & Spicy krab salad on the top'},
];

sushiRolls.forEach((roll) => {
    const sushiCard = document.createElement('div');
    sushiCard.classList.add('card', roll.class);

    const sushiImage = document.createElement('img');
    sushiImage.classList.add('sushi-menu-image', roll.class);
    sushiImage.src = roll.imageSrc;

    const sushiTitle = document.createElement('h2');
    sushiTitle.textContent = roll.title;

    const sushiDescription = document.createElement('p');
    sushiDescription.textContent = roll.description;

    const sushiPrice = document.createElement('p');
    sushiPrice.textContent = roll.price;

    sushiCard.append(sushiImage, sushiTitle, sushiDescription, sushiPrice);
    sushiSection.appendChild(sushiCard);
});