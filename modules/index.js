import createHeader from './header.js';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

const content = document.querySelector('#content');
content.appendChild(createHeader());
content.appendChild(createHome());

addListeners();
function addListeners(){
    const navHome = document.querySelector('#homeBTN');
    navHome.addEventListener('click',loadHome);

    const navMenu = document.querySelector('#menuBTN');
    navMenu.addEventListener('click',loadMenu);
    
    const navContact = document.querySelector('#contactBTN');
    navContact.addEventListener('click',loadContact);
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

function loadContact(){
    content.replaceChildren();
    content.appendChild(createHeader());
    content.appendChild(createContact());
    console.log("getting here?")
    addListeners();
};
