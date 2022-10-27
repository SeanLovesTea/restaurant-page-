import createHeader from './header.js';
import createHome from './home.js';
import createMenu from './menu.js';

const content = document.querySelector('#content');
content.appendChild(createHeader());
content.appendChild(createHome());

addListeners();
function addListeners(){
    const navHome = document.querySelector('#homeBTN');
    navHome.addEventListener('click',loadHome);
    const navMenu = document.querySelector('#menuBTN');
    navMenu.addEventListener('click',loadMenu);
    // const navContact = document.querySelector('#contactBTN');
    // navContact.addEventListener('click',);
};

function loadHome(){
    content.replaceChildren();
    content.appendChild(createHeader());
    content.appendChild(createHome());
    addListeners();
};

function loadMenu(){
    content.replaceChildren();
    content.appendChild(createHeader());
    content.appendChild(createMenu());
    addListeners();
};