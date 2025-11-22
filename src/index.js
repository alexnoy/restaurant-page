import './styles.css';
import { loadHome } from "./home.js";
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

export const content = document.getElementById('content');
const nav = document.querySelector('nav');
const homeNavButton = nav.querySelector('button');
const menuNavButton = nav.querySelector('button:nth-child(2)');
const aboutNavButton = nav.querySelector('button:last-of-type');

const clearPage = () => {
    content.childNodes.forEach((childNode) => {
        childNode.remove();
    });
}

const initialLoad = (() => {
    loadHome();
})();

const createPage = (loadPage) => {
    clearPage();
    loadPage();
}

homeNavButton.addEventListener('click', () => {
    createPage(loadHome);
});

menuNavButton.addEventListener('click', () => {
    createPage(loadMenu);
});

aboutNavButton.addEventListener('click', () => {
    createPage(loadAbout);
});