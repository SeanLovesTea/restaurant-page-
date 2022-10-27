import createHeader from './header.js';
import createHome from './home.js';
import createMenu from './menu.js';

const content = document.querySelector('#content');
content.appendChild(createHeader());
content.appendChild(createHome());
// content.appendChild(createMenu());

