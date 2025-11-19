import sushiImage from './images/sushi.jpeg';
import interior from './images/interior.jpg';
import { content } from './index.js';

const homeContent = document.createElement('div');
homeContent.classList.add('home-page');

const restaurantName = document.createElement('h1');
restaurantName.classList.add('rest-name');
restaurantName.textContent = 'Super Sushi';

const foodImage = document.createElement('img');
foodImage.classList.add('sushi-hero-image');
foodImage.src = sushiImage;

const homeDescription = document.createElement('p');
homeDescription.textContent = "At Super Sushi, every plate is crafted with care, combining fresh ingredients with traditional Japanese techniques. The restaurant's warm, relaxed atmosphere makes it an inviting place to sit down, unwind, and enjoy good food with good company. Whether you're stopping in for a quick lunch or settling in for a full dinner, Super Sushi offers a comfortable space where flavorful rolls, sashimi, and house specialties take center stage. It's a place that welcomes everyone—from longtime sushi lovers to those trying it for the first time.";

const interiorImage = document.createElement('img');
interiorImage.classList.add('rest-interior-image');
interiorImage.src = interior;

const address = document.createElement('p');
address.textContent = '1738 Sushi Blvd Sashimi, FN 912867';

homeContent.append(restaurantName, foodImage, homeDescription, interiorImage, address);

export const loadHome = () => {
    content.appendChild(homeContent);
}
