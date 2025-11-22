import { content } from "./index.js";
import locationMap from './images/locationMap.png';

const aboutContent = document.createElement('div');
aboutContent.classList.add('about-page');

const backstoryContainer = document.createElement('div');
backstoryContainer.classList.add('backstory-container');

const backstoryTitle = document.createElement('h2');
backstoryTitle.textContent = 'Backstory';

const backstory = document.createElement('p');
backstory.textContent = "Super Sushi was founded by Keiko and Taro Nakamura, a husband-and-wife team with a shared passion for authentic Japanese cuisine. Keiko, a sushi chef trained in Osaka, brings over 20 years of experience, while Taro's expertise in restaurant management ensures every guest feels like part of the family. Together, they've created a warm, welcoming space where fresh, high-quality ingredients meet traditional Japanese techniques, offering a dining experience that's as much about community as it is about exceptional food. Whether you're a sushi enthusiast or a first-timer, Keiko and Taro's dedication to craft and hospitality makes Super Sushi a place for everyone.";

backstoryContainer.append(backstoryTitle, backstory);

const hoursContainer = document.createElement('div');
hoursContainer.classList.add('hours-container');

const hoursTitle = document.createElement('h2');
hoursTitle.textContent = 'Hours';

const restaurantHours = document.createElement('ul');
const weekdayHours = document.createElement('li');
const weekendHours = document.createElement('li');

weekdayHours.textContent = 'Mon-Fri: 8am - 8pm';
weekendHours.textContent = 'Sat-Sun: 8am - 10pm';

restaurantHours.append(weekdayHours, weekendHours);
hoursContainer.append(hoursTitle, restaurantHours);

const mapContainer = document.createElement('div');
mapContainer.classList.add('map-container');

const mapTitle = document.createElement('h2');
mapTitle.textContent = 'Map';

const mapImage = document.createElement('img');
mapImage.src = locationMap;

mapContainer.append(mapTitle, mapImage);

aboutContent.append(backstoryContainer, hoursContainer, mapContainer);

export const loadAbout = () => {
    content.appendChild(aboutContent);
}