import './styles.css';
import { loadHome } from "./home.js";
import { loadMenu } from './menu.js';

const content = document.getElementById('content');
const nav = document.querySelector('nav');
const homeNavButton = nav.querySelector('button');
const menuNavButton = nav.querySelector('button:nth-child(2)');
const aboutNavButton = nav.querySelector('button:last-of-type');

const clearPage = () => {
    content.childNodes.forEach((childNode) => {
        childNode.remove();
    });
}

const createHomePage = () => {
    clearPage();
    loadHome();
}
homeNavButton.addEventListener('click', createHomePage);

const createMenuPage = () => {
    clearPage();
    loadMenu();
}
menuNavButton.addEventListener('click', createMenuPage);