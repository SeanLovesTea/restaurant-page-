function createContact(){

    const hero = document.createElement('div.');
    hero.classList.add('hero');

    const container = document.createElement('div');
    container.classList.add('container');
    hero.appendChild(container);

    const contactMenu = document.createElement('div');
    contactMenu.classList.add('contact-menu');
    container.appendChild(contactMenu);

    const flexbox = document.createElement('div');
    flexbox.classList.add('flexbox');
    contactMenu.appendChild(flexbox);

    const left = document.createElement('div');
    left.classList.add('left');
    flexbox.appendChild(left);

    const h1Left = document.createElement('h1');
    h1Left.innerHTML = 'Come find us...';
    left.appendChild(h1Left);

    const mapIMG = document.createElement('div');
    mapIMG.classList.add('map-img');
    flexbox.appendChild(mapIMG);

    const right = document.createElement('div');
    right.classList.add('right');
    flexbox.appendChild(right);

    const h2Right = document.createElement('h2');
    h2Right.innerHTML = '1 Up the Road, Tim Bobbity Lane, Seanyland';
    right.appendChild(h2Right);

    const callNow = document.createElement('div');
    callNow.classList.add('call-now');
    contactMenu.appendChild(callNow);

    const callNowH2 = document.createElement('h2');
    callNowH2.innerHTML ='Call now on 0871231666';
    callNow.appendChild(callNowH2);

    return hero;
    
}
export default createContact;

