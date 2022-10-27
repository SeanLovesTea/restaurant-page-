console.log("Hey index.js alert here. Nice to meet you.");

import createHome from './home.js';
import createHeader from './header.js';

const content = document.querySelector('#content');
// content.appendChild(createHome());
content.appendChild(createHeader());
